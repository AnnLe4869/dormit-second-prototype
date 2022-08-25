import React from "react";
import styles from "../Account.module.css";
import { Link, Typography, Grid } from "@mui/material";
import profilePicture from "../../../assets/Account/profilePicture.webp";

export default function Intro() {
  const student = {
    name: "Alex",
    pronoun: "He/Him",
    college: "Revelle",
  };

  let pfpIcon = profilePicture;
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={1}>
          <img src={pfpIcon} id={styles.pfp} alt="profile"></img>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h1">
            {`Hi, ${student.name} (${student.pronoun})`}
          </Typography>
          <Typography variant="h2" sx={{ m: "10px 0" }}>
            {`UCSD - ${student.college} student`}
          </Typography>
          <Link href="logout">
            <Typography variant="body2">Log Out</Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
