import * as admin from "firebase-admin";
import {
  CollectionReference,
  FieldPath,
  FieldValue,
} from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import { totp } from "otplib";
import Stripe from "stripe";
import config from "./config";
import { verifyEmail } from "./helper";

admin.initializeApp();
const db = admin.firestore();

totp.options = {
  // the code is valid up to this amount of time
  step: 60 * 15, // 15 minutes
};
/**
 * Fire when a an existing payment is updated
 * If the transaction is success, update the inventory IN STRIP
 * and update the user's current order in firebase
 */
export const checkout = functions
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

/**
 * Send a verification code to the email provided
 * This DOES NOT verify whether the email existed in the codebase or not
 */
export const sendCodeViaEmail = functions
  .runWith({
    // allows the function to use environment secret STRIPE_API_KEY
    secrets: ["OTP_SECRET"],
    // no more than 20 instances of the function should be running at once.
    // More on https://cloud.google.com/functions/docs/configuring/max-instances
    maxInstances: 20,
  })
  .https.onCall(async (data) => {
    if (!data.email) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The function must be called with one argument "email" containing the email to send code to.`
      );
    }

    const email: string = data.email;
    if (!verifyEmail(email)) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The value ${email} doesn't seem to be a valid email.`
      );
    }
    /**
     * the secret is generated by concatenating the secret and user's provided email
     * we do that as a "salting" to the secret
     */
    const secret = config.otpSecret + email;
    const code = totp.generate(secret);

    functions.logger.log("the code is " + code);

    /**
     * send token to the email address
     * we use firebase extension to send email
     * Extension https://firebase.google.com/products/extensions/firebase-firestore-send-email
     */

    if (!process.env.FUNCTIONS_EMULATOR) {
      const mailRef = db.collection("email") as CollectionReference<{
        to: string;
        message: {
          subject: string;
          html: string;
        };
      }>;
      try {
        await mailRef.add({
          to: "demog138@gmail.com",
          message: {
            subject: "Hello from Firebase!",
            html: `This is your verification code ${code}. It will expire in 15 minutes`,
          },
        });
      } catch (err) {
        throw new functions.https.HttpsError(
          "internal",
          `Something went wrong and cannot write to the firestore`
        );
      }
    }
  });

/**
 * Verify the Otp code the user provide
 * If the code is correct, using the email we search for user that have this email as "link_email"
 * Generate custom token with that user's uid and send back to client for authentication
 */
export const verifyOtpCode = functions
  .runWith({
    // allows the function to use environment secret STRIPE_API_KEY
    secrets: ["OTP_SECRET"],
    // no more than 20 instances of the function should be running at once.
    // More on https://cloud.google.com/functions/docs/configuring/max-instances
    maxInstances: 20,
  })
  .https.onCall(async (data) => {
    if (!data.email) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The function must be called with the argument "email" containing the email the code is sent to.`
      );
    }
    if (!data.code) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The function must be called with the argument "code" containing the code received.`
      );
    }

    const email: string = data.email;
    if (!verifyEmail(email)) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The value ${email} doesn't seem to be a valid email.`
      );
    }
    /**
     * the secret is generated by concatenating the secret and user's provided email
     * we do that as a "salting" to the secret
     */
    const secret = config.otpSecret + email;
    const code = data.code.trim();

    // check whether the token is valid or not
    const isValid = totp.check(code, secret);

    if (!process.env.FUNCTIONS_EMULATOR) {
      if (!isValid) {
        return {
          isSuccess: false,
          message: "The code is incorrect",
          token: null,
        };
      }
      const userRef = db.collection("users") as CollectionReference<{
        link_email: string;
      }>;
      const matchedUsers = await userRef.where("link_email", "==", email).get();

      if (matchedUsers.empty) {
        return {
          isSuccess: false,
          message: "the email is not linked to any existing user",
          token: null,
        };
      }
      if (matchedUsers.size > 1) {
        throw new functions.https.HttpsError(
          "internal",
          `The email ${email} is linked to multiple accounts. This shouldn't happen`
        );
      }
      const user = matchedUsers.docs[0];
      const authenticationToken = await admin.auth().createCustomToken(user.id);

      return {
        isSuccess: true,
        message: "authentication success",
        token: authenticationToken,
      };
    } else {
      return {
        message: "something is wrong here. Please contact support",
      };
    }
  });
