import React from "react";
import styles from "../Auth.module.css";
import checkIcon from "../../../mock_data/images/checkVector.png";

function Register({ nextStep }) {
  return (
    <div className={styles.centering}>
      <h1>Create account</h1>
      <p>
        One more step to{" "}
        <span className={styles.purpleText}>nutricious victory</span>
      </p>
      <div className={styles.centering}>
        <div className={styles.nameInput}>
          <div>
            <span className={styles.bold}>First Name</span>
            <input className={styles.inputAccount} type="text"></input>
          </div>
          <div>
            <span className={styles.bold}>Last Name</span>
            <input className={styles.inputAccount} type="text"></input>
          </div>
          <div>
            <span className={styles.bold}>Email</span>
            <input className={styles.inputAccount} type="text"></input>
          </div>
        </div>
      </div>

      <div className={styles.squareInputLayout}>
        <div className={styles.checkBox}>
          <input
            onChange={(e) => {
              console.log(e.target.checked);
            }}
            className={styles.inputCheck}
            type="checkbox"
          ></input>
        </div>

        <p>
          By entering this phone number, you agree with Dormit’s Terms &
          Conditions and Privacy Policy
        </p>
      </div>
      <button onClick={nextStep} className={styles.confirmButton}>
        Confirm
      </button>
    </div>
  );
}

export default Register;
