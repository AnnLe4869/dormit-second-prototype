import { ProductContext } from "../../context/product/product-context";
import {
  useSignUp,
  useSignOut,
  useCheckAuthenticationStatus,
} from "../../context/user/auth-handler";
import { useCheckout } from "../../context/user/checkout-handler";

export default function HomePage() {
  const status = useCheckAuthenticationStatus();
  const signUp = useSignUp();
  const signOut = useSignOut();
  const checkout = useCheckout();

  return (
    <main>
      {status ? (
        <>
          <button onClick={signOut}>Sign out</button>
          <button onClick={checkout}>Checkout</button>
        </>
      ) : (
        <button onClick={signUp}>Sign up</button>
      )}
    </main>
  );
}
