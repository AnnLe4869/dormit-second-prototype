import {
  CollectionReference,
  FieldPath,
  FieldValue,
} from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import Stripe from "stripe";
import config from "../config";

import { db } from "../setup";

/**
 * Fire when a an existing payment is updated
 * If the transaction is success, update the inventory IN STRIPE
 * and update the user's current order in firebase
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
  .onUpdate(async (snap, context) => {
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

    // Initialize stripe
    const apiVersion = "2020-08-27";
    const stripe = new Stripe(config.stripeSecretKey, {
      apiVersion,
      appInfo: {
        name: "Dormit",
        version: "1.0",
      },
    });

    // Grab the current value of what was written to Firestore.
    const payment = snap.after.data() as Stripe.PaymentIntent;

    /**
     * check the status of the data
     * only when status is "succeeded" do we adjust the inventory and order
     */
    if (payment.status === "succeeded") {
      /**
       * ---------------------------------------------------------------------------------
       * UPDATE PRODUCT DATA
       * ---------------------------------------------------------------------------------
       */

      /**
       * get the sell data
       */
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
       * get the items in inventory that is in the order
       */
      const firestoreData = await productRef
        .where(
          FieldPath.documentId(),
          "in",
          itemsSellData.map((item) => item.prod_id)
        )
        .get();

      firestoreData.forEach(async (product) => {
        const itemSellData = itemsSellData.find(
          (elem) => elem.prod_id === product.id
        );

        if (!itemSellData) {
          throw new Error("Cannot find the item's data");
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
       * -----------------------------------------------------------------------------------------------
       * UPDATE CURRENT ORDER DATA
       * -----------------------------------------------------------------------------------------------
       */

      /**
       * get the user's data
       */
      const userId = context.params.userId as string;
      const usersRef = db.collection("users") as CollectionReference<{
        name: string;
        phone: string;
        current_order: Array<{
          /**
           * payment_id used to search for PaymentIntent
           * provides details about order like shipping address, ordered items and their quantity
           */
          payment_id: string;
          /**
           * customer_id is used to effectively find user and update the order's process
           */
          customer_id: string;
          order_time: string;
          order_process: string;
          until_delivered: string;
        }>;
      }>;
      /**
       * we need user's data and not just user's id
       * because the rusher need some basic info about the customer, but not all info
       * it will be risky to have the rusher have all customer's info
       * we extract only necessary user's info and put that into current_orders for rusher to see
       */
      const userDoc = await usersRef.doc(userId).get();
      const user = userDoc.data();
      if (!userDoc.exists || !user) {
        throw new functions.https.HttpsError(
          "internal",
          "cannot access data of user that didn't exist in database"
        );
      }

      const currentOrdersRef = db.collection(
        "current_orders"
      ) as CollectionReference<{
        /**
         * used to search for PaymentIntent - provides details about order like order's products, cost, etc.
         * we use this as id for collection "current_orders" for convenience
         */
        order_time: number;
        order_process: number;
        payment_id: string;
        until_delivered: number;
        customer: {
          id: string;
          name: string;
          phone: string;
        };
        /**
         * at order time, we don't have any rusher assigned to the order
         */
        rusher: {
          id: string | null;
          name: string | null;
          phone: string | null;
        };
      }>;
      /**
       * check if an order of same id has existed or not
       * if there is one, something is wrong
       */
      const orderDoc = await currentOrdersRef.doc(userId).get();
      if (orderDoc.exists) {
        throw new functions.https.HttpsError(
          "internal",
          "an order of the same id has already existed. Something is wrong here"
        );
      }

      /**
       * create new document in collection "current_orders" and
       * create new order in "users" current_orders field
       */
      const EPOCH_CURRENT_TIME = new Date().getTime();
      const TWO_HOURS_PERIOD = 2 * 60 * 60 * 1000;
      const ORDER_PROCESS_STEP = [0, 1, 2, 3, 4, 5];

      /**
       * we use batch write here to ensure that both write operations must either succeed or fail together
       * we don't want the case where we have one write fail while the other success
       * orders must be synced between collection "current_orders" and in collection "users" field current_orders
       */
      const batch = db.batch();

      const paymentId = context.params.paymentId as string;

      // create new document in the "current_orders" collection
      batch.set(currentOrdersRef.doc(paymentId), {
        order_time: EPOCH_CURRENT_TIME,
        order_process: ORDER_PROCESS_STEP[0],
        payment_id: paymentId,
        /**
         * this is rough estimate time until order is delivered
         * will be adjusted once order is processed
         */
        until_delivered: EPOCH_CURRENT_TIME + TWO_HOURS_PERIOD,
        customer: {
          id: userId,
          name: user.name,
          phone: user.phone,
        },
        rusher: {
          id: null,
          name: null,
          phone: null,
        },
      });

      // create new order in "users" collection's field current_orders with empty value for rusher's fields
      batch.update(usersRef.doc(userId), {
        current_orders: FieldValue.arrayUnion({
          order_time: EPOCH_CURRENT_TIME,
          order_process: ORDER_PROCESS_STEP[0],
          payment_id: paymentId,
          /**
           * this is rough estimate time until order is delivered
           * will be adjusted once order is processed
           */
          until_delivered: EPOCH_CURRENT_TIME + TWO_HOURS_PERIOD,
          rusher: {
            id: null,
            name: null,
            phone: null,
          },
        }),
      });

      // Commit the batch
      await batch.commit();
    }
  });
