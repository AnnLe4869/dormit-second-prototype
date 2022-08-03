import React from "react";
import BottomNav from "../../shared/bottom-nav/BottomNav";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";

export default function Auth() {
  // Checking what step the client is on. That way we can stay in the same popup

  return (
    <>
      <Container>
        <Outlet />
      </Container>
      <BottomNav currentPage="home" />
    </>
  );
}
