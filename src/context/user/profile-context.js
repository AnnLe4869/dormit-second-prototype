import { useContext } from "react";
import { AppContext } from "../app-context";
import { UserContext } from "./user-context";

import { SET_NAME, SET_MESSAGE, SET_CHECKOUT_ADDRESS } from "../../constant.js";

import { doc, setDoc } from "firebase/firestore";

/**
 * return a function that when called will update user first name
 */
export function useUpdateName() {
  const { dispatch } = useContext(UserContext);

  /**
   * update user's first name when called
   *
   * in firebase, in "users" collection, each user has field named "first_name"
   * update this field
   * then update user's field in Context by calling dispatch({type: SET_FIRST_NAME, payload: {name: "your name"}})
   */

  const { db } = useContext(AppContext);

  return async (name) => {
    try {
      await setDoc(doc(db, "users", "name"), {
        name: name,
      });
      dispatch({
        type: SET_NAME,
        payload: { name: name },
      });

      return {
        isSuccess: true,
        message: "Your name has been successfully updated",
      };
    } catch (error) {
      console.log("useUpdateName() error: ", error);
      return {
        isSuccess: false,
        message: "Something went wrong. Please try again",
      };
    }
  };
}

/**
 * update user's shipping address
 *
 * return a function that when called will update user's shipping address
 */
export function useUpdateShipping() {
  const { auth, db } = useContext(AppContext);
  const { dispatch } = useContext(UserContext);
  /**
   * function that will update user's shipping address
   *
   * this will update the shipping field in firebase and in local Context
   * in firebase in "users" collections, each user has field "shipping"
   * which is of shape {address: {building: string, floor_apartment: string}}
   *
   * after that, update local
   */
  return async (building, apartmentNumber) => {
    let shippingData = {
      shipping_address: {
        campus: "UCSD",
        building: building,
        floor_apartment: apartmentNumber,
      },
    };

    if (!auth.currentUser) {
      return {
        isSuccess: false,
        message: "You have to sign in to do this step",
      };
    }

    try {
      // Update address in database
      const usersRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(usersRef, shippingData, { merge: true });
      // Update address in context
      dispatch({
        type: SET_CHECKOUT_ADDRESS,
        payload: shippingData,
      });

      return {
        isSuccess: true,
        message: "Successfully update the address",
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: "something went wrong. Please try again",
      };
    }
  };
}

/**
 * update customer message in Context
 * we want to update the message in Context only and not save it to database
 */
export function useUpdateMessage() {
  const { dispatch } = useContext(UserContext);

  return (message) => {
    dispatch({
      type: SET_MESSAGE,
      payload: { message },
    });
  };
}
