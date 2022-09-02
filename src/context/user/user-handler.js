import { useContext, useEffect } from "react";
import { AppContext } from "../app-context";
import { UserContext } from "./user-context";

import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

import { INITIALIZE_CART, INITIALIZE_USER_DETAILS } from "../../constant";
import { getCartFromLocStore } from "../../helper/getCartFromLocStore";
import { isArrayDifferent } from "../../helper/isArrayDifferent";
import { removeUserDataFromLocalStorage } from "../../helper/removeCartFromLocalStorage";
import { initializeCartWithBlank } from "./cart-handler";

export async function useInitializeUser1() {}

export function useInitializeUser() {
  const { auth, db } = useContext(AppContext);
  const { dispatch: userDispatch, state: userState } = useContext(UserContext);

  useEffect(() => {
    /**
     * load the cart (if there is) in localStorage to Context
     * we always want to sync the cart in localStorage with cart in Context
     */
    const localCart = getCartFromLocStore();
    if (localCart) {
      userDispatch({
        type: INITIALIZE_CART,
        payload: {
          cart: localCart,
        },
      });
    } else {
      initializeCartWithBlank();
      userDispatch({
        type: INITIALIZE_CART,
        payload: {
          cart: [],
        },
      });
    }

    /**
     * Track the user authentication status
     * If user sign out, refresh the page
     * How this works: https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
     */
    onAuthStateChanged(auth, async (user) => {
      /**
       * if user already authenticated before, populate all the fields
       * do the same if user successfully authenticate
       */
      if (user) {
        // fetching user's data from database
        const usersRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(usersRef);
        // get the current cart store in Context
        const contextCart = userState.cart;

        /**
         * we want to retrieve the URL params to determine course of action
         * if succeed, clear the cart in localStorage
         *
         * the URL for success look like this
         * http://localhost:3000?payment_intent=pi_3LaxzvBFL4Le4n4L0aK4wlP8
         * &payment_intent_client_secret=pi_3LaxzvBFL4Le4n4L0aK4wlP8_secret_DYg8f53sQaqtkghMNOJBhMPhE
         * &redirect_status=succeeded
         */
        const pageURL = new URL(window.location.href);
        const paymentIntentParam = pageURL.searchParams.get("payment_intent");
        const paymentSecretParam = pageURL.searchParams.get(
          "payment_intent_client_secret"
        );
        const paymentStatus = pageURL.searchParams.get("redirect_status");

        let userData;
        if (userSnap.exists()) {
          // user already exist, i.e user didn't sign up for the first time
          userData = userSnap.data();
          const cartInDb = userData.cart;

          /**
           * TODO: combine the current cart (in localStorage) with cart in database
           * for an item that is in either of the carts (or both carts),
           * the combined cart will use the larger number out of two carts
           *
           * For example,
           * if current cart (in localStorage) have 3 snacks, 1 coke and 2 candies
           * cart in database have 2 snacks, 4 cokes and 1 peanuts
           * then the combined cart will have 3 snacks, 4 cokes, 2 candies and 1 peanuts
           *
           * This combined cart is the new cart and should replace the old carts
           * Don't forget to update the cart, both in localStorage and in database
           *
           */
        } else {
          // user first time sign in, i.e user sign up
          // we create new entry in document "user" using user uid as id
          // get the current cart store in Context
          userData = {
            cart: contextCart,
          };
          await setDoc(usersRef, userData, { merge: true });
        }

        userDispatch({
          type: INITIALIZE_USER_DETAILS,
          payload: {
            isAuthenticated: true,
            ...userData,
          },
        });

        /**
         * listen to realtime update on user's data
         * in specific, the subcollection current_orders part
         *
         * see https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots
         */
        const currentOrdersRef = collection(
          db,
          "users",
          user.uid,
          "current_orders"
        );
        onSnapshot(currentOrdersRef, (snapshot) => {
          // TODO: update the context with this change
        });
      } else {
        /**
         * if user sign out, free all user's related state in Context and in localStorage
         * a possible way to clear out Context is to redirect user to another page
         * redirect will cause reload, which will detach the realtime listener - the result we want
         */
        // removeUserDataFromLocalStorage();
        // window.location.href = "http://localhost:3000";
      }
    });
  }, []);
}
