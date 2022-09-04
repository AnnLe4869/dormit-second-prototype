import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuthenticationStatus } from "../../context/user/auth-handler";
import Email from "./Email/Email";
import OtpcodeEmail from "./Email/Otpcode";
import Reset from "./Email/Reset";
import OtpcodePhone from "./Phone/Otpcode";
import Phone from "./Phone/Phone";
import Register from "./Register/Register";

export default function Auth() {
  const status = useCheckAuthenticationStatus();
  const [confirmationResult, setConfirmationResult] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");

  return (
    <>
      <Routes>
        {!status ? (
          <>
            {/** For phone authentication */}
            <Route
              exact
              path="/"
              element={
                <Phone
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                  setConfirmationResult={setConfirmationResult}
                />
              }
            />
            <Route
              exact
              path="phone"
              element={
                <Phone
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                  setConfirmationResult={setConfirmationResult}
                />
              }
            />
            <Route
              exact
              path="phone/otpcode"
              element={
                <OtpcodePhone
                  phoneNumber={phoneNumber}
                  confirmationResult={confirmationResult}
                />
              }
            />
            {/** For email authentication */}
            <Route
              exact
              path="email"
              element={<Email email={email} setEmail={setEmail} />}
            />
            <Route
              exact
              path="email/otpcode"
              element={<OtpcodeEmail email={email} />}
            />
          </>
        ) : (
          <>
            {/** After user authenticated successfully and is new user */}
            <Route exact path="signup" element={<Register />} />
            <Route exact path="email/reset" element={<Reset />} />
            <Route path="*" element={<Navigate to="../../" />} />
          </>
        )}
      </Routes>
    </>
  );
}
