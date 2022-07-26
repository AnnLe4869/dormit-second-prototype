import React, { useRef } from "react";
import styles from "../Auth.module.css";
import callIcon from "../../../mock_data/images/callVector.png";

function PhoneCheck({ nextStep, lostAccess }) {
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
    <div className={styles.centering}>
      <img src={callIcon} className={styles.callIcon} />

      <h1>How can we reach you?</h1>

      <p>
        <span className={styles.purpleText}>Enter your phone number</span> below
        to stay updated about your order!
      </p>

      <input
        pattern="[0-9]"
        ref={inputRef}
        onChange={phoneFormat}
        className={styles.inputPhone}
        type="text"
        placeholder="(xxx) xxx-xxxx"
        maxLength="10"
      ></input>

      <button onClick={nextStep} className={styles.confirmButton}>
        Confirm
      </button>

      <p>
        Lost access to your phone?{" "}
        <span className={styles.purpleLink} onClick={lostAccess}>
          Click here
        </span>
      </p>
    </div>
  );
}

export default PhoneCheck;
