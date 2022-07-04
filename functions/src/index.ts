import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import Stripe from "stripe";

import { firestore } from "firebase-admin";
import { CollectionReference } from "firebase-admin/firestore";
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
 * If the transaction is success, update the inventory IN STRIPE and update the user's current order
 */
export const updateInventory = functions
  .runWith({ secrets: ["STRIPE_API_KEY"] })
  .firestore.document("/users/{userId}/payments/{paymentId}")
  .onUpdate(async (snap) => {
    // Grab the current value of what was written to Firestore.
    const payment = snap.after.data() as Stripe.Checkout.SessionCreateParams & {
      status: string;
      items: Array<Stripe.LineItem>;
    };

    // check the status of the data
    // only when status is "succeeded" do we adjust the inventory
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

      // get the current inventory
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

        await stripe.products.update(product.id, {
          metadata: {
            quantity:
              parseInt(product.data().metadata.quantity) -
              itemSellData.sold_quantity,
          },
        });
      });
    }
  });
