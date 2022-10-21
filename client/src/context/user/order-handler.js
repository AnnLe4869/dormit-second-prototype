import {
  collection,
  documentId,
  orderBy,
  limit,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useContext } from "react";

import { AppContext } from "../app-context";

import {
  GET_ORDERS,
  GET_ALL_PAST_ORDERS,
  GET_PAST_ORDERS,
} from "../../constant";
import { UserContext } from "./user-context";

/**
 * return a function that when called will
 * fetch all current and UP TO 10 latest past orders that the users has
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
       * this should not cost much as no "reasonable" person would have too many current order at once
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
       * get up to 10 past orders
       * this is done to limit the number of reads required, as user doesn't go look for far back order often
       * when user go to the `/order/past` will we fetch all orders
       */
      const QUERY_LIMIT = 10;
      const userPastOrders = [];
      if (state.past_orders && state.past_orders.length > 0) {
        const completedOrdersQuery = query(
          collection(db, "completed_orders"),
          where("customer_id", "==", auth.currentUser.uid),
          orderBy("delivery_time"),
          limit(QUERY_LIMIT)
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
        type: GET_ORDERS,
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
/**
 * return a function that when called,
 * will get all past orders
 */
export function useGetAllPastOrders() {
  const { db, auth } = useContext(AppContext);
  const { state, dispatch } = useContext(UserContext);

  return async () => {
    if (!auth.currentUser) {
      throw new Error("User needs to be authenticated");
    }
    try {
      const userPastOrders = [];
      if (state.past_orders && state.past_orders.length > 0) {
        const completedOrdersQuery = query(
          collection(db, "completed_orders"),
          where("customer_id", "==", auth.currentUser.uid)
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
        type: GET_ALL_PAST_ORDERS,
        payload: {
          orders: userPastOrders.length > 0 ? userPastOrders : null,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
}

/**
 * return a function that when called,
 * will get all past orders that hasn't been fetched before
 * this is a measurement to lower the cost of data fetching
 */
export function useGetAllNonFetchedPastOrder() {
  const { db, auth } = useContext(AppContext);
  const { state, dispatch } = useContext(UserContext);

  return async () => {
    if (!auth.currentUser) {
      throw new Error("User needs to be authenticated");
    }
    try {
      const userPastOrders = [];
      if (
        state.past_orders &&
        state.past_orders.length > 0 &&
        state.pastOrders
      ) {
        const alreadyFetchedOrdersIds = state.pastOrders.map(
          (order) => order.id
        );
        const completedOrdersQuery = query(
          collection(db, "completed_orders"),
          where("customer_id", "==", auth.currentUser.uid),
          where(documentId(), "not-in", alreadyFetchedOrdersIds)
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
        type: GET_PAST_ORDERS,
        payload: {
          orders: userPastOrders.length > 0 ? userPastOrders : null,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
}
