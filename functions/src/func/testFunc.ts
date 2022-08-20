import * as functions from "firebase-functions";
import { db } from "../setup";

/**
 * fill out all fields necessary for testing
 */
export const fillCustomerInfo = functions
  .runWith({
    // allows the function to use environment secret STRIPE_API_KEY
    secrets: ["STRIPE_API_KEY"],
  })
  .auth.user()
  .onCreate(async (user): Promise<void> => {
    const { uid } = user;

    await db.collection("users").doc(uid).set(
      {
        link_email: "hello@gmail.com",
        profile_img: "dummy.png",
        name: "josh",
      },
      { merge: true }
    );
  });

export const testFunc = functions.firestore
  .document("users/{userId}/payments/{paymentId}")
  .onWrite(async () => {
    functions.logger.log("Hello world from testFunc");
  });
