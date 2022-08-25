import React from "react";
import styles from "../Account.module.css";
import { Link, Typography } from "@mui/material";

export default function Intro() {
  const student = {
    name: "john",
    pronoun: "he/him",
    college: "seventh",
  };

  let pfpIcon = "img";
  return (
    <>
      <img src={pfpIcon} id={styles.pfp} alt="profile"></img>
      <Typography variant="h1">{`Hi, ${student.name} (${student.pronoun})`}</Typography>
      <Typography variant="h2">{`UCSD - ${student.college} student`}</Typography>
      <Link href="logout">Log Out</Link>
    </>
  );
}
