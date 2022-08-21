import { CollectionReference } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import { verifyEmail } from "../helper/helper";

import { db } from "../setup";

/**
 * update user's profile
 *
 * Params for the functions
 * @params  {firstName:string, lastName: string, email: string}
 */
export const updateUserProfile = functions
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
    if (!data.firstName) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The function must be called with the argument "firstName" containing the first name you want to change.`
      );
    }
    if (!data.lastName) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The function must be called with the argument "lastName" containing the last name you want to change.`
      );
    }

    const email: string = data.email.trim();
    const firstName: string = data.firstName.trim();
    const lastName: string = data.lastName.trim();

    if (!verifyEmail(email)) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The value ${email} doesn't seem to be a valid email.`
      );
    }

    if (!process.env.FUNCTIONS_EMULATOR) {
      const usersRef = db.collection("users") as CollectionReference<{
        first_name: string;
        last_name: string;
        linked_email: string;
      }>;

      /**
       * find users that have the linked_email field match the given email
       * if there is such user, we cannot change our user's linked_email to the given email
       * as one email only links to one user
       */
      const emailMatchedUsers = await usersRef
        .where("linked_email", "==", email)
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
      usersRef.doc(context.auth.uid).update({
        first_name: firstName,
        last_name: lastName,
        linked_email: email,
      });

      return {
        isSuccess: true,
        message: "the user's profile has been updated",
      };
    } else {
      return {
        message: "something is wrong here. Please contact support",
      };
    }
  });
