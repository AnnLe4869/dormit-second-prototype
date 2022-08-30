import { Container } from "@mui/system";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuthenticationStatus } from "../../context/user/auth-handler";
import BottomNav from "../../shared/bottom-nav/BottomNav";
import Current from "./Current/Current";
import Order from "./Order";
import Past from "./Past/Past";
import Selected from "./Selected/Selected";

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
