import { useCallback, useContext } from "react";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithCustomToken,
} from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { AppContext } from "../app-context";
import { UserContext } from "./user-context";
import { SIGN_IN_USER, SIGN_OUT_USER, SIGN_UP_USER } from "../../constant";

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
  const { state } = useContext(UserContext);
  // if user isn't signed in, currentUser is null
  return Boolean(state.isAuthenticated);
}
/**
 * Return the user's authentication detail like id, email, etc.
 * This is obtained right after user authenticated
 * This is not the user's data we store on database
 * @returns firebase.auth.currentUser
 */
export function useUserAuthenticationDetail() {
  const { auth } = useContext(AppContext);
  /**
   * this is for the refresh only
   * without this line, the component won't get the latest information
   * because the component won't reload as auth doesn't change at all
   */
  useContext(UserContext);
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
      console.log(err);
      throw new Error("sign in fail");
    }
  }, [auth, dispatch]);

  return signUp;
}

export function useSetUpProfile() {}

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
      dispatch({ type: SIGN_IN_USER });
    } catch (err) {
      throw new Error("sign in fail");
    }
  }, [auth, dispatch]);

  return signIn;
}

export function useEmailSignIn() {
  const { auth, functions } = useContext(AppContext);
  const { dispatch } = useContext(UserContext);

  const sendCodeViaEmail = httpsCallable(functions, "sendCodeViaEmail");
  const verifyOtpCode = httpsCallable(functions, "verifyOtpCode");

  const sendCode = async (email) => {
    sendCodeViaEmail({ email });
  };

  const authenticateUser = async (email, code) => {
    /**
     * send the code back to cloud function for verifying the email
     * if the verification is success, we receive a token for authentication
     */
    const { data } = await verifyOtpCode({
      email,
      code,
    });

    if (!data.isSuccess) {
      // display the error message to the user
      console.error(data.message);
    }

    await signInWithCustomToken(auth, data.token);
    dispatch({ type: SIGN_IN_USER });
  };

  return { sendCode, authenticateUser };
}

/**
 * Sign out
 */
export function useSignOut() {
  // remember to free all user's detail stored on context
  // but keep the product detail untouched since they are not tied to user
  const { auth } = useContext(AppContext);
  const { dispatch } = useContext(UserContext);

  const signOut = useCallback(async () => {
    try {
      auth.signOut();
      dispatch({
        type: SIGN_OUT_USER,
      });
    } catch (err) {
      throw new Error("sign in fail");
    }
  }, [auth]);

  return signOut;
}
