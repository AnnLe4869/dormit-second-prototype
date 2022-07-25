import { useContext } from "react";

import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";

import { AppContext } from "../app-context";

import { ProductContext } from "../product/product-context";
import { UserContext } from "./user-context";

/**
 * Return a function that, when called, will send user to a checkout page
 */
export function useCheckout() {
  const { db, auth } = useContext(AppContext);
  const { state: productState } = useContext(ProductContext);
  const { state: userState } = useContext(UserContext);

  /**
   * this function accept one argument
   * that is the amount of tip we want to collect
   *
   */
  return async (tip) => {
    const currentUser = auth.currentUser;

    if (!auth.currentUser) {
      throw new Error("User is not authenticated");
    }

    /**
     * the cart is an array of object
     * {
     *    id: productID,
     *    quantity: number
     * }
     */
    const cart = userState.cart;
    const products = productState.products;

    const productInCart = products.filter((product) =>
      cart.map((item) => item.id).includes(product.id)
    );

    const userRef = doc(db, "users", currentUser.uid);

    const checkoutDetail = {
      mode: "payment",
      /**
       * this set up will calculate tax on checkout
       * you have to set up the tax in Stripe for this to work
       */
      automatic_tax: {
        enabled: true,
      },
      success_url: window.location.origin,
      cancel_url: window.location.origin,
      /**
       * we want the line_items is of the form
       * line_items: [
        {
          price: priceID,
          quantity: number,
        }
        ],
       */
      line_items: productInCart.map((product) => ({
        price: product.prices.id,
        quantity: product.quantity,
      })),
    };

    if (tip && isNaN(tip)) {
      throw new Error(`the argument "tip", if provided, should be a number`);
    }

    if (tip && !isNaN(tip)) {
      // when there is a tip and the tip is a number
      checkoutDetail.line_items.push({
        /**
         * this is for tip amount
         * what we did is we create a Price object in-the-fly
         * more on https://www.youtube.com/watch?v=X2SmLzQ5kfY
         */
        price_data: {
          currency: "usd",
          product_data: {
            name: "Rusher Tip",
          },
          // this is the tip amount
          unit_amount: tip,
          tax_behavior: "exclusive",
        },
        quantity: 1,
      });
    }

    const checkoutRef = await addDoc(
      collection(userRef, "checkout_sessions"),
      checkoutDetail
    );

    /**
     * when a new check_out document sessions is created
     * we listen to that change and move to the checkout page made by Stripe
     * checkout_session is created only, not update
     */
    onSnapshot(checkoutRef, async (snap) => {
      const { error, url } = snap.data();

      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        alert(`An error occurred: ${error.message}`);
      }
      if (url) {
        // We have a Stripe Checkout URL, let's redirect.
        window.location.assign(url);
      }
    });
  };
}

/**
 * update user's shipping address
 *
 * return a function that when called will update user's shipping address
 */
export function useUpdateShipping() {
  const { state, dispatch } = useContext(UserContext);

  /**
   * function that will update user's shipping address
   *
   * this will update the shipping field in firebase and in local Context
   * in firebase in "users" collections, each user has field "shipping"
   * which is of shape {address: {building: string, floor_apartment: string}}
   *
   * after that, update local
   */
  return async (address) => {};
}
