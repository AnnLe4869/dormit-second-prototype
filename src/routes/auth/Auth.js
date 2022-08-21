import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useCheckAuthenticationStatus } from "../../context/user/auth-handler";
import { Navigate } from "react-router-dom";
import OtpcodePhone from "./Phone/Otpcode";
import OtpcodeEmail from "./Email/Otpcode";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import Reset from "./Email/Reset";
import Register from "./Register/Register";

export default function Auth() {
  const status = useCheckAuthenticationStatus();

  return (
    <>
      {!status ? (
        <Routes>
          <Route exact path="/" element={<Phone />} />
          <Route exact path="phone/otpcode" element={<OtpcodePhone />} />
          <Route exact path="signup" element={<Register />} />
          <Route exact path="email" element={<Email />} />
          <Route exact path="email/otpcode" element={<OtpcodeEmail />} />
          <Route exact path="email/reset" element={<Reset />} />
        </Routes>
      ) : (
        <Navigate to="/checkout" replace />
      )}
    </>
  );
}
