import React, { createContext, useContext, useEffect, useMemo } from "react";
import { collection, doc, setDoc, getDocs, addDoc } from "firebase/firestore";
import { getDownloadURL, getMetadata, getStorage, ref } from "firebase/storage";

import { INITIALIZE_PRODUCTS, UPDATE_ALL_PRODUCTS } from "../constant";

import { UserContext } from "./user-context";
import { AppContext } from "./app-context";

const ProductContext = createContext({
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

function ProductProvider({ children }) {
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

async function useInitializeProduct() {
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductContext);
  const { db } = useContext(AppContext);

  const products = useMemo(() => [], []);

  /**
   * We run this only at the start of the app
   * May need some optimization latter as this will run every time we change route and go back to it
   */
  useEffect(() => {
    async function func() {
      // get all products in the products collection
      const querySnapshot = await getDocs(collection(db, "products"));

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        products.push(doc.data());
      });
    }

    func();
  }, [db, products]);

  console.log(products);

  productDispatch({
    type: INITIALIZE_PRODUCTS,
    payload: {
      products,
    },
  });

  return productState.products;
}
/**
 * !DO NOT RUN THIS FUNCTION
 * I still think how should we implement the function as it may not be necessary at all
 * Since we use routing and when we change route the component get dismount, and when it get remount the useEffect() will run again
 * Run this one may cause infinite loop as I haven't check how it run yet
 * @returns products context
 */
async function useUpdateProducts() {
  const { state: productState, dispatch: productDispatch } =
    useContext(ProductContext);
  const { db } = useContext(AppContext);
  const products = []
  useEffect(() => {
    async function func() {
      // get all products in the products collection
      const querySnapshot = await getDocs(collection(db, "products"));

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        products.push(doc.data());
      });
    }

    func();
  }, [db]);
  

  productDispatch({
    type: UPDATE_ALL_PRODUCTS,
    payload: {
      products,
    },
  });

  return productState.products;
}

export default ProductProvider;
export { ProductContext, useInitializeProduct };
