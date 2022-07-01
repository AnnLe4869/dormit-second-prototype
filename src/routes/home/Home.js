import { useSignUp } from "../../context/user/auth-handler";
import { useCheckout } from "../../context/user/checkout-handler";

export default function HomePage() {
  const signUp = useSignUp();
  const checkout = useCheckout();
  return (
    <main>
      <button onClick={signUp}>Sign up</button>
      <button onClick={checkout}>Checkout</button>
    </main>
  );
}
