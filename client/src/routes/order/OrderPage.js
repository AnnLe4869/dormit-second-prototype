import { Container } from "@mui/system";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuthenticationStatus } from "../../context/user/auth-handler";
import BottomNav from "../../shared/bottom-nav/BottomNav";
import Current from "./Current/Current";
import Order from "./Order";
import Past from "./Past/Past";
import CurrentSelected from "./Past/Selected";
import PastSelected from "./Past/Selected";

export default function OrderPage() {
  const status = useCheckAuthenticationStatus();

  return (
    <>
      <Container>
        <Routes>
          <Route exact path="/" element={<Order />} />
          <Route exact path="current" element={<Current />} />
          <Route exact path="past" element={<Past />} />
          <Route path="/current/:orderId" element={<CurrentSelected />} />
          <Route path="/past/:orderId" element={<PastSelected />} />
        </Routes>
      </Container>
      <BottomNav currentPage="home" />
    </>
  );
}
