import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Checkbox, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useActivateErrorAlert } from "../../../context/alert/alert-handler";
import { useSetUpProfile } from "../../../context/user/auth-handler";
import { LoadingButton } from "../../../shared/loading-button/LoadingButton";

import styles from "../Auth.module.css";

function Register() {
  const navigate = useNavigate();
  const setupProfile = useSetUpProfile();
  const activateErrorAlert = useActivateErrorAlert();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const result = await setupProfile(name, email);
    if (result.isSuccess) {
      navigate("/auth/register");
    } else {
      // should dispatch error alert
      activateErrorAlert(result.message);
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
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
        <AccountCircleIcon
          sx={{ height: "15%", width: "inherit", color: "#7140FA" }}
        />
        <Typography variant="h4" fontWeight="700">
          Create account
        </Typography>
        <Typography variant="body1">
          One more step to{" "}
          <Box component="span" color="#7141FA">
            nutritious victory
          </Box>
        </Typography>

        <Grid
          container
          columnGap={5}
          sx={{
            textAlign: "left",
            justifyContent: "center",
            width: "100%",
            margin: "10px 20px",
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
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
              fontWeight="500"
              fontSize="small"
              padding="5px 0"
            >
              Full Name
            </Typography>
            {/** Name input field  */}
            <input
              type="text"
              placeholder="Name"
              className={styles.inputAccount}
              value={name}
              onChange={handleNameChange}
            ></input>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
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
              fontWeight="500"
              fontSize="small"
              padding="5px 0"
            >
              Email
            </Typography>
            {/** Email input field  */}
            <input
              type="email"
              placeholder="email@address.com"
              className={styles.inputAccount}
              value={email}
              onChange={handleEmailChange}
            ></input>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            margin: "20px 20px",
            textAlign: "left",
          }}
        >
          <Checkbox aria-label="checkbox" color="primary" />

          <Typography variant="body1">
            By entering this phone number, you agree with Dormit’s <br /> Terms
            & Conditions and Privacy Policy
          </Typography>
        </Box>
        <div className={styles.buttonLink}>
          <LoadingButton
            buttonName="Confirm"
            loading={loading}
            variant="contained"
            disableRipple
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
            onClick={handleSubmit}
          />
        </div>
      </Box>
    </Container>
  );
}

export default Register;
