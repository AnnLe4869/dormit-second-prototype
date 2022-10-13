import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useRef, useState } from "react";

import styles from "../Auth.module.css";
import { authStyles } from "../muiStyles";

import { useActivateErrorAlert } from "../../../context/alert/alert-handler";
import { LoadingButton } from "../../../shared/loading-button/LoadingButton";
import { useVerifyEmailCode } from "../../../context/user/auth-handler";

function Otpcode({ email }) {
  const navigate = useNavigate();
  const verifyEmailCode = useVerifyEmailCode();
  const activateErrorAlert = useActivateErrorAlert();

  const [emailCode, setEmailCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnchange = (event) => {
    setEmailCode(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const result = await verifyEmailCode(email, emailCode);
    if (result.isSuccess) {
      navigate("/category");
    } else {
      setLoading(false);
      activateErrorAlert(result.message);
    }
  };

  return (
    <Container>
      <Box sx={authStyles.centerComponents}>
        <EmailIcon sx={{ height: "15%", width: "inherit", color: "#7140FA" }} />

        <Typography variant="h4" fontWeight="700">
          Verification
        </Typography>
        <Typography variant="body1">
          We sent you a code from
          <Box component="span" color="#7141FA">
            {" "}
            dormit@gmail.com
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
            value={emailCode}
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
            onClick={handleSubmit}
            disableRipple
            variant="contained"
            sx={authStyles.authButton}
          />
        </div>
      </Box>
    </Container>
  );
}

export default Otpcode;
