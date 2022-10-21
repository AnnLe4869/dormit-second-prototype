import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import { Link, useNavigate } from "react-router-dom";

import { useActivateErrorAlert } from "../../../context/alert/alert-handler";
import { useSendCodeToPhone } from "../../../context/user/auth-handler";
import callIcon from "../../../mock_data/images/callVector.png";
import { LoadingButton } from "../../../shared/loading-button/LoadingButton";
import styles from "../Auth.module.css";
import { authStyles } from "../muiStyles";

function Phone({ phoneNumber, setPhoneNumber, setConfirmationResult }) {
  const navigate = useNavigate();
  const activateErrorAlert = useActivateErrorAlert();
  const sendPhoneCode = useSendCodeToPhone();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const result = await sendPhoneCode(phoneNumber, setConfirmationResult);
    if (result.isSuccess) {
      navigate("/auth/phone/otpcode");
    } else {
      /**
       * show the error message
       * usually error only happen when firebase fails to send code to the phone number
       * which is kind of rare
       *
       * if this doesn't work, just reload the page automatically and it will reset the Recaptcha
       */
      activateErrorAlert(result.message);
    }
  };

  return (
    <Container>
      <Box sx={authStyles.centerComponents}>
        <img alt="Call Icon" src={callIcon} className={styles.callIcon} />

        <Typography variant="h4" fontWeight="700">
          How can we reach you?
        </Typography>

        <Typography variant="body1">
          <Box component="span" color="#7141FA">
            Enter your phone number
          </Box>{" "}
          below to stay updated about your order!
        </Typography>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: "600px",
            flexDirection: "column",
            alignItems: "start",
            margin: "10px 0",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "500",
              fontSize: "small",
              padding: "5px 0",
            }}
          >
            Phone
          </Typography>

          {/**Phone input field */}
          <PhoneInput
            country="US"
            placeholder="(xxx) xxx-xxxx"
            className={styles.inputPhone}
            value={phoneNumber}
            onChange={setPhoneNumber}
            smartCaret
          />
        </Box>

        <div className={styles.buttonLink}>
          <LoadingButton
            buttonName="Confirm"
            loading={loading}
            variant="contained"
            disableRipple
            sx={authStyles.authButton}
            onClick={handleSubmit}
            id="phone-sign-in-button"
          />
        </div>

        <Link className={styles.buttonLink} to={{ pathname: "/auth/email" }}>
          <Typography
            variant="body1"
            fontWeight="700"
            color="#7141FA"
            borderBottom="2px solid #7141FA"
            display="inline-block"
          >
            Lost access to your phone?
          </Typography>
        </Link>
      </Box>
    </Container>
  );
}

export default Phone;
