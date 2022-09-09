import { CollectionReference, FieldValue } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import { ArrayElement, Completed_order, Processing_order, User } from "../type";

import { db } from "../setup";

// /**
//  * fill out all fields necessary for testing
//  */
// const fillCustomerInfo = functions
//   .runWith({
//     // allows the function to use environment secret STRIPE_API_KEY
//     secrets: ["STRIPE_API_KEY"],
//   })
//   .auth.user()
//   .onCreate(async (user): Promise<void> => {
//     const { uid } = user;

//     await db.collection("users").doc(uid).set(
//       {
//         linked_email: "hello@gmail.com",
//         profile_img: "dummy.png",
//         name: "josh",
//       },
//       { merge: true }
//     );
//   });

/**
 * move the order from current_orders subcollection to completed_orders
 * as test, it will immediately move the order when an ordered is created
 */
export const completeOrder = functions.firestore
  .document("users/{userId}/current_orders/{orderId}")
  .onCreate(async (snap, context) => {
    const order = snap.data() as Processing_order;

    const userId = context.params.userId as string;
    const orderId = context.params.orderId as string;

    const usersRef = db.collection("users") as CollectionReference<User>;
    const processingOrdersRef = db.collection(
      "processing_orders"
    ) as CollectionReference<Processing_order>;
    const currentOrdersRef = usersRef
      .doc(userId)
      .collection("current_orders") as CollectionReference<
      ArrayElement<User["current_orders"]>
    >;
    const completedOrdersRef = db.collection(
      "completed_orders"
    ) as CollectionReference<Completed_order>;

    const batch = db.batch();

    /**
     * check if an order of same id already existed in collection "completed_orders"
     */
    const orderDoc = await completedOrdersRef.doc(orderId).get();
    if (orderDoc.exists) {
      functions.logger.error(
        `order of id ${orderId} already existed in processing_orders`
      );
      throw new functions.https.HttpsError(
        "internal",
        "an order of the same id has already existed. Something is wrong here"
      );
    }

    /**
     * remove the doc from the subcollection "current_orders"
     */
    batch.delete(currentOrdersRef.doc(orderId));
    /**
     * update the field past_orders in "users" collection
     */
    batch.set(
      usersRef.doc(userId),
      {
        past_orders: FieldValue.arrayUnion(orderId) as unknown as Array<string>,
      },
      { merge: true }
    );
    /**
     * remove the doc from the collection "processing_orders"
     */
    batch.delete(processingOrdersRef.doc(orderId));
    /**
     * add the document to the collection "completed_orders"
     */
    batch.create(completedOrdersRef.doc(orderId), {
      payment_id: order.payment_id,
      customer_id: order.customer_id,
      order_time: order.order_time,

      /**
       * delivery_time and final_status will be hard coded here
       * need change in the future
       */
      delivery_time: order.order_time,
      final_status: 0,
      rusher: {
        rusher_id: order.rusher ? order.rusher.rusher_id : "",
      },
      amount_total: order.amount_total,
      shipping_fee: order.shipping_fee,
      rusher_tip: order.rusher_tip,
      items: order.items,
    });

    /**
     * commit the batch
     */
    await batch.commit();
  });
