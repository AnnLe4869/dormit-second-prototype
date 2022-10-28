import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { responsiveTheme } from "./muiStyles";
import { Box, ThemeProvider } from "@mui/material";
import Header from "../home/Header";

import Logout from "./Logout/Logout";
import Profile from "./Profile/Profile";
import Payment from "./Payment/Payment";
import Impact from "./Impact/Impact";
import Referral from "./Referral/Referral";
import Contact from "./Contact/Contact";
import BottomNavMui from "../../shared/bottom-nav/BottomNav";

import { UserContext } from "../../context/user/user-context";

export default function Account() {
  const userContext = useContext(UserContext);
  const user = userContext.state;

  if(!user.isAuthenticated) {
    return <Navigate replace to='/auth' />
  };

  return (
    <>
      <Header />
      <ThemeProvider theme={responsiveTheme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Logout />
          <Profile />
          <Payment />
          <Impact />
          <Referral />
          <Contact />
        </Box>
      </ThemeProvider>
      <BottomNavMui />
    </>
  );
}
