import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVerifyPhoneCode } from "../../../context/user/auth-handler";
import callIcon from "../../../mock_data/images/callVector.png";
import styles from "../Auth.module.css";
import { authStyles } from "../muiStyles";

function Otpcode({ phoneNumber, confirmationResult }) {
  const [phoneCode, setPhoneCode] = useState("");
  const navigate = useNavigate();

  const verifyPhoneCode = useVerifyPhoneCode();

  const handleOnchange = (event) => {
    setPhoneCode(event.target.value);
  };

  const handleSubmit = async () => {
    const result = await verifyPhoneCode(phoneCode, confirmationResult);
    if (result.isSuccess) {
      if (result.isNewUser) {
        navigate("/auth/signup");
      } else {
        navigate("/category");
      }
    }
  };

  return (
    <Container>
      <Box sx={authStyles.centerComponents}>
        <img alt="Call Icon" src={callIcon} className={styles.callIcon} />
        <Typography variant="h4" fontWeight="700">
          Verification
        </Typography>
        <Typography variant="body1">
          We sent you an{" "}
          <Box component="span" color="#7141FA">
            SMS code to {phoneNumber}
          </Box>
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            margin: "20px 20px",
            textAlign: "left",
          }}
        >
          <input
            pattern="[0-9]"
            value={phoneCode}
            onChange={handleOnchange}
            className={styles.inputPhone}
            type="text"
            maxLength="6"
          ></input>
        </Box>
        <div className={styles.buttonLink}>
          <Button
            disableRipple
            variant="contained"
            sx={authStyles.authButton}
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        </div>
      </Box>
    </Container>
  );
}

export default Otpcode;
