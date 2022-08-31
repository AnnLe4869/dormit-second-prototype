import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import PhoneInput from "react-phone-number-input/input";
import { Link, useNavigate } from "react-router-dom";
import { useSendCodeToPhone } from "../../../context/user/auth-handler";
import callIcon from "../../../mock_data/images/callVector.png";
import styles from "../Auth.module.css";
import { authStyles } from "../muiStyles";

function Phone({ phoneNumber, setPhoneNumber, setConfirmationResult }) {
  const navigate = useNavigate();
  const sendPhoneCode = useSendCodeToPhone();

  const handleSubmit = async () => {
    const result = await sendPhoneCode(phoneNumber, setConfirmationResult);
    if (result.isSuccess) {
      navigate("/auth/phone/otpcode");
    } else {
      // show the error message here
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
          <Button
            variant="contained"
            disableRipple
            sx={authStyles.authButton}
            onClick={handleSubmit}
            id="phone-sign-in-button"
          >
            Confirm
          </Button>
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
