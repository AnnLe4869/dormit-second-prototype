import { CollectionReference } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import { verifyEmail } from "../helper/helper";

import { db } from "../setup";

/**
 * update user's email
 * Params for the functions
 * @params  {email: string}
 */
export const updateEmail = functions
  .runWith({
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

    const usersRef = db.collection("users") as CollectionReference<{
      linked_email: string;
    }>;

    try {
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
        linked_email: email,
      });

      return {
        isSuccess: true,
        message: "the user's email has been updated",
      };
    } catch (error) {
      functions.logger.error(
        `Error: fail to update email for user with uid ${context.auth.uid} with email ${data.email}`,
        (error as Error).message
      );

      throw new functions.https.HttpsError("internal", "Something went wrong");
    }
  });
