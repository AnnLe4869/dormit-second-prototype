import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSetupStripe } from "../../context/user/checkout-handler";

import Order from "./Order/Order";
import Payment from "./Payment/Payment";

export default function Checkout() {
  const [stripePromise, setStripePromise] = useState(null);
  const [stripeClientSecret, setStripeClientSecret] = useState(null);

  const setupStripe = useSetupStripe(setStripePromise);

  useContext(() => {
    setupStripe();
  }, []);

  return (
    <Routes>
      <Route index element={<Order />} />
      <Route path="order" element={<Order />} />
      <Route
        path="payment"
        element={<Payment tripePromise={stripePromise} />}
      />
    </Routes>
  );
}
