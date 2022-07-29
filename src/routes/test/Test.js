import { useState } from "react";
import {
  useCheckAuthenticationStatus,
  useEmailSignIn,
  useSignOut,
  useSignUp,
} from "../../context/user/auth-handler";
import { useCheckout } from "../../context/user/checkout-handler";

export default function Test() {
  const status = useCheckAuthenticationStatus();
  const signUp = useSignUp();
  const signOut = useSignOut();
  const checkout = useCheckout();

  const { sendCode, authenticateUser } = useEmailSignIn();

  const [code, setCode] = useState("");

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticateUser("kunquan4869@gmail.com", code);
    console.log(code);
  };

  return (
    <main>
      {status ? (
        <>
          <button onClick={signOut}>Sign out</button>
          <button onClick={checkout}>Checkout</button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              sendCode("kunquan4869@gmail.com");
              console.log("code is sent");
            }}
          >
            Send code to email
          </button>
          <form onSubmit={handleSubmit}>
            <label form="code">Enter code</label>
            <input type="text" id="code" onChange={handleChange} />
            <button>Submit</button>
          </form>
          <button onClick={signUp}>Sign up</button>
        </>
      )}
    </main>
  );
}
