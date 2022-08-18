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
import {
  useUpdateShipping,
  useUpdateFirstName,
} from "../../context/user/profile-context";

export default function Test() {
  const status = useCheckAuthenticationStatus();
  const signUp = useSignUp();
  const signOut = useSignOut();
  const checkout = useCheckout();

  const sendEmailCode = useSendCodeEmail();
  const verifyEmailCode = useVerifyEmailCode();
  const sendPhoneCode = useSendCodeToPhone();
  const verifyPhoneCode = useVerifyPhoneCode();
  const updateShipping = useUpdateShipping();
  const updateFirstName = useUpdateFirstName();

  const [emailCode, setEmailCode] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [firstName, setFirstName] = useState("");

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

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleFirstNameSubmit = (event) => {
    event.preventDefault();
    updateFirstName(firstName);
  };

  const handleCheckout = async () => {
    // await updateShipping();
    await checkout(1235);
  };

  return (
    <main>
      {status ? (
        <>
          <button onClick={signOut}>Sign out</button>
          <div>
            <button
              onClick={() => {
                updateShipping();
              }}
            >
              Update shipping address
            </button>
          </div>

          <button onClick={handleCheckout}>Checkout</button>
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
              sendPhoneCode("+12345358911");
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
          <hr />
          {/**------------------------------------------------------------------- */}

          <h1>Set User's First Name</h1>
          <form onSubmit={handleFirstNameSubmit}>
            <label form="phone-code">Enter phone code</label>
            <input
              type="text"
              id="phone-code"
              onChange={handleFirstNameChange}
            />
            <button>Submit</button>
          </form>
        </>
      )}
    </main>
  );
}
