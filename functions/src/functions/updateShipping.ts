import { CollectionReference } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import Stripe from "stripe";
import config from "../config";

import { db } from "../setup";

/**
 * Update user's profile in Stripe and in Firebase
 * This is needed because we want to pass address to Stripe checkout
 * before user get to the checkout page
 *
 * Params for the function
 * @params {building:string, floorApartment: string}
 */
export const updateShipping = functions
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
  .https.onCall(async (data, context) => {
    // Initialize stripe
    const apiVersion = "2020-08-27";
    const stripe = new Stripe(config.stripeSecretKey, {
      apiVersion,
      appInfo: {
        name: "Dormit",
        version: "1.0",
      },
    });

    if (!context.auth) {
      throw new functions.https.HttpsError(
        "permission-denied",
        `The user must be authenticated to perform these task`
      );
    }

    const { building, floorApartment } = data;

    if (!building) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The function must be called with one argument "building"`
      );
    }
    if (!floorApartment) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The function must be called with one argument "floorApartment"`
      );
    }

    const usersRef = db.collection("users") as CollectionReference<{
      stripeId: string;
      link_email: string;
      name: string;
      phone: string;
    }>;

    try {
      const user = (await usersRef.doc(context.auth.uid).get()).data();
      if (!user) {
        throw new functions.https.HttpsError(
          "not-found",
          "user did not exist in database"
        );
      }

      const stripeId = user.stripeId;

      if (!stripeId) {
        throw new functions.https.HttpsError(
          "permission-denied",
          "user doesn't have Stripe setup for them"
        );
      }

      /**
       * update user's address in Stripe
       * is used to pre-filled shipping address in checkout session
       */
      const campus = {
        address: "9500 Gilman Dr",
        postalCode: "92093",
        city: "San Diego",
        state: "CA",
        country: "US",
      };
      await stripe.customers.update(stripeId, {
        shipping: {
          address: {
            line1: campus.address,
            line2: `UCSD building ${building}, floor/apartment ${floorApartment}`,
            city: campus.city,
            postal_code: campus.postalCode,
            state: campus.state,
            country: campus.country,
          },
          name: user.name,
        },
      });

      /**
       * update user's shipping address in Firebase
       */
      await usersRef.doc(context.auth.uid).update({
        shipping: {
          address: {
            building,
            floor_apartment: floorApartment,
          },
        },
      });

      return {
        isSuccess: true,
        message: "update shipping address succeed",
      };
    } catch (error) {
      throw new functions.https.HttpsError("internal", "error in getting data");
    }
  });
