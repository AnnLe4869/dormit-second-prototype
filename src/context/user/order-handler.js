import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useContext } from "react";

import { AppContext } from "../app-context";

import { GET_ALL_ORDERS } from "../../constant";
import { UserContext } from "./user-context";

/**
 * return a function that when called will
 * fetch all current and past orders that the users has
 */
export function useInitializeAllOrders() {
  const { db, auth } = useContext(AppContext);
  const { state, dispatch } = useContext(UserContext);

  return async () => {
    if (!auth.currentUser) {
      throw new Error("User needs to be authenticated");
    }
    try {
      const userCurrentOrdersRef = collection(
        db,
        "users",
        auth.currentUser.uid,
        "current_orders"
      );

      /**
       * get all current orders
       */
      const userCurrentOrdersSnap = await getDocs(userCurrentOrdersRef);
      const userCurrentOrders = [];
      if (!userCurrentOrdersSnap.empty) {
        userCurrentOrdersSnap.forEach((doc) => {
          userCurrentOrders.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      }

      /**
       * get all past orders
       */
      const userPastOrders = [];
      if (state.past_orders && state.past_orders.length > 0) {
        const completedOrdersQuery = query(
          collection(db, "completed_orders"),
          where(documentId(), "in", state.past_orders)
        );
        const userPastOrdersSnap = await getDocs(completedOrdersQuery);
        userPastOrdersSnap.forEach((doc) => {
          userPastOrders.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      }
      dispatch({
        type: GET_ALL_ORDERS,
        payload: {
          currentOrders:
            userCurrentOrders.length > 0 ? userCurrentOrders : null,
          pastOrders: userPastOrders.length > 0 ? userPastOrders : null,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
}
