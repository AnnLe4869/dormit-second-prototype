import React from "react";
import styles from "../Account.module.css";

export default function Impact() {
  const impactIcon = "img";
  const NUM_STUDENTS = 30;
  const CARBON_AMOUNT = 4;
  const NUM_RUSHER = 8;

  const student = {
    name: "john",
    college: "warren",
  };

  const toSurvey = () => {};
  return (
    <div>
      <div className={styles.boxes}>
        <div className={styles.head}>
          <h3 className={styles.boxTitle}>Your Impact</h3>
          <br />
          <img src={impactIcon} className={styles.icon} alt="impact"></img>
        </div>
        <hr className={styles.lineDiv} id={styles.impactLine} />

        <p>
          {student["name"] + ", you are 1 of ("}
          <span className={styles.textColorPurp}>{NUM_STUDENTS}</span>
          {") " + student.college + " students who prevented "}
          <span className={styles.textColorPurp}>{CARBON_AMOUNT}</span>
          {"g carbon emissions and helped #"}
          <span className={styles.textColorPurp}>{NUM_RUSHER}</span>
          {" Rushers(s)!"}
        </p>
        <p>
          Have some time to fill a quick optional survey? Share the link with a
          friend and get a shout out on Instagram!
        </p>
        <button className={styles.btn} onClick={toSurvey}>
          Take me to survey
        </button>
      </div>
    </div>
  );
}
