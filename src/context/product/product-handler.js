import { collection, getDocs } from "firebase/firestore";
import { useCallback, useContext, useEffect } from "react";

import { INITIALIZE_PRODUCTS } from "../../constant";
import { getCurrentTime, getTimeDifference } from "../../helper/time";

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
    // cache the data in local and only re-fetch if the data is deemed "stale"
    const STALE_TIME = 1000 * 60 * 5;
    const productLocal = JSON.parse(localStorage.getItem("products"));
    const timestamp = localStorage.getItem("timestamp");

    if (
      !productLocal ||
      getTimeDifference(timestamp, getCurrentTime()) > STALE_TIME
    ) {
      try {
        const products = [];
        // get all products in the products collection
        const querySnapshot = await getDocs(collection(db, "products"));

        querySnapshot.forEach((doc) => {
          products.push(doc.data());
        });

        // store the result and query time to localStorage
        localStorage.setItem(
          "products",
          JSON.stringify({
            products,
          })
        );
        localStorage.setItem("timestamp", getCurrentTime());

        productDispatch({
          type: INITIALIZE_PRODUCTS,
          payload: {
            products,
          },
        });
      } catch (err) {
        throw new Error(err);
      }
    } else {
      productDispatch({
        type: INITIALIZE_PRODUCTS,
        payload: {
          products: productLocal,
        },
      });
    }
  }, [db, productDispatch]);

  // this should run only once when app initialize
  useEffect(() => {
    func();
  }, []);
}

/**
 * Get all products stored in the context
 * @returns all products
 */
export function useProducts() {
  const { state: productState } = useContext(ProductContext);
  return productState.products;
}
