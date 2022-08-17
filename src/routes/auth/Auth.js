import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";

export default function Auth() {
  // Checking what step the client is on. That way we can stay in the same popup

  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
