import { useContext, useEffect } from "react";

import { doc, setDoc } from "firebase/firestore";

import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_ITEM_FROM_CART,
} from "../../constant";
import { AppContext } from "../app-context";
import { ProductContext } from "../product/product-context";
import { UserContext } from "./user-context";

import { useUserAuthenticationDetail } from "./auth-handler";
import { getCartFromLocStore } from "../../helper/getCartFromLocStore";
import { updateCartItemLocStore } from "../../helper/updateCartItemLocStore";
import {
  writeCartToLocStore,
  mergeDbLocalCarts,
} from "../../helper/writeCartToLocStore";

/**
 * ---------------------------------------------------------------------------------------------------------------------------
 * CART HANDLING
 * ---------------------------------------------------------------------------------------------------------------------------
 */

/**
 * initialize cart in localStorage with an empty array
 */
export function initializeCartWithBlank() {
  writeCartToLocStore([]);
}

/**
 * return a function that when called, does the following:
 * select a product and put that product into the cart
 * only save the change locally and not to database
 * @param {string} id   :id of the product selected
 */
export function useSelectItem() {
  const { dispatch } = useContext(UserContext);

  return (id) => {
    const localCart = getCartFromLocStore();

    if (
      localCart &&
      localCart.findIndex((item) => item.product_id === id) !== -1
    ) {
      throw new Error(
        "Incorrect use of the function useSelectItem." +
          "It should be used on product that has NOT been added to localStorage only"
      );
    }
    const AMOUNT = 1;
    updateCartItemLocStore({
      productId: id,
      quantity: AMOUNT,
    });
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product_id: id,
      },
    });
  };
}

/**
 * return a function that when called, does the following:
 *
 * increment the item count of the product in the cart
 * Only save the change locally and not to database
 * @param {string} id   :id of the product
 */
export function useIncrementItemCount() {
  const { dispatch } = useContext(UserContext);

  return (id) => {
    const localCart = getCartFromLocStore();
    const data = localCart.find((item) => item.product_id === id);
    // check whether the product was in localStorage or not
    if (!data) {
      throw new Error(
        "Incorrect use of the function useSelectItem." +
          "The product must have existed in localStorage"
      );
    }

    updateCartItemLocStore({
      productId: id,
      quantity: data.quantity + 1,
    });

    dispatch({
      type: INCREMENT_QUANTITY,
      payload: {
        product_id: id,
      },
    });
  };
}

/**
 * return a function that when called, does the following:
 *
 * Decrement the item count of the product in the cart
 * If the number reach 0, remove the product from the cart
 * Only save the change locally and not to database
 * @param {string} id   :id of the product
 */
export function useDecrementItemCount() {
  const { dispatch } = useContext(UserContext);

  return (id) => {
    const localCart = getCartFromLocStore();
    const data = localCart.find((item) => item.product_id === id);
    // check whether the product was in localStorage or not
    if (!data) {
      throw new Error(
        "Incorrect use of the function useSelectItem." +
          "The product must have existed in localStorage"
      );
    }
    updateCartItemLocStore({
      productId: id,
      quantity: data.quantity - 1,
    });

    dispatch({
      type: DECREMENT_QUANTITY,
      payload: {
        product_id: id,
      },
    });
  };
}

/**
 * return a function that when called, does the following:
 *
 * Remove the product from the cart
 * Only save the change locally and not to database
 * @param {string} id   :id of the product
 */
export function useRemoveProductFromCart() {
  const { dispatch } = useContext(UserContext);

  return (id) => {
    const localCart = getCartFromLocStore();
    const data = localCart.find((item) => item.product_id === id);
    // check whether the product was in localStorage or not
    if (!data) {
      throw new Error(
        "Incorrect use of the function useSelectItem." +
          "The product must have existed in localStorage"
      );
    }
    updateCartItemLocStore({
      productId: id,
      quantity: 0,
    });
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: {
        product_id: id,
      },
    });
  };
}

/**
 * Update the content of the local cart into database
 * We perform this periodically, each update happen after the specified amount of time
 * This hooks should only be called only one time in the entire lifetime of the app session
 * Ideally, when we initialize the app and the user has authenticated, we call this function
 * @param {number} interval  :time between each update
 *
 * TODO: write a function to track in case we accidentally call this more than one, and if we did, stop other old ones
 * Maybe try using useRef() to do this
 */
export function useUpdateDbCartIntermittently(interval = 1000 * 60 * 5) {
  const authUser = useUserAuthenticationDetail();
  const { db } = useContext(AppContext);
  const { state } = useContext(UserContext);

  async function func() {
    await setDoc(
      doc(db, "users", authUser.uid),
      {
        cart: state.cart,
      },
      // option to merge instead of overwrite
      {
        merge: true,
      }
    );
  }

  useEffect(() => {
    const intervalId = setInterval(func, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
}

/**
 * return a function that when called, does the following:
 *
 * Update the content of the local cart into database
 * We perform this at the time of this function being called
 */
export async function useUpdateDbCartImmediately() {
  const authUser = useUserAuthenticationDetail();
  const { db } = useContext(AppContext);
  const { state } = useContext(UserContext);

  return async () => {
    await setDoc(
      doc(db, "users", authUser.uid),
      {
        cart: state.cart,
      },
      // option to merge instead of overwrite
      {
        merge: true,
      }
    );
  };
}
