import { CollectionReference, FieldPath } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import Stripe from "stripe";
import config from "../config";

import { db } from "../setup";
import { ArrayElement, Processing_order, Product, User } from "../type";

// Initialize stripe
const apiVersion = "2020-08-27";
const stripe = new Stripe(config.stripeSecretKey, {
  apiVersion,
  appInfo: {
    name: "Dormit",
    version: "1.0",
  },
});

/**
 * Fire when a an existing payment is updated
 * If the transaction is success, update database
 * In short, it does
 * - update user's temp_order
 * - update user's current_orders if succeed
 * - update processing_orders if succeed
 * - update Stripe product inventory if succeed
 */
export const postCheckout = functions
  .runWith({
    // allows the function to use environment secret STRIPE_API_KEY
    secrets: ["STRIPE_API_KEY"],
    // Keep 1 instances warm to reduce latency.
    // More on https://cloud.google.com/functions/docs/configuring/min-instances
    minInstances: 0,
    // no more than 20 instances of the function should be running at once.
    // More on https://cloud.google.com/functions/docs/configuring/max-instances
    maxInstances: 20,
  })
  .firestore.document("/users/{userId}/payments/{paymentId}")
  .onWrite(async (snap, context) => {
    /**
     * we don't enable retry on fail execution at this moment, but if we do so in the future,
     * setting end condition to avoid infinite retry loops is still recommended
     * more on https://firebase.google.com/docs/functions/retries#set_an_end_condition_to_avoid_infinite_retry_loops
     */
    const eventAgeMs = Date.now() - Date.parse(context.timestamp);
    const eventMaxAgeMs = 1000 * 10;
    if (eventAgeMs > eventMaxAgeMs) {
      functions.logger.log(
        `Dropping event ${context} with age[ms]: ${eventAgeMs}`
      );
      return;
    }

    // Grab the current value of what was written to Firestore.
    const payment = snap.after.data() as Stripe.PaymentIntent;

    /**
     * get the user's data
     */
    const userId = context.params.userId as string;
    const paymentId = context.params.paymentId as string;

    const usersRef = db.collection("users") as CollectionReference<User>;
    const productRef = db.collection(
      "products"
    ) as CollectionReference<Product>;
    const processingOrdersRef = db.collection(
      "processing_orders"
    ) as CollectionReference<Processing_order>;
    const currentOrdersRef = usersRef
      .doc(userId)
      .collection("current_orders") as CollectionReference<
      ArrayElement<User["current_orders"]>
    >;

    try {
      const userDoc = await usersRef.doc(userId).get();
      const userDetail = userDoc.data();
      if (!userDoc.exists || !userDetail) {
        functions.logger.error(
          `user with uid ${userId} doesn't exist in database`
        );
        throw new functions.https.HttpsError(
          "internal",
          "cannot access data of user that didn't exist in database"
        );
      }

      /**
       * check the status of the data
       * only when status is "succeeded" do we adjust the inventory and order
       * otherwise, we will just reset the temp_order
       */
      if (payment.status === "succeeded") {
        const tempOrder = userDetail.temp_order;

        if (!tempOrder) {
          functions.logger.error(
            "temp_order is somehow empty despite payment is succeed"
          );
          throw new functions.https.HttpsError(
            "internal",
            "temp_order is somehow empty"
          );
        }
        if (
          tempOrder.payment_id !== payment.id ||
          tempOrder.payment_id !== paymentId
        ) {
          functions.logger.error(
            "temp_order has different payment_id than this payment id here"
          );
          throw new functions.https.HttpsError(
            "internal",
            "the payment id in temp_order does not match the payment id written to database"
          );
        }

        /**
         * check if an order of same id has existed or not in processing_orders
         * we assume that processing_orders and current_orders are in sync with each other,
         * thus only need to check one of the collection and not both
         * if there is one already existed, something is wrong
         */
        const orderDoc = await processingOrdersRef.doc(paymentId).get();
        if (orderDoc.exists) {
          functions.logger.error(
            `order of id ${paymentId} already existed in processing_orders`
          );
          throw new functions.https.HttpsError(
            "internal",
            "an order of the same id has already existed. Something is wrong here"
          );
        }

        /**
         * ---------------------------------------------------------------------------------
         * UPDATE PRODUCT DATA in STRIPE
         * ---------------------------------------------------------------------------------
         */

        /**
         * get the data about items that are in the order
         * we have to get the current inventory in order to
         * update the inventory in Stripe
         * ****
         * in the future, when we no longer rely on Stripe for inventory management,
         * we can just update Firestore, which is way faster
         */

        const itemsInOrder = tempOrder.items;

        /**
         * get the items in inventory that is in the order
         */
        const snapshot = await productRef
          .where(
            FieldPath.documentId(),
            "in",
            itemsInOrder.map((item) => item.product_id)
          )
          .get();

        /**
         * array of product that changed because of the order
         * contains the updated data that will be used to update inventory
         */
        const inventoryUpdatedData: Array<
          ArrayElement<typeof itemsInOrder> & Product
        > = [];

        snapshot.forEach(async (doc) => {
          const orderData = itemsInOrder.find(
            (elem) => elem.product_id === doc.id
          );
          if (!orderData) {
            functions.logger.error(
              `the item in order doesn't exist in database`
            );
            throw new functions.https.HttpsError(
              "internal",
              "Cannot find the item's data in database"
            );
          }
          inventoryUpdatedData.push({
            ...orderData,
            ...doc.data(),
            quantity:
              parseInt(doc.data().metadata.quantity) - orderData.quantity,
          });
        });

        /**
         * update the inventory in Stripe
         */
        await Promise.allSettled(
          inventoryUpdatedData.map(async (item) => {
            await stripe.products.update(item.product_id, {
              metadata: {
                ...item.metadata,
                quantity: item.quantity,
              },
            });
          })
        );

        /**
         * -----------------------------------------------------------------------------------------------
         * UPDATE PROCESSING_ORDERS and user's CURRENT_ORDERS
         * -----------------------------------------------------------------------------------------------
         */

        /**
         * we use batch write here to ensure that both write operations must either succeed or fail together
         * we don't want the case where we have one write fail while the other success
         * orders must be synced between collection "current_orders" and in collection "users" field current_orders
         */
        const batch = db.batch();

        // create new document in the "current_orders" collection
        batch.set(
          processingOrdersRef.doc(paymentId),
          {
            ...tempOrder,
            process_stage: 0,
          },
          { merge: true }
        );

        // create new document in "users" collection's field current_orders
        batch.set(
          currentOrdersRef.doc(paymentId),
          {
            ...tempOrder,
            process_stage: 0,
          },
          { merge: true }
        );

        // reset the temp_order and empty the user's cart
        batch.set(
          usersRef.doc(userId),
          {
            temp_order: null,
            cart: [],
          },
          { merge: true }
        );

        // Commit the batch
        await batch.commit();
      } else {
        // for any other status, reset it
        await usersRef.doc(userId).set(
          {
            temp_order: null,
          },
          { merge: true }
        );
      }
    } catch (error) {
      functions.logger.error(
        `Error: postCheckout error happened with user ${userId} and payment ${paymentId}`,
        (error as Error).message
      );
    }
  });
