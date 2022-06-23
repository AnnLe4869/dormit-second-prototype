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
 * Select a product and put that product into the cart
 * Only save the change locally and not to database
 * @param {string} id   :id of the product selected
 */
export function useSelectItem(id) {
  if (!localStorage.getItem(id)) {
    throw new Error(
      "Incorrect use of the function useSelectItem." +
        "It should be used on product that has not been added to localStorage only"
    );
  }
  const { dispatch } = useContext(ProductContext);
  const amount = 1;
  localStorage.setItem(id, amount.toString());
  dispatch({
    type: ADD_TO_CART,
    payload: {
      id,
    },
  });
}

/**
 * Increment the item count of the product in the cart
 * Only save the change locally and not to database
 * @param {string} id   :id of the product
 */
export function useIncrementItemCount(id) {
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

  const { dispatch } = useContext(ProductContext);
  localStorage.setItem(id, (amount + 1).toString());

  dispatch({
    type: INCREMENT_QUANTITY,
    payload: {
      id,
    },
  });
}

/**
 * Decrement the item count of the product in the cart
 * If the number reach 0, remove the product from the cart
 * Only save the change locally and not to database
 * @param {string} id   :id of the product
 */
export function useDecrementItemCount(id) {
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

  const { dispatch } = useContext(ProductContext);
  dispatch({
    type: DECREMENT_QUANTITY,
    payload: {
      id,
    },
  });
}

/**
 * Remove the product from the cart
 * Only save the change locally and not to database
 * @param {string} id   :id of the product
 */
export function useRemoveProductFromCart(id) {
  const data = localStorage.getItem(id);
  // check whether the product was already in local storage or not
  if (!data) {
    throw new Error(
      "Incorrect use of the function useSelectItem." +
        "The product should have existed in localStorage already"
    );
  }

  localStorage.removeItem(id);
  const { dispatch } = useContext(ProductContext);
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: {
      id,
    },
  });
}

/**
 * Update the content of the local cart into database
 * We perform this periodically, each update happen after the specified amount of time
 * @param {number} interval  :time between each update
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
    setInterval(func, interval);
  }, []);
}

/**
 * Update the content of the local cart into database
 * We perform this at the time of this function being called
 */
export async function useUpdateImmediately() {
  const authUser = useUserAuthenticationDetail();
  const { db } = useContext(AppContext);
  const { state } = useContext(UserContext);

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
