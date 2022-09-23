import React, { createContext } from "react";

import AlertProvider from "./alert/alert-context";
import ProductProvider from "./product/product-context";
import UserProvider from "./user/user-context";

import { useInitializeProduct } from "./product/product-handler";
import { useInitializeUser } from "./user/user-handler";
import { useContext } from "react";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

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
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export async function useInitializeApp() {
  const { db } = useContext(AppContext);
  const products = [];
  // get all products in the products collection
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });

  for (const product of products) {
    // if (product.id !== "categories" && product.id !== "shipping_fee") {
    //   if (!("isOnSale" in product) || !("rank" in product)) {
    //     await setDoc(
    //       doc(db, "products", product.id),
    //       {
    //         rank: getRandomInt(10000000).toString(),
    //         isOnSale: product.prices.length > 1,
    //       },
    //       // option to merge instead of overwrite
    //       {
    //         merge: true,
    //       }
    //     );
    //   }
    // }

    if (product.id !== "categories" && product.id !== "shipping_fee") {
      if (!("prices" in product)) {
        console.log(product.id);
        throw new Error("somehow doesn't have prices field");
      }
      if (!("isOnSale" in product)) {
        console.log(product.id);
        throw new Error("somehow doesn't have isOnSale field");
      }

      if (!("rank" in product)) {
        console.log(product.id);
        throw new Error("somehow doesn't have rank field");
      }

      if (product.isOnSale) {
        if (product.prices.length < 2) {
          console.log(product.id);
          throw new Error("length of prices 1 is doesn't match the isOnSale");
        }
      } else {
        if (product.prices.length > 1) {
          console.log(product.id);
          throw new Error("length of prices 2 doesn't match the isOnSale");
        }
      }
    }
  }
}

// fetch the user data (necessary only) and all product's data and special category
export function useInitializeApp1() {
  /**
   * initialize user's data
   */
  useInitializeUser();
  /**
   * initialize product data
   */
  useInitializeProduct();
}
