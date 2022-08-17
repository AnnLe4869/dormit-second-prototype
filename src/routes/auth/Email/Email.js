import React from "react";
import styles from "../Auth.module.css";
import callIcon from "../../../mock_data/images/callVector.png";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

function Phone({ lostAccess }) {
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
        <img alt="call icon" src={callIcon} className={styles.callIcon} />

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
            className={styles.inputPhone}
            type="text"
            maxLength="10"
          ></input>
        </Box>

        <Link
          className={styles.buttonLink}
          to={{ pathname: "/auth/email/otpcode" }}
        >
          <Button
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
          >
            Confirm
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Phone;
