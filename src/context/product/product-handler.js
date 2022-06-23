import { collection, getDocs } from "firebase/firestore";
import { useCallback, useContext, useEffect } from "react";

import { INITIALIZE_PRODUCTS } from "../../constant";

import { AppContext } from "../app-context";
import { ProductContext } from "./product-context";

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
  const func = useCallback(async () => {
    const products = [];
    try {
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
    } catch (err) {
      throw new Error(err);
    }
  }, [db, productDispatch]);

  // this should run only once when app initialize
  useEffect(() => {
    func();
  }, [func]);
}

/**
 * Get all products stored in the context
 * @returns all products
 */
export function useProducts() {
  const { state: productState } = useContext(ProductContext);
  return productState.products;
}
