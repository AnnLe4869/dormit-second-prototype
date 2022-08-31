import React from "react";
import styles from "../Account.module.css";
import { Typography, Box, Button } from "@mui/material";
import { AccountBox, ButtonStyles } from "../muiStyles";

export default function Impact() {
  const NUM_STUDENTS = 30;
  const CARBON_AMOUNT = 4;
  const NUM_RUSHER = 8;

  const user = {
    name: "Alex Turner",
    pronoun: "He/Him",
    email: "alextest@test.com",
    phoneNumber: "530-324-5656",
    college: "Revelle",
    dorm: "Ellicott Hall",
    dormNumber: "326",
  };

  return (
    <Box sx={AccountBox}>
      <Typography variant="h4">Your Impact</Typography>
      <Typography sx={{ marginTop: "20px" }}>
        {user.name + ", you are 1 of ("}
        <span className={styles.textColorPurp}>{NUM_STUDENTS}</span>
        {") " + user.college + " students who prevented "}
        <span className={styles.textColorPurp}>{CARBON_AMOUNT}</span>
        {"g carbon emissions and helped #"}
        <span className={styles.textColorPurp}>{NUM_RUSHER}</span>
        {" Rushers(s)!"}
      </Typography>
      <br />
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Have some time to fill a quick optional survey? Share the link with a
        friend and get a shout out on Instagram!
      </Typography>

      <Button variant="contained" sx={ButtonStyles}>
        <Typography variant="body1" sx={{ fontWeight: "700", color: "white" }}>
          Take me to survey
        </Typography>
      </Button>
    </Box>
  );
}
