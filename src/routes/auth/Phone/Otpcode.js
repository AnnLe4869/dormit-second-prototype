import React, { useEffect, useRef, useState } from "react";
import styles from "../Auth.module.css";
import callIcon from "../../../mock_data/images/callVector.png";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import { useVerifyPhoneCode } from "../../../context/user/auth-handler";
import { authStyles } from "../muiStyles";

const authCode = new Array(6).fill(0);

function Otpcode() {
  const [phoneCode, setPhoneCode] = useState("");

  const [currentInput, setCurrentInput] = useState(0);
  console.log(authCode);
  let inputRef = useRef(null);
  let buttonRef = useRef();
  const verifyPhoneCode = useVerifyPhoneCode();

  // const handleOnchange = (index) => {
  //   authCode.splice(index, 1, inputRef.current.value);

  //   if (currentInput < 6) {
  //     inputRef.current?.focus();
  //     return setCurrentInput(currentInput + 1);
  //   }

  //   return;
  // };

  const handleOnchange = (event) => {
    setPhoneCode(event.target.value);
  };

  const check = async () => {
    await verifyPhoneCode(phoneCode);
  };

  // useEffect(() => {
  //   inputRef.current?.focus();

  //   console.log(currentInput);

  //   if (currentInput === 6) {
  //     inputRef.current?.blur();
  //   }
  // }, [currentInput]);

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
          <input type="text" onChange={handleOnchange}></input>
          {/* {authCode.map((val, index) => {
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
          })} */}
        </Box>
        <Link className={styles.buttonLink} to={{ pathname: "/auth/signup" }}>
          <Button
            ref={buttonRef}
            disableRipple
            variant="contained"
            sx={authStyles.authButton}
            onClick={check}
          >
            Confirm
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Otpcode;
