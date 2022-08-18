import React from "react";
import { Routes, Route } from "react-router-dom";

import Order from "./Order/Order";
import Payment from "./Payment/Payment";

export default function Checkout() {
  return (
    <Routes>
      <Route index element={<Order />} />
      <Route path="order" element={<Order />} />
      <Route path="payment" element={<Payment />} />
    </Routes>
  );
}
