import * as functions from "firebase-functions";

/**
 * Fire when a an existing payment is updated
 * If the transaction is success, update the inventory IN STRIPE
 * and update the user's current order in firebase
 */
export const testFunc = functions.https.onRequest(async (req, resp) => {
  functions.logger.log("the outside world");

  resp.json({ result: "nothing special" });
});
