import React, { createContext, useContext, useEffect, useMemo } from "react";
import { collection, doc, setDoc, getDocs, addDoc } from "firebase/firestore";
import { getDownloadURL, getMetadata, getStorage, ref } from "firebase/storage";

import { INITIALIZE_PRODUCTS, UPDATE_ALL_PRODUCTS } from "../constant";

import { UserContext } from "./user-context";
import { AppContext } from "./app-context";

export const ProductContext = createContext({
  products: [
    {
      id: "123adc",
      inventoryRemain: 15,
      name: "red bull",
      description: "energy drink",
      category: "drink",
      isDeal: false,
      imageURL: "https://something.com",
    },
  ],
});

function productReducer(state, action) {
  switch (action.type) {
    case INITIALIZE_PRODUCTS: {
      // action is of form {type: INITIALIZE_PRODUCTS, payload: {products: []}}
      return action.payload.products;
    }
    case UPDATE_ALL_PRODUCTS: {
      // action is of form {type: INITIALIZE_PRODUCTS, payload: {products: []}}
      return action.payload.products;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default function ProductProvider({ children }) {
  const [state, dispatch] = React.useReducer(productReducer, {
    products: [{ id: "352" }],
    deals: [],
  });

  const value = { state, dispatch };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

/**
 * -----------------------------------------------------------------------------------
 */

export async function useInitializeProduct() {
  const { dispatch: productDispatch } = useContext(ProductContext);
  const { db } = useContext(AppContext);

  /**
   * We run this only at the start of the app
   * May need some optimization latter as this will run every time we change route and go back to it
   */
  useEffect(() => {
    async function func() {
      const products = [];
      // get all products in the products collection
      const querySnapshot = await getDocs(collection(db, "products"));

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        products.push(doc.data());
      });

      productDispatch({
        type: INITIALIZE_PRODUCTS,
        payload: {
          products,
        },
      });

      // TODO: add error handling if something went wrong
    }

    func();
  }, [db, productDispatch]);
}

/**
 * Get all products stored in the context
 * @returns all products
 */
export function useProducts() {
  const { state: productState } = useContext(ProductContext);
  return productState.products;
}
/**
 * TODO: implement this function
 * @param {*} id    product id you want to get the detail
 */
export function useProductDetail(id) {
  const { state: productState } = useContext(ProductContext);
}
