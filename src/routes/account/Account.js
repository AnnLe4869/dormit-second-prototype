import React from "react";
import { theme } from "./muiStyles";
import { Container, ThemeProvider } from "@mui/material";

import Intro from "./Intro/Intro";
import Impact from "./Impact/Impact";
import Profile from "./Profile/Profile";
import Payment from "./Payment/Payment";
import Referral from "./Referral/Referral";
import Contact from "./Contact/Contact";

export default function Account() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ p: "70px 0" }}>
        <Intro />
        <Impact />
        <Profile />
        <Payment />
        <Referral />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}
