import { httpsCallable } from "firebase/functions";
import { useContext } from "react";
import { AppContext } from "../app-context";
import { UserContext } from "./user-context";

import { SET_FIRST_NAME } from "../../constant.js";

import { doc, setDoc } from "firebase/firestore";

/**
 * return a function that when called will update user first name
 */
export function useUpdateFirstName() {
  const { state, dispatch } = useContext(UserContext);

  /**
   * update user's first name when called
   *
   * in firebase, in "users" collection, each user has field named "first_name"
   * update this field
   * then update user's field in Context by calling dispatch({type: SET_FIRST_NAME, payload: {name: "your name"}})
   */

  const { db } = useContext(AppContext);
<<<<<<< HEAD
<<<<<<< HEAD
  console.log("state: ", state);

  return async (name) => {
    console.log("name: ", name);

    try {
      await setDoc( doc(db, "users", "first_name"), {
        name: name
      });  

      dispatch({
        type: SET_FIRST_NAME, 
        payload: {name: name}
      })

    } catch (error) {
      console.log("useUpdateFirstName() error: ", error);
    }

=======

  dispatch({
    type: SET_FIRST_NAME,
    payload: { name: state.firstName },
  });

  return async (name) => {
    await setDoc(doc(db, "users", "first_name"), {
      name: state.firstName,
    });
>>>>>>> upstream/main
=======
  console.log("state: ", state);

  return async (name) => {
    console.log("name: ", name);

    try {
      await setDoc(doc(db, "users", "first_name"), {
        name: name,
      });

      dispatch({
        type: SET_FIRST_NAME,
        payload: { name: name },
      });
    } catch (error) {
      console.log("useUpdateFirstName() error: ", error);
    }
>>>>>>> 84f258b0ecaf301cc618a78537e1ca1d78054b50
  };
}

/**
 * return a function that when called will update user first name
 */
export function useUpdateLastName() {
  const { state, dispatch } = useContext(UserContext);

  /**
   * update user's last name when called
   *
   * in firebase, in "users" collection, each user has field named "last_name"
   * update this field
   * then update user's field in Context by calling dispatch({type: SET_LAST_NAME, payload: {name: "your name"}})
   */
  return async (name) => {};
}

/**
 * update user's shipping address
 *
 * return a function that when called will update user's shipping address
 */
export function useUpdateShipping() {
  const { functions } = useContext(AppContext);

  /**
   * function that will update user's shipping address
   *
   * this will update the shipping field in firebase and in local Context
   * in firebase in "users" collections, each user has field "shipping"
   * which is of shape {address: {building: string, floor_apartment: string}}
   *
   * after that, update local
   */
  return async (address) => {};
}
