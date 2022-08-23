import * as functions from "firebase-functions";
import Stripe from "stripe";
import config from "../../config";
import { db } from "../../setup";

import { CustomerData, PriceStripe, ProductStripe } from "./interfaces";
import * as logs from "./logs";

const apiVersion = "2020-08-27";
const stripe = new Stripe(config.stripeSecretKey, {
  apiVersion,
  appInfo: {
    name: "Dormit",
    version: "1.0",
  },
});

/**
 * Create a customer object in Stripe when a user is created.
 */
const createCustomerRecord = async ({
  email,
  uid,
  phone,
}: {
  email?: string;
  phone?: string;
  uid: string;
}) => {
  try {
    const customerData: CustomerData = {
      metadata: {
        firebaseUID: uid,
      },
    };
    if (email) customerData.email = email;
    if (phone) customerData.phone = phone;
    const customer = await stripe.customers.create(customerData);
    // Add a mapping record in Cloud Firestore.
    const customerRecord = {
      phone: phone,
      stripeId: customer.id,
    };
    await db.collection("users").doc(uid).set(customerRecord, { merge: true });
    logs.customerCreated(customer.id, customer.livemode);
    return customerRecord;
  } catch (error) {
    logs.customerCreationError(error as Error, uid);
    return null;
  }
};

export const createCustomer = functions
  .runWith({
    // allows the function to use environment secret STRIPE_API_KEY
    secrets: ["STRIPE_API_KEY"],
  })
  .auth.user()
  .onCreate(async (user): Promise<void> => {
    const { email, uid, phoneNumber } = user;
    await createCustomerRecord({
      email,
      uid,
      phone: phoneNumber,
    });
  });

/**
 * Retrieve Stripe publishable key (i.e public key)
 */
export const getStripePublishableKey = functions.https.onCall((_, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "permission-denied",
      `The user must be authenticated to perform these task`
    );
  }
  return {
    stripePublishableKey: config.stripePublishableKey,
  };
});

/**
 * Prefix Stripe metadata keys with `stripe_metadata_` to be spread onto Product and Price docs in Cloud Firestore.
 */
const prefixMetadata = (metadata: { [propName: string]: unknown }) =>
  Object.keys(metadata).reduce(
    (prefixedMetadata: { [propName: string]: unknown }, key) => {
      prefixedMetadata[`stripe_metadata_${key}`] = metadata[key];
      return prefixedMetadata;
    },
    {}
  );

/**
 * Create a Product record in Firestore based on a Stripe Product object.
 */
const createProductRecord = async (product: Stripe.Product): Promise<void> => {
  const rawMetadata = product.metadata;

  const productData: ProductStripe = {
    name: product.name,
    description: product.description,
    images: product.images,
    metadata: product.metadata,
    ...prefixMetadata(rawMetadata),
  };
  await db
    .collection("products")
    .doc(product.id)
    .set(productData, { merge: true });
  logs.firestoreDocCreated("products", product.id);
};

/**
 * Create a price (billing price plan) and insert it into a subcollection in Products.
 */
const insertPriceRecord = async (price: Stripe.Price): Promise<void> => {
  const priceData: PriceStripe = {
    price_id: price.id,
    product_id: price.product,
    currency: price.currency,
    unit_amount: price.unit_amount,
    ...prefixMetadata(price.metadata),
  };
  const dbRef = db.collection("products").doc(price.product as string);

  const productData = (await dbRef.get()).data() as ProductStripe;
  /**
   * need to check whether the product has existed in firestore or not
   * this is needed because when a product is created,
   * two events "product.created" and "price.created" are fired at the same time
   * and the product may not get created on firestore yet when this function is called
   * this will make productData undefined even though it still show in firestore (it's just not there when the function call it)
   */

  const data = { ...productData };
  if (productData && productData.prices) {
    data.prices = [
      ...productData.prices.filter(
        (price) => price.price_id !== priceData.price_id
      ),
      priceData,
    ];
  } else {
    data.prices = [priceData];
  }

  await dbRef.set(data, { merge: true });

  logs.firestoreDocCreated("prices", price.id);
};

/**
 * Add PaymentIntent objects to Cloud Firestore for one-time payments.
 */
const insertPaymentRecord = async (payment: Stripe.PaymentIntent) => {
  // Get customer's UID from Firestore
  const customersSnap = await db
    .collection("users")
    .where("stripeId", "==", payment.customer)
    .get();
  if (customersSnap.size !== 1) {
    throw new Error("User not found!");
  }

  // Write to invoice to a subcollection on the subscription doc.
  await customersSnap.docs[0].ref
    .collection("payments")
    .doc(payment.id)
    .set(payment, { merge: true });
  logs.firestoreDocCreated("payments", payment.id);
};

/**
 * A webhook handler function for the relevant Stripe events.
 */
export const handleStripeWebhookEvents = functions
  .runWith({
    // allows the function to use environment secret STRIPE_API_KEY
    secrets: ["STRIPE_API_KEY", "STRIPE_WEBHOOK_SECRET"],
  })
  .https.onRequest(async (req, resp) => {
    const relevantEvents = new Set([
      "product.created",
      "product.updated",
      "product.deleted",

      "price.created",
      "price.updated",
      "price.deleted",

      "payment_intent.processing",
      "payment_intent.succeeded",
      "payment_intent.canceled",
      "payment_intent.payment_failed",
    ]);
    let event: Stripe.Event;

    // Instead of getting the `Stripe.Event`
    // object directly from `req.body`,
    // use the Stripe webhooks API to make sure
    // this webhook call came from a trusted source
    try {
      const stripeSignature = req.get("stripe-signature");
      if (!stripeSignature) {
        functions.logger.error("stripe-signature header is missing");
        throw new Error("stripe-signature is missing");
      }

      event = stripe.webhooks.constructEvent(
        req.rawBody,
        stripeSignature,
        config.stripeWebhookSecret
      );
    } catch (error) {
      logs.badWebhookSecret(error as Error);
      resp.status(401).send("Webhook Error: Invalid Secret");
      return;
    }

    if (relevantEvents.has(event.type)) {
      logs.startWebhookEventProcessing(event.id, event.type);
      try {
        switch (event.type) {
          case "product.created":
          case "product.updated":
            await createProductRecord(event.data.object as Stripe.Product);
            break;
          case "price.created":
          case "price.updated":
            await insertPriceRecord(event.data.object as Stripe.Price);
            break;
          case "product.deleted":
            await deleteProductOrPrice(event.data.object as Stripe.Product);
            break;
          case "price.deleted":
            await deleteProductOrPrice(event.data.object as Stripe.Price);
            break;

          case "payment_intent.processing":
          case "payment_intent.succeeded":
          case "payment_intent.canceled":
          case "payment_intent.payment_failed": {
            const paymentIntent = event.data.object as Stripe.PaymentIntent;
            await insertPaymentRecord(paymentIntent);
            break;
          }

          default:
            logs.webhookHandlerError(
              new Error("Unhandled relevant event!"),
              event.id,
              event.type
            );
        }

        logs.webhookHandlerSucceeded(event.id, event.type);
      } catch (error) {
        logs.webhookHandlerError(error as Error, event.id, event.type);
        resp.json({
          error: "Webhook handler failed. View function logs in Firebase.",
        });
        return;
      }
    }

    // Return a response to Stripe to acknowledge receipt of the event.
    resp.json({ received: true });
  });

const deleteProductOrPrice = async (pr: Stripe.Product | Stripe.Price) => {
  if (pr.object === "product") {
    await db.collection("products").doc(pr.id).delete();
    logs.firestoreDocDeleted("products", pr.id);
  }
  if (pr.object === "price") {
    // TODO: this will need to be fixed
    await db
      .collection("products")
      .doc((pr as Stripe.Price).product as string)
      .collection("prices")
      .doc(pr.id)
      .delete();
    logs.firestoreDocDeleted("prices", pr.id);
  }
};
