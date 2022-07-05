import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import Stripe from "stripe";

import { firestore } from "firebase-admin";
import { CollectionReference, FieldValue } from "firebase-admin/firestore";
import config from "./config";

const apiVersion = "2020-08-27";
const stripe = new Stripe(config.stripeSecretKey, {
  apiVersion,
  appInfo: {
    name: "Dormit",
    version: "1.0",
  },
});

admin.initializeApp();
const db = firestore();
/**
 * Fire when a an existing payment is updated
 * If the transaction is success, update the inventory IN STRIP
 * and update the user's current order in firebase
 */
export const updateInventory = functions
  .runWith({
    // allows the function to use environment secret STRIPE_API_KEY
    secrets: ["STRIPE_API_KEY"],
    // Keep 1 instances warm to reduce latency.
    // More on https://cloud.google.com/functions/docs/configuring/min-instances
    minInstances: 1,
    // no more than 20 instances of the function should be running at once.
    // More on https://cloud.google.com/functions/docs/configuring/max-instances
    maxInstances: 20,
  })
  .firestore.document("/users/{userId}/payments/{paymentId}")
  .onUpdate(async (snap, context) => {
    /**
     * we don't enable retry on fail execution at this moment, but if we do so in the future,
     * setting end condition to avoid infinite retry loops is still recommended
     * more on https://firebase.google.com/docs/functions/retries#set_an_end_condition_to_avoid_infinite_retry_loops
     */
    const eventAgeMs = Date.now() - Date.parse(context.timestamp);
    const eventMaxAgeMs = 1000 * 10;
    if (eventAgeMs > eventMaxAgeMs) {
      console.log(`Dropping event ${context} with age[ms]: ${eventAgeMs}`);
      return;
    }

    // Grab the current value of what was written to Firestore.
    const payment = snap.after.data() as Stripe.Checkout.SessionCreateParams & {
      status: string;
      items: Array<Stripe.LineItem>;
    };

    /**
     * check the status of the data
     * only when status is "succeeded" do we adjust the inventory
     */
    if (payment.status === "succeeded") {
      // get the sell data
      const { items } = payment;
      const itemsSellData = items.map((item) => {
        if (!item.price || !item.quantity) {
          throw new Error("price is missing");
        }
        return {
          prod_id: item.price.product as string,
          sold_quantity: item.quantity,
        };
      });

      const productRef = db.collection("products") as CollectionReference<{
        metadata: {
          quantity: string;
        };
      }>;

      /**
       * get the current inventory
       */
      const firestoreData = await productRef
        .where(
          firestore.FieldPath.documentId(),
          "in",
          itemsSellData.map((item) => item.prod_id)
        )
        .get();

      firestoreData.forEach(async (product) => {
        const itemSellData = itemsSellData.find(
          (elem) => elem.prod_id === product.id
        );

        if (!itemSellData) {
          throw new Error("something is wrong here");
        }
        /**
         * update the inventory in Stripe
         */
        await stripe.products.update(product.id, {
          metadata: {
            quantity:
              parseInt(product.data().metadata.quantity) -
              itemSellData.sold_quantity,
          },
        });
      });

      /**
       * update the user's current order in firebase
       * we check for duplicate order
       * in case something went wrong and we already push the order already
       */
      const userId = context.params.userId;
      const paymentId = context.params.paymentId;
      const userRef = db.collection("users") as CollectionReference<{
        current_order: Array<string>;
      }>;

      const userData = (await userRef.doc(userId).get()).data();

      if (!userData) {
        throw new Error("user didn't exist in database");
      }

      if (
        userData.current_order &&
        userData.current_order.includes(paymentId)
      ) {
        throw new Error("somehow the order already in the user's active order");
      }

      await userRef.doc(userId).update({
        current_order: FieldValue.arrayUnion(paymentId),
      });
    }
  });
