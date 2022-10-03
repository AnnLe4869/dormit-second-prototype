import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSetupStripe } from "../../context/user/checkout-handler";

import Order from "./Order/Order";
import Address from "./Address/Address";
import OrderDetail from "./Order/OrderDetails";
import Payment from "./Payment/Payment";
import Header from "../home/Header";
import BottomNav from "../../shared/bottom-nav/BottomNav";

export default function Checkout() {
  const [stripePromise, setStripePromise] = useState(null);
  const [stripeClientSecret, setStripeClientSecret] = useState(null);

  const setupStripe = useSetupStripe(setStripePromise);

  useEffect(() => {
    setupStripe();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          index
          element={<Order setStripeClientSecret={setStripeClientSecret} />}
        />
        <Route
          path="order"
          element={
            <OrderDetail setStripeClientSecret={setStripeClientSecret} />
          }
        />
        <Route
          path="order-test"
          element={<Order setStripeClientSecret={setStripeClientSecret} />}
        />
        <Route
          path="address"
          element={<Address setStripeClientSecret={setStripeClientSecret} />}
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
      <BottomNav />
    </>
  );
}
