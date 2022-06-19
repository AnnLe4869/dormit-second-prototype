import React, { createContext, useContext } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import UserProvider from "./user/user-context";
import ProductProvider from "./product/product-context";
import AlertProvider from "./alert/alert-context";

import { useInitializeProduct } from "./product/product-handler";

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
  const { auth } = useContext(AppContext);
  /**
   * Track the user authentication status
   * If user sign out, refresh the page
   * How this works: https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
   */

  onAuthStateChanged(auth, (user) => {
    /**
     * if user already authenticated before, populate all the fields
     * Or if user successfully authenticate, do the same
     *
     */
    if (user) {
    } else {
      // if user sign out, free all user's related state
      // ideally, you may want to redirect user to another page
    }
  });

  /**
   * TODO: initialize all necessary data, like product data
   */

  useInitializeProduct();
}
