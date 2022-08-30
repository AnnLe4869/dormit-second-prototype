import React from "react";
import { theme } from "./muiStyles";
import { Container, ThemeProvider } from "@mui/material";
import Header from "../home/Header";

import Impact from "./Impact/Impact";
import Profile from "./Profile/Profile";
import Payment from "./Payment/Payment";
import Referral from "./Referral/Referral";
import Contact from "./Contact/Contact";
import BottomNavMui from "../../shared/bottom-nav/BottomNav";

export default function Account() {
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Container maxWidth="md" sx={{ p: "40px 0" }}>
          <Profile />
          <Payment />
          <Impact />
          <Referral />
          <Contact />
        </Container>
      </ThemeProvider>
      <BottomNavMui />
    </>
  );
}
