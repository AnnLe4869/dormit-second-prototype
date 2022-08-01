import { useState } from "react";
import {
  useCheckAuthenticationStatus,
  useSendCodeEmail,
  useSendCodeToPhone,
  useSignOut,
  useSignUp,
  useVerifyEmailCode,
  useVerifyPhoneCode,
} from "../../context/user/auth-handler";
import { useCheckout } from "../../context/user/checkout-handler";

export default function Test() {
  const status = useCheckAuthenticationStatus();
  const signUp = useSignUp();
  const signOut = useSignOut();
  const checkout = useCheckout();

  const sendEmailCode = useSendCodeEmail();
  const verifyEmailCode = useVerifyEmailCode();
  const sendPhoneCode = useSendCodeToPhone();
  const verifyPhoneCode = useVerifyPhoneCode();

  const [emailCode, setEmailCode] = useState("");
  const [phoneCode, setPhoneCode] = useState("");

  const handleEmailChange = (event) => {
    setEmailCode(event.target.value);
  };
  const handleEmailSubmit = (event) => {
    event.preventDefault();
    verifyEmailCode("kunquan4869@gmail.com", emailCode);
  };

  const handlePhoneChange = (event) => {
    setPhoneCode(event.target.value);
  };
  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    verifyPhoneCode(phoneCode);
  };

  return (
    <main>
      {status ? (
        <>
          <button onClick={signOut}>Sign out</button>
          <button onClick={() => checkout(3520)}>Checkout</button>
        </>
      ) : (
        <>
          <h1>Sign in with linked email</h1>
          <button
            onClick={() => {
              sendEmailCode("kunquan4869@gmail.com");
            }}
          >
            Send code to email
          </button>
          <form onSubmit={handleEmailSubmit}>
            <label form="email-code">Enter code</label>
            <input type="text" id="email-code" onChange={handleEmailChange} />
            <button>Submit</button>
          </form>
          <hr />

          {/**------------------------------------------------------------------- */}

          <h1>Sign in with phone number</h1>
          <button
            onClick={() => {
              sendPhoneCode("+12345678911");
            }}
            id="phone-sign-in-button"
          >
            Send code to phone number
          </button>
          <form onSubmit={handlePhoneSubmit}>
            <label form="phone-code">Enter phone code</label>
            <input type="text" id="phone-code" onChange={handlePhoneChange} />
            <button>Submit</button>
          </form>
          <hr />
          {/**------------------------------------------------------------------- */}

          <h1>Sign in with Gmail</h1>
          <button onClick={signUp}>Sign up with Gmail</button>
        </>
      )}
    </main>
  );
}
