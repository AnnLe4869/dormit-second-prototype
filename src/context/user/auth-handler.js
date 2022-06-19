import React, { createContext, useCallback, useContext } from "react";

import { collection, doc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { UserContext } from "./user-context";
import { AppContext } from "../app-context";
import { ProductContext } from "../product/product-context";

/**
 * ---------------------------------------------------------------------------------------------------------------------------
 * AUTHENTICATION and stuff
 * ---------------------------------------------------------------------------------------------------------------------------
 */

/**
 * Check whether user has authenticated or not
 * Both sign in and sign up is considered authenticated, though with sigh up may need further consideration
 * This doesn't require fetching data, so it is fast and should be used whenever needed
 * @returns boolean   whether user is authenticated or not
 */
export function useCheckAuthenticationStatus() {
  const { auth } = useContext(AppContext);
  // if user isn't signed in, currentUser is null
  return Boolean(auth.currentUser);
}

/**
 * Sign in with Google
 * We will get all user's data and merge them with context in useInitializeApp()
 * because if we do here we basically did the same things twice
 * @returns function to sign in
 */
export function useGoogleSignIn() {
  const { auth } = useContext(AppContext);
  const signIn = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    /**
     * TODO: do some error handling
     * For example, what if user stop authenticate midway
     */
    await signInWithPopup(auth, provider);
  }, [auth]);

  return signIn;
}

/**
 * Sign out
 */
export function useSignOut() {}
