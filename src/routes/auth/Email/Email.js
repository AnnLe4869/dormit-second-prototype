import EmailIcon from "@mui/icons-material/Email";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Auth.module.css";

import { verifyEmailFormat } from "../../../helper/verifyEmailFormat";
import { useActivateErrorAlert } from "../../../context/alert/alert-handler";
import { useSendCodeEmail } from "../../../context/user/auth-handler";
import { LoadingButton } from "../../../shared/loading-button/LoadingButton";

function Email({ email, setEmail }) {
  const navigate = useNavigate();
  const activateErrorAlert = useActivateErrorAlert();
  const sendEmailCode = useSendCodeEmail();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);

    /**
     * perform some quick validation on the email format here
     * if it doesn't look like an email, display error message
     */
    if (!verifyEmailFormat(email)) {
      activateErrorAlert("This doesn't look like an email. Please try again");
      setLoading(false);
      return;
    }

    const result = await sendEmailCode(email);
    if (result.isSuccess) {
      navigate("/auth/email/otpcode");
    } else {
      /**
       * show the error message
       * error should happen very rarely and if it does,
       * often it is fatal error that is server-related
       */
      activateErrorAlert("Something went wrong. Please try again");
      setLoading(false);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: "10px",
        }}
      >
        <EmailIcon sx={{ height: "15%", width: "inherit", color: "#7140FA" }} />

        <Typography variant="h4" fontWeight="700">
          Lost access to your phone?
        </Typography>

        <Typography variant="body1">
          <Box component="span" color="#7141FA">
            Enter your email address
          </Box>{" "}
          associated with your account
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
            Email
          </Typography>
          <input
            placeholder="johndoe@example.com"
            type="email"
            required
            className={styles.inputPhone}
            value={email}
            onChange={handleChange}
          ></input>
        </Box>

        <div className={styles.buttonLink}>
          <LoadingButton
            buttonName="Confirm"
            loading={loading}
            onClick={handleSubmit}
            disableRipple
            variant="contained"
            sx={{
              backgroundColor: "#7141FA",
              borderRadius: "999px",
              color: "#ffffff",
              padding: "10px 15px",
              width: "100%",
              fontWeight: "bold",
              fontSize: "large",
              border: "none",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#7141FA",
              },
            }}
          />
        </div>
      </Box>
    </Container>
  );
}

export default Email;
