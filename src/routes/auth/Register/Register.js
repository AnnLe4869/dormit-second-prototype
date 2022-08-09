import React from "react";
import styles from "../Auth.module.css";
import accountVector from "../../../mock_data/images/accountVector.png";
import { Container, fontSize } from "@mui/system";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";

function Register({ nextStep }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Container maxWidth="md">
      <div className={styles.centering}>
        <img src={accountVector} className={styles.callIcon} />
        <h1>Create account</h1>
        <p>
          One more step to{" "}
          <span className={styles.purpleText}>nutricious victory</span>
        </p>
        <div className={styles.nameInput}>
          <div className={styles.inputDiv}>
            <span className={styles.inputSpan}>Full Name</span>
            <input
              className={styles.inputAccount}
              type="text"
              placeholder="Name"
            ></input>
          </div>
          <div className={styles.inputDiv}>
            <span className={styles.inputSpan}>Email</span>
            <input
              className={styles.inputAccount}
              type="text"
              placeholder="email@address.com"
            ></input>
          </div>
        </div>

        <div className={styles.squareInputLayout}>
          <Checkbox {...label} color="primary" />

          <p>
            By entering this phone number, you agree with Dormit’s <br /> Terms
            & Conditions and Privacy Policy
          </p>
        </div>
        <Link to="/auth/register" className={styles.buttonLink}>
          <button onClick={nextStep} className={styles.confirmButton}>
            Confirm
          </button>
        </Link>
      </div>
    </Container>
  );
}

export default Register;
