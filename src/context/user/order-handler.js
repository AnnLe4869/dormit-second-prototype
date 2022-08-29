import { useContext, useEffect } from "react";
import {
  doc,
  runTransaction,
  query,
  where,
  collection,
  documentId,
} from "firebase/firestore";

import { AppContext } from "../app-context";

import { UserContext } from "./user-context";
import { GET_ALL_ORDERS } from "../../constant";

/**
 * return a function that when called will
 * fetch all current and past orders that the users has
 */
export function useInitializeAllOrders() {
  const { db, auth } = useContext(AppContext);
  const { state, dispatch } = useContext(UserContext);

  if (!auth.currentUser) {
    throw new Error("User needs to be authenticated");
  }

  return async () => {
    try {
      const { currentOrders, pastOrders } = await runTransaction(
        db,
        async (transaction) => {
          const completedOrdersQuery = query(
            collection(db, "completed_order"),
            where(documentId(), "in", state.past_orders)
          );
          const userCurrentOrdersRef = doc(
            db,
            "users",
            auth.currentUser.uid,
            "current_orders"
          );

          const userCurrentOrdersSnap = await transaction.get(
            userCurrentOrdersRef
          );
          if (!userCurrentOrdersSnap.exists()) {
            throw new Error(
              "User either doesn't have any current order or some error happened"
            );
          }
          /**
           * push all current orders detail into an array
           * we will return this array later
           */
          const userCurrentOrders = [];
          userCurrentOrdersSnap.forEach((doc) => {
            userCurrentOrders.push({
              id: doc.id,
              ...doc.data(),
            });
          });

          /**
           * get all past (i.e completed) orders from the collection "completed_orders"
           */
          const userPastOrdersSnap = await transaction.get(
            completedOrdersQuery
          );
          const userPastOrders = [];
          userPastOrdersSnap.forEach((doc) => {
            userPastOrders.push({
              id: doc.id,
              ...doc.data(),
            });
          });

          return {
            currentOrders: userCurrentOrders,
            pastOrders: userPastOrders,
          };
        }
      );

      dispatch({
        type: GET_ALL_ORDERS,
        payload: {
          currentOrders,
          pastOrders,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
}
