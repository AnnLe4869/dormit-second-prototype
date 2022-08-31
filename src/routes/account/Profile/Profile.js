import React from "react";
import { TextField, Typography, Grid, Box } from "@mui/material";
import { AccountBox, textFieldStyles } from "../muiStyles";
import profilePicture from "../../../assets/Account/profilePicture.webp";
import styles from "../Account.module.css";

export default function Profile() {
  const user = {
    name: "Alex Turner",
    pronoun: "He/Him",
    email: "alexturner@test.com",
    phoneNumber: "530-324-5656",
    college: "Revelle",
    dorm: "Ellicott Hall",
    dormNumber: "326",
  };

  return (
    <Box sx={AccountBox}>
      <Typography variant="h4">Profile</Typography>
      <Grid
        container
        alignItems="center"
        spacing={{ xs: 1, sm: 1.5 }}
        sx={{ pt: "13px", pb: "31px" }}
      >
        <Grid item xs={1.6} minWidth={75}>
          <img src={profilePicture} id={styles.pfp} alt="profile"></img>
        </Grid>
        <Grid item lg={3} md={3.5} xs={4} minWidth={125}>
          <Typography variant="subtitle1" fontSize={{ xs: "13px", sm: "15px" }}>
            Full Name
          </Typography>
          <TextField
            defaultValue={user.name}
            size="small"
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              fieldset: { borderColor: "#fff" },
              mt: "4px",
            }}
            InputProps={{ sx: { fontSize: "13px" } }}
          />
        </Grid>
        <Grid item lg={3} md={3.5} xs={4} minWidth={113}>
          <Typography variant="subtitle1" fontSize={{ xs: "13px", sm: "15px" }}>
            Pronouns
          </Typography>
          <TextField
            value={user.pronoun}
            size="small"
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              fieldset: { borderColor: "#fff" },
              mt: "4px",
            }}
            InputProps={{ sx: { fontSize: "13px" } }}
          />
        </Grid>
      </Grid>

      <Typography variant="h6">Default Location</Typography>
      <Grid container alignItems="center" spacing={"13px"}>
        <Grid item xl={3.9} lg={4} md={4.7} sm={5.5} xs={6}>
          <Typography variant="subtitle1" fontSize={{ xs: "13px", sm: "15px" }}>
            UCSD Building
          </Typography>
        </Grid>
        <Grid item sm={5.5} xs={6}>
          <TextField
            defaultValue={user.dorm}
            size="small"
            InputProps={{ sx: { fontSize: "13px" } }}
            sx={textFieldStyles}
          />
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        spacing={"13px"}
        sx={{ paddingBottom: "31px", pt: { xs: "5px", sm: "10px" } }}
      >
        <Grid item xl={3.9} lg={4} md={4.7} sm={5.5} xs={6}>
          <Typography variant="subtitle1" fontSize={{ xs: "13px", sm: "15px" }}>
            Floor/Apartment #
          </Typography>
        </Grid>
        <Grid item sm={5.5} xs={6}>
          <TextField
            defaultValue={user.dormNumber}
            size="small"
            sx={textFieldStyles}
            InputProps={{ sx: { fontSize: "13px" } }}
          />
        </Grid>
      </Grid>

      <Typography variant="h6">Contact Details</Typography>
      <Grid container alignItems="center" spacing={"13px"}>
        <Grid item xl={3.9} lg={4} md={4.7} sm={5.5} xs={6}>
          <Typography variant="subtitle1" fontSize={{ xs: "13px", sm: "15px" }}>
            Phone Number
          </Typography>
        </Grid>
        <Grid item sm={5.5} xs={6}>
          <TextField
            defaultValue={user.phoneNumber}
            size="small"
            sx={textFieldStyles}
            InputProps={{ sx: { fontSize: "13px" } }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        spacing={"13px"}
        sx={{ pt: { xs: "5px", sm: "10px" } }}
      >
        <Grid item xl={3.9} lg={4} md={4.7} sm={5.5} xs={6}>
          <Typography variant="subtitle1" fontSize={{ xs: "13px", sm: "15px" }}>
            Email
          </Typography>
        </Grid>
        <Grid item sm={5.5} xs={6}>
          <TextField
            defaultValue={user.email}
            size="small"
            sx={textFieldStyles}
            InputProps={{ sx: { fontSize: "13px" } }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
