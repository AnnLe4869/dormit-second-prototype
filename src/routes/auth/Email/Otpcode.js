import React, { useEffect, useRef, useState } from "react";
import styles from "../Auth.module.css";
import callIcon from "../../../mock_data/images/callVector.png";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

const authCode = new Array(4).fill(0);

function Otpcode() {
  const [currentInput, setCurrentInput] = useState(0);
  let inputRef = useRef(null);
  let buttonRef = useRef();

  const handleOnchange = (index) => {
    authCode.splice(index, 1, inputRef.current.value);

    if (currentInput < 3) {
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
      <div className={styles.centering}>
        <img src={callIcon} className={styles.callIcon} />
        <h1>Verification</h1>
        <p>
          We sent you a
          <span className={styles.purpleText}> code from dormit@gmail.com</span>
        </p>
        <div className={styles.squareInputLayout}>
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
        </div>
        <Link
          className={styles.buttonLink}
          to={{ pathname: "/auth/email/reset" }}
        >
          <button ref={buttonRef} className={styles.confirmButton}>
            Confirm
          </button>
        </Link>
      </div>
    </Container>
  );
}

export default Otpcode;
