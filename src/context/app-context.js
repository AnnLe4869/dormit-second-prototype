import React, { createContext } from "react";

import UserProvider from "./user-context";
import ProductProvider from "./product-context";
import AlertProvider from "./alert-context";

// we create this context to pass the firestore reference to entire application
const AppContext = createContext(null);

function AppContextWrapper({ children, db, auth }) {
  return (
    <AppContext.Provider value={{db, auth}}>
      <UserProvider>
        <ProductProvider>
          <AlertProvider>{children}</AlertProvider>
        </ProductProvider>
      </UserProvider>
    </AppContext.Provider>
  );
}

// fetch the user data (necessary only) and all product's data and special category
function useInitializeApp() {}

export default AppContextWrapper;
export { AppContext };
