import { CollectionReference } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import config from "../config";
import { verifyEmail } from "../helper/helper";

import { db, admin, totp } from "../setup";

/**
 * Verify the Otp code the user provide
 * If the code is correct, using the email we search for user that have this email as "linked_email"
 * Generate custom token with that user's uid and send back to client for authentication
 *
 * Params for the function
 * @params  {email:string, code:string}
 */
export const verifyOtpCode = functions
  .runWith({
    // allows the function to use environment secret OTP_SECRET
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

    const email: string = data.email.trim();
    if (!verifyEmail(email)) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `The value ${email} doesn't seem to be a valid email.`
      );
    }

    try {
      /**
       * the secret is generated by concatenating the secret and user's provided email
       * we do that as a "salting" to the secret
       */
      const secret = config.otpSecret + email;
      const code = data.code.trim();

      // check whether the token is valid or not
      const isValid = totp.check(code, secret);

      if (!isValid) {
        return {
          isSuccess: false,
          message: "The code is incorrect",
          token: null,
        };
      }
      const usersRef = db.collection("users") as CollectionReference<{
        linked_email: string;
      }>;
      const matchedUsers = await usersRef
        .where("linked_email", "==", email)
        .get();

      if (matchedUsers.empty) {
        return {
          isSuccess: false,
          message: "the email is not linked to any existing user",
          token: null,
        };
      }
      if (matchedUsers.size > 1) {
        functions.logger.error(
          `The email ${email} is linked to multiple accounts. This shouldn't happen`
        );
        throw new functions.https.HttpsError(
          "internal",
          `Something went wrong`
        );
      }
      const user = matchedUsers.docs[0];
      const authenticationToken = await admin.auth().createCustomToken(user.id);

      return {
        isSuccess: true,
        message: "authentication success",
        token: authenticationToken,
      };
    } catch (error) {
      functions.logger.error(
        `Error: Cannot verify the OTP code ${data.code} for the email ${data.email}`,
        (error as Error).message
      );
      throw new functions.https.HttpsError("internal", "Something went wrong");
    }
  });
