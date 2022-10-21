import React, { useRef } from "react";
import styles from "../Auth.module.css";
import callIcon from "../../../mock_data/images/callVector.png";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

function Phone({ lostAccess }) {
  const inputRef = useRef();

  //Regex to format 10 given numbers to an American phone number
  const phoneFormat = () => {
    let phoneNumber = inputRef.current.value;
    inputRef.current.value = phoneNumber.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );
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
        <img alt="Call Icon" src={callIcon} className={styles.callIcon} />

        <Typography variant="h4" fontWeight="700">
          Reset Phone Number
        </Typography>

        <Typography variant="body1">
          <Box component="span" color="#7141FA">
            Enter your phone number
          </Box>{" "}
          below to stay updated again!
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
          <input
            pattern="[0-9]"
            ref={inputRef}
            onChange={phoneFormat}
            className={styles.inputPhone}
            type="text"
            placeholder="(xxx) xxx-xxxx"
            maxLength="10"
          ></input>
        </Box>

        <Link
          className={styles.buttonLink}
          to={{ pathname: "/auth/phone/otpcode" }}
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
