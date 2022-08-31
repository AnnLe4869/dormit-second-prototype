import React, { createContext } from "react";

import AlertProvider from "./alert/alert-context";
import ProductProvider from "./product/product-context";
import UserProvider from "./user/user-context";

import { useInitializeProduct } from "./product/product-handler";
import { useInitializeUser } from "./user/user-handler";

// we create this context to pass the firestore reference to entire application
export const AppContext = createContext({
  db: {},
  auth: {},
  functions: {},
});

export default function AppContextWrapper({ children, db, auth, functions }) {
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
  /**
   * initialize user's data
   */
  useInitializeUser();
  /**
   * initialize product data
   */
  useInitializeProduct();
}
