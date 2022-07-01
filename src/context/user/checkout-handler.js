import { useCallback, useContext, useEffect } from "react";

import {
  doc,
  onSnapshot,
  setDoc,
  collection,
  addDoc,
} from "firebase/firestore";

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
 * Return a function that, when called, will send user to a checkout page
 */
export function useCheckout() {
  const { db, auth } = useContext(AppContext);

  return async () => {
    const currentUser = auth.currentUser;

    if (!auth.currentUser) {
      throw new Error("User is not authenticated");
    }

    const userRef = doc(db, "users", currentUser.uid);
    const checkoutRef = await addDoc(collection(userRef, "checkout_sessions"), {
      mode: "payment",
      line_items: [
        {
          price: "price_1LGghMBFL4Le4n4LjoI9fIFb",
          quantity: 3,
        },
        {
          price: "price_1LGggPBFL4Le4n4LYTlOWoMw",
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
