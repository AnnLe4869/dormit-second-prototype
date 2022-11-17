import { Container } from "@mui/system";
import React from "react";
import Header from "../home/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuthenticationStatus } from "../../context/user/auth-handler";
import BottomNav from "../../shared/bottom-nav/BottomNav";
import Order from "./Order";
import CurrentSelected from "./CurrentOrder/Selected";
import PastSelected from "./CompletedOrder/Selected";

export default function OrderPage() {
  const isAuthenticated = useCheckAuthenticationStatus();

  // if(!isAuthenticated) {
  //   return <Navigate replace to='/auth' />
  // };

  return (
    <>
      <Header />
      {/* <Container> */}
        <Routes>
          <Route exact path="/" element={<Order />} />
          <Route path="/current/:orderId" element={<CurrentSelected />} />
          <Route path="/past/:orderId" element={<PastSelected />} />
        </Routes>
      {/* </Container> */}
      <BottomNav currentPage="home" />
    </>
  );
}
