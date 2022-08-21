import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Container } from "@mui/system";
import { useCheckAuthenticationStatus } from "../../context/user/auth-handler";
import { Navigate } from "react-router-dom";
import BottomNav from "../../shared/bottom-nav/BottomNav";
import Current from "./Current/Current";
import Past from "./Past/Past";
import Selected from "./Selected/Selected";
import Order from "./Order";

export default function OrderPage() {
  const status = useCheckAuthenticationStatus();

  return (
    <>
      <Container>
        {!status ? (
          <Routes>
            <Route exact path="/" element={<Order />} />
            <Route exact path="current" element={<Current />} />
            <Route exact path="past" element={<Past />} />
            <Route path=":orderId" element={<Selected />} />
          </Routes>
        ) : (
          <Navigate to="/auth" replace />
        )}
      </Container>
      <BottomNav currentPage="home" />
    </>
  );
}
