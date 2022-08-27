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

/**
 * ---------------------------------------------------------------------------------------------------------------------------
 * CART HANDLING
 * ---------------------------------------------------------------------------------------------------------------------------
 */

/**
 * return a function that when called, does the following:
 * select a product and put that product into the cart
 * only save the change locally and not to database
 * @param {string} id   :id of the product selected
 */
export function useSelectItem() {
  const { dispatch } = useContext(ProductContext);

  return (id) => {
    if (!localStorage.getItem(id)) {
      throw new Error(
        "Incorrect use of the function useSelectItem." +
          "It should be used on product that has not been added to localStorage only"
      );
    }
    const amount = 1;
    localStorage.setItem(id, amount.toString());
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id,
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
  const { dispatch } = useContext(ProductContext);

  return (id) => {
    const data = localStorage.getItem(id);
    // check whether the product was already in local storage or not
    if (!data) {
      throw new Error(
        "Incorrect use of the function useSelectItem." +
          "The product should have existed in localStorage already"
      );
    }

    const amount = parseInt(data);
    if (isNaN(amount)) {
      throw new Error(
        "Incorrect use of the function useSelectItem." +
          "The amount should be a number, but here it is not"
      );
    }

    localStorage.setItem(id, (amount + 1).toString());
    dispatch({
      type: INCREMENT_QUANTITY,
      payload: {
        id,
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
  const { dispatch } = useContext(ProductContext);

  return (id) => {
    const data = localStorage.getItem(id);
    // check whether the product was already in local storage or not
    if (!data) {
      throw new Error(
        "Incorrect use of the function useSelectItem." +
          "The product should have existed in localStorage already"
      );
    }

    const amount = parseInt(data);
    if (isNaN(amount)) {
      throw new Error(
        "Incorrect use of the function useSelectItem." +
          "The amount should be a number, but here it is not"
      );
    }
    if (amount <= 0) {
      throw new Error(
        "Something is wrong here. The amount should be a positive integer"
      );
    }

    // when amount reach 0, remove it from cart
    if (amount > 1) {
      localStorage.setItem(id, (amount + 1).toString());
    } else {
      localStorage.removeItem(id);
    }

    dispatch({
      type: DECREMENT_QUANTITY,
      payload: {
        id,
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
  const { dispatch } = useContext(ProductContext);

  return (id) => {
    const data = localStorage.getItem(id);
    // check whether the product was already in local storage or not
    if (!data) {
      throw new Error(
        "Incorrect use of the function useSelectItem." +
          "The product should have existed in localStorage already"
      );
    }

    localStorage.removeItem(id);
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: {
        id,
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
export function useUpdateIntermittently(interval = 1000 * 60 * 5) {
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
export async function useUpdateImmediately() {
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
