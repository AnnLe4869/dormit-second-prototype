import * as admin from "firebase-admin";
import { CollectionReference } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import { verifyEmail } from "../helper/helper";

admin.initializeApp();
const db = admin.firestore();

/**
 * update user's email
 * Params for the functions
 * @params  {email: string}
 */
export const updateEmail = functions
  .runWith({
    // allows the function to use environment secret OTP_SECRET
    secrets: ["OTP_SECRET"],
    // no more than 20 instances of the function should be running at once.
    // More on https://cloud.google.com/functions/docs/configuring/max-instances
    maxInstances: 20,
  })
  .https.onCall(async (data, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "permission-denied",
        `The user must be authenticated to perform these task`
      );
    }

    if (!data.email) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The function must be called with the argument "email" containing the email address you want to change.`
      );
    }

    const email: string = data.email.trim();

    if (!verifyEmail(email)) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The value ${email} doesn't seem to be a valid email.`
      );
    }

    if (!process.env.FUNCTIONS_EMULATOR) {
      const userRef = db.collection("users") as CollectionReference<{
        link_email: string;
      }>;

      /**
       * find users that have the link_email field match the given email
       * if there is such user, we cannot change our user's link_email to the given email
       * as one email only links to one user
       */
      const emailMatchedUsers = await userRef
        .where("link_email", "==", email)
        .get();
      if (!emailMatchedUsers.empty) {
        return {
          isSuccess: false,
          message: "the email is already linked with another account",
        };
      }

      /**
       * find current user and update its detail
       */
      userRef.doc(context.auth.uid).update({
        link_email: email,
      });

      return {
        isSuccess: true,
        message: "the user's email has been updated",
      };
    } else {
      return {
        message: "something is wrong here. Please contact support",
      };
    }
  });
