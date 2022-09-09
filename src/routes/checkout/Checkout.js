import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSetupStripe } from "../../context/user/checkout-handler";

import Order from "./Order/Order";
import OrderDetail from "./Order/OrderDetails";
import Payment from "./Payment/Payment";

export default function Checkout() {
  const [stripePromise, setStripePromise] = useState(null);
  const [stripeClientSecret, setStripeClientSecret] = useState(null);

  const setupStripe = useSetupStripe(setStripePromise);

  useEffect(() => {
    setupStripe();
  }, []);

  return (
    <Routes>
      <Route
        index
        element={<Order setStripeClientSecret={setStripeClientSecret} />}
      />
      <Route
        path="order"
        element={<Order setStripeClientSecret={setStripeClientSecret} />}
      />
      <Route
        path="payment"
        element={
          <Payment
            stripePromise={stripePromise}
            stripeClientSecret={stripeClientSecret}
          />
        }
      />
    </Routes>
  );
}
