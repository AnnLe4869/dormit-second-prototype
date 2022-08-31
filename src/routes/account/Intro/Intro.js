import React from "react";
import styles from "../Account.module.css";

export default function Intro() {
  const student = {
    name: "john",
    pronoun: "he/him",
    college: "seventh",
  };
  let pfpIcon = "img";
  return (
    <div className={styles.intro}>
      <img src={pfpIcon} id={styles.pfp} alt="profile"></img>

      <div className={styles.text}>
        <h4>{"Hi, " + student["name"] + " (" + student["pronouns"] + ")"}</h4>
        <h5>{"UCSD - " + student["college"] + " student"}</h5>
        <a href="logout">Log Out</a>
      </div>
    </div>
  );
}
