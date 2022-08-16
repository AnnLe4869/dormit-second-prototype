import React, { useEffect, useRef, useState } from "react";
import styles from "../Auth.module.css";
import callIcon from "../../../mock_data/images/callVector.png";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";

const authCode = new Array(6).fill(0);

function Otpcode() {
  const [currentInput, setCurrentInput] = useState(0);
  let inputRef = useRef(null);
  let buttonRef = useRef();

  const handleOnchange = (index) => {
    authCode.splice(index, 1, inputRef.current.value);

    if (currentInput < 5) {
      inputRef.current?.focus();
      return setCurrentInput(currentInput + 1);
    }

    inputRef.current?.blur();
    buttonRef.current.click();
    return;
  };

  useEffect(() => {
    inputRef.current?.focus();
  });

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
          Verification
        </Typography>
        <Typography variant="body1">
          We sent you an{" "}
          <Box component="span" color="#7141FA">
            SMS code to (xxx) xxx-xxxx
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
          {authCode.map((val, index) => {
            return (
              <input
                key={index}
                onChange={() => handleOnchange(index)}
                type="number"
                ref={index === currentInput ? inputRef : null}
                className={styles.inputVerify}
                placeholder={val}
              ></input>
            );
          })}
        </Box>
        <Link className={styles.buttonLink} to={{ pathname: "/auth/signup" }}>
          <Button
            ref={buttonRef}
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

export default Otpcode;
