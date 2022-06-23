import { useCallback, useContext } from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { AppContext } from "../app-context";
import { UserContext } from "./user-context";
import { SIGN_IN_USER, SIGN_UP_USER } from "../../constant";

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
 * Return the user's authentication detail like id, email, etc.
 * This is obtained right after user authenticated
 * This is not the user's data we store on database
 * @returns firebase.auth.currentUser
 */
export function useUserAuthenticationDetail() {
  const { auth } = useContext(AppContext);

  if (!auth.currentUser) {
    throw new Error("User is not authenticated");
  }
  return auth.currentUser;
}
/**
 * Sign up
 * @returns signUp function
 */
export function useSignUp() {
  const { auth } = useContext(AppContext);
  const { dispatch } = useContext(UserContext);
  const signUp = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    /**
     * TODO: do some error handling
     * For example, what if user stop authenticate midway
     */
    try {
      await signInWithPopup(auth, provider);
      dispatch({ type: SIGN_UP_USER });
    } catch (err) {
      throw new Error("sign in fail");
    }
  }, [auth, dispatch]);

  return signUp;
}

/**
 * Sign in with Google
 * We will get all user's data and merge them with context in useInitializeApp()
 * because if we do here we basically did the same things twice
 * @returns function to sign in
 */
export function useGoogleSignIn() {
  const { auth } = useContext(AppContext);
  const { dispatch } = useContext(UserContext);
  const signIn = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    /**
     * TODO: do some error handling
     * For example, what if user stop authenticate midway
     */
    try {
      await signInWithPopup(auth, provider);
      dispatch({ type: SIGN_UP_USER });
    } catch (err) {
      throw new Error("sign in fail");
    }
  }, [auth, dispatch]);

  return signIn;
}

/**
 * Sign out
 */
export function useSignOut() {
  // remember to free all user's detail stored on context
  // but keep the product detail untouched since they are not tied to user
}
