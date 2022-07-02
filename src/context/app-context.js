import React, { createContext, useContext } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc, addDoc, collection } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import UserProvider, { UserContext } from "./user/user-context";
import ProductProvider from "./product/product-context";
import AlertProvider from "./alert/alert-context";

import { useInitializeProduct } from "./product/product-handler";
import { INITIALIZE_USER_DETAILS } from "../constant";
import { isArrayDifferent } from "../helper/isArrayDifferent";

// we create this context to pass the firestore reference to entire application
export const AppContext = createContext(null);

export default function AppContextWrapper({ children, db, auth, storage }) {
  return (
    <AppContext.Provider value={{ db, auth, storage }}>
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

      if (docSnap.exists()) {
        // user already exist, i.e user is not sign up for the first time
        const data = docSnap.data();
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

        userDispatch({
          type: INITIALIZE_USER_DETAILS,
          payload: {
            isAuthenticated: true,
            ...data,
          },
        });
      } else {
        // user first time sign in, i.e user sign up
        // we create new entry in document "user" using user uid as id
        const docRef = doc(db, "users", user.uid);
        // get the current cart store in Context
        const cartInContext = userState.cart;
        const payload = {
          cart: cartInContext,
          checkout: [],
        };
        await setDoc(docRef, payload);
        userDispatch({
          type: INITIALIZE_USER_DETAILS,
          payload: {
            isAuthenticated: true,
            ...payload,
          },
        });
      }
    }
    // if user sign out, free all user's related state
    // ideally, you may want to redirect user to another page
    else {
    }
  });

  /**
   * initialize product data
   */

  useInitializeProduct();
}
