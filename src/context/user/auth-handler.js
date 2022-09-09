import { useCallback, useContext } from "react";

import {
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithCustomToken,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { SIGN_IN_USER, SIGN_OUT_USER } from "../../constant";
import { AppContext } from "../app-context";
import { UserContext } from "./user-context";

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

export function useSetUpProfile() {
  const { auth, functions } = useContext(AppContext);
  const updateUserProfile = httpsCallable(functions, "updateUserProfile");

  return async (name, email) => {
    if (!auth.currentUser) {
      throw new Error("User must sign in first to do this action");
    }
    const { data } = await updateUserProfile({ name, email });
    return data;
  };
}

export function useSendCodeEmail() {
  const { functions } = useContext(AppContext);
  const sendCodeViaEmail = httpsCallable(functions, "sendCodeViaEmail");

  return async (email) => {
    const { data } = await sendCodeViaEmail({ email });
    return data;
  };
}

export function useVerifyEmailCode() {
  const { auth, functions } = useContext(AppContext);
  const { dispatch } = useContext(UserContext);

  const verifyOtpCode = httpsCallable(functions, "verifyOtpCode");
  return async (email, code) => {
    /**
     * send the code back to cloud function for verifying the email
     * if the verification is success, we receive a token for authentication
     */
    const { data } = await verifyOtpCode({
      email,
      code,
    });

    if (data.isSuccess) {
      await signInWithCustomToken(auth, data.token);
      dispatch({ type: SIGN_IN_USER });
    }
    return data;
  };
}

export function useSendCodeToPhone() {
  const { auth } = useContext(AppContext);

  /**
   * send code to the provided phone number
   * the recaptcha is needed to prevent abusing service
   *
   * after the code is sent, perform the callback
   * callback can be navigate to another page for entering the code
   *
   * the second params setConfirmationResult is used to store the value in Context
   */
  return async (phoneNumber, setConfirmationResult, callback = () => {}) => {
    const appVerifier = new RecaptchaVerifier(
      /**
       * this is the id for the phone number submit button
       */
      "phone-sign-in-button",
      {
        size: "invisible",
      },
      auth
    );
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setConfirmationResult(confirmationResult);
      callback();

      return {
        isSuccess: true,
        message: "A code has been sent",
      };
    } catch (err) {
      /**
       * when fail to send, we clear the Recaptcha, allow user to try again
       */
      appVerifier.clear();
      return {
        isSuccess: false,
        message: "Fail to send SMS code",
      };
    }
  };
}

export function useVerifyPhoneCode() {
  const { dispatch } = useContext(UserContext);
  /**
   * call this function by passing the OTP code that the phone receive to it
   * this will check whether the code is valid or not
   * if the code is value, authenticate the user
   *
   * if the code is not valid, do something else in the catch statement
   * probably display an error message
   */
  return async (code, confirmationResult) => {
    try {
      const result = await confirmationResult.confirm(code);
      dispatch({
        type: SIGN_IN_USER,
      });

      return {
        isSuccess: true,
        user: result.user,
        // whether user is first-time sign in or not
        isNewUser: result._tokenResponse.isNewUser,
        message: "User has signed in successfully",
      };
    } catch (error) {
      return {
        isSuccess: false,
        message: "Fail to sign in. Bad verification code maybe",
      };
    }
  };
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
      await auth.signOut();
      dispatch({
        type: SIGN_OUT_USER,
      });
    } catch (err) {
      throw new Error("sign in fail");
    }
  }, [auth]);

  return signOut;
}
