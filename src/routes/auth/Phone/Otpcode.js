import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useVerifyPhoneCode } from "../../../context/user/auth-handler";
import callIcon from "../../../mock_data/images/callVector.png";
import { useActivateErrorAlert } from "../../../context/alert/alert-handler";
import { LoadingButton } from "../../../shared/loading-button/LoadingButton";
import styles from "../Auth.module.css";
import { authStyles } from "../muiStyles";

function Otpcode({ phoneNumber, confirmationResult }) {
  const navigate = useNavigate();
  const verifyPhoneCode = useVerifyPhoneCode();
  const activateErrorAlert = useActivateErrorAlert();

  const [phoneCode, setPhoneCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnchange = (event) => {
    setPhoneCode(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const result = await verifyPhoneCode(phoneCode, confirmationResult);
    if (result.isSuccess) {
      if (result.isNewUser) {
        navigate("/auth/signup");
      } else {
        navigate("/category");
      }
    } else {
      setLoading(false);
      activateErrorAlert(result.message);
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
            value={phoneCode}
            onChange={handleOnchange}
            className={styles.inputPhone}
            type="text"
            maxLength="6"
          ></input>
        </Box>
        <div className={styles.buttonLink}>
          <LoadingButton
            buttonName="Confirm"
            loading={loading}
            disableRipple
            variant="contained"
            sx={authStyles.authButton}
            onClick={handleSubmit}
          />
        </div>
      </Box>
    </Container>
  );
}

export default Otpcode;
