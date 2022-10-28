import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import "./PhoneVerification.css";
import { Button, TextField } from "@mui/material";

const PhoneVerification = () => {
  const handleVerification = () => {
    console.log("verified");
  };
  return (
    <div className="phoneVerification">
      <LocalPhoneOutlinedIcon
        sx={{
          backgroundColor: "#7140FA",
          width: 90,
          height: 90,
          borderRadius: "50%",
          padding: "15px",
          color: "white",
        }}
      />
      <h1>Verification</h1>
      <h1>
        <span style={{ color: "#7141FA" }}>Enter your phone number</span> below
        to log in
      </h1>
      <div className="phoneVerification__phoneNumber">
        <p>Phone</p>
        <input
          type="tel"
          pattern="[0-2]{3}-[0-9]{3}-[0-9]{4}"
          required
          placeholder="(XXX) XXX - XXXX"
        />
      </div>
      <Button
        onClick={handleVerification}
        sx={{
          backgroundColor: "#7141FA",
          color: "white",
          borderRadius: 30,
          width: 400,
          height: 60,
          "&:hover": {
            backgroundColor: "#8966e8",
          },
        }}
      >
        Confirm
      </Button>
    </div>
  );
};

export default PhoneVerification;
