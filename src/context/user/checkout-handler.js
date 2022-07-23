import { useContext } from "react";

import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";

import { AppContext } from "../app-context";

import { getCartFromLocalStorage } from "../../helper/getCartFromLocalStorage";
import { ProductContext } from "../product/product-context";

/**
 * Return a function that, when called, will send user to a checkout page
 */
export function useCheckout() {
  const { db, auth } = useContext(AppContext);
  const { state } = useContext(ProductContext);

  return async () => {
    const currentUser = auth.currentUser;

    if (!auth.currentUser) {
      throw new Error("User is not authenticated");
    }

    const cart = getCartFromLocalStorage();

    const userRef = doc(db, "users", currentUser.uid);
    const checkoutRef = await addDoc(collection(userRef, "checkout_sessions"), {
      mode: "payment",
      /**
       * this set up will calculate tax on checkout
       * you have to set up the tax in Stripe for this to work
       */
      automatic_tax: {
        enabled: true,
      },
      line_items: [
        {
          price: "price_1LGghMBFL4Le4n4LjoI9fIFb",
          quantity: 3,
        },
        {
          price: "price_1LGggPBFL4Le4n4LYTlOWoMw",
          quantity: 1,
        },
        {
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
            unit_amount: 5000,
            tax_behavior: "exclusive",
          },
          quantity: 1,
        },
      ],
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    onSnapshot(checkoutRef, async (snap) => {
      const { error, url } = snap.data();

      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        alert(`An error occured: ${error.message}`);
      }
      if (url) {
        // We have a Stripe Checkout URL, let's redirect.
        window.location.assign(url);
      }
    });
  };
}
