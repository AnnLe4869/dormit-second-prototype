import React, { useRef } from "react";
import styles from "../Auth.module.css";
import callIcon from "../../../mock_data/images/callVector.png";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

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
      <div className={styles.centering}>
        <img src={callIcon} className={styles.callIcon} />

        <h1>Lost access to your phone?</h1>

        <p>
          <span className={styles.purpleText}>Enter your email address</span>{" "}
          associated with your account
        </p>

        <div className={styles.inputDiv}>
          <span className={styles.inputSpan}>Email</span>
          <input
            placeholder="johndoe@example.com"
            className={styles.inputPhone}
            type="text"
            maxLength="10"
          ></input>
        </div>

        <Link
          className={styles.buttonLink}
          to={{ pathname: "/auth/email/otpcode" }}
        >
          <button className={styles.confirmButton}>Confirm</button>
        </Link>
      </div>
    </Container>
  );
}

export default Phone;
