import React from "react";
import { useCheckout } from "../../context/user/checkout-handler";

export default function Checkout() {
  const checkout = useCheckout();

  return (
    <div>
      <h1>Checkout</h1>

      <button onClick={() => checkout(3)}>button for checkout</button>
    </div>
  );
}
