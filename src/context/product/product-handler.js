import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect } from "react";

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
