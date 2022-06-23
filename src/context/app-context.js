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
          // TODO: decide what to do when the two carts are different
          // whether to use the one in database or use the current cart or combine them
          // HOW: we will invoke a component (like alert) and depending on the user's answer
          // we will choose how the final result should be
          // for now, we will make the Context and localStorage out of sync
          // and keep Context the "database version" and localStorage the "current version"
          // when user make their choice, make sure the update both of them as well as sync them up
        }

        // !WARNING: don't sync up localStorage and Context here. Read the TODO
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
   * TODO: initialize all necessary data, like product data
   */

  useInitializeProduct();
}
