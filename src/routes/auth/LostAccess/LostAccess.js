import React, { useRef } from "react";
import styles from "../Auth.module.css";
import callIcon from "../../../mock_data/images/callVector.png";

function PhoneCheck({ nextStep, lostAccess }) {
  return (
    <div className={styles.centering}>
      <img src={callIcon} className={styles.callIcon} />

      <h1>Lost access to your phone?</h1>

      <p>
        <span className={styles.purpleText}>Enter your email address</span>{" "}
        associated with your account
      </p>

      <input
        placeholder="johndoe@example.com"
        className={styles.inputPhone}
        type="text"
        maxLength="10"
      ></input>

      <button onClick={nextStep} className={styles.confirmButton}>
        Confirm
      </button>
    </div>
  );
}

export default PhoneCheck;
