import React, { createContext, useContext, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";

import AlertProvider from "./alert/alert-context";
import ProductProvider from "./product/product-context";
import UserProvider, { UserContext } from "./user/user-context";

import { INITIALIZE_USER_DETAILS } from "../constant";
import { isArrayDifferent } from "../helper/isArrayDifferent";
import { useInitializeProduct } from "./product/product-handler";
import { removeUserDataFromLocalStorage } from "../helper/removeCartFromLocalStorage";

// we create this context to pass the firestore reference to entire application
export const AppContext = createContext(null);

export default function AppContextWrapper({
  children,
  db,
  auth,
  storage,
  functions,
}) {
  return (
    <AppContext.Provider value={{ db, auth, functions }}>
      <UserProvider>
        <ProductProvider>
          <AlertProvider>{children}</AlertProvider>
        </ProductProvider>
      </UserProvider>
    </AppContext.Provider>
  );
}

// fetch the user data (necessary only) and all product's data and special category
export function useInitializeApp() {
  const { auth, db } = useContext(AppContext);
  const { dispatch: userDispatch, state: userState } = useContext(UserContext);

  /**
   * Track the user authentication status
   * If user sign out, refresh the page
   * How this works: https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
   */
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      /**
       * if user already authenticated before, populate all the fields
       * do the same if user successfully authenticate
       */
      if (user) {
        // fetching user's data from database
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        // get the current cart store in Context
        const cartInContext = userState.cart;

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

        let data;

        if (docSnap.exists()) {
          // user already exist, i.e user is not sign up for the first time
          data = docSnap.data();
          const cartInDb = data.cart;

          if (
            cartInContext.length > 0 &&
            isArrayDifferent(cartInContext, cartInDb)
          ) {
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
             */
          }
        } else {
          // user first time sign in, i.e user sign up
          // we create new entry in document "user" using user uid as id
          // get the current cart store in Context
          const cartInContext = userState.cart;
          data = {
            cart: cartInContext,
          };
          await setDoc(docRef, data);
        }

        userDispatch({
          type: INITIALIZE_USER_DETAILS,
          payload: {
            isAuthenticated: true,
            ...data,
          },
        });

        /**
         * listen to realtime update on user's data
         * we mostly interested in the current_order part
         */

        onSnapshot(docRef, (doc) => {});
      } else {
        /**
         * if user sign out, free all user's related state in Context and in localStorage
         * a possible way to clear out Context is to redirect user to another page
         * redirect will cause reload, which will detach the realtime listener - the result we want
         */
        removeUserDataFromLocalStorage();
        window.location.href = "localhost:3000/";
      }
    });
  }, []);

  /**
   * initialize product data
   */

  useInitializeProduct();
}
