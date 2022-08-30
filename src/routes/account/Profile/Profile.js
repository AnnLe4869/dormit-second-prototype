import React from "react";
import { TextField, Typography, Grid, Box } from "@mui/material";
import { AccountBox, textFieldStyles } from "../muiStyles";
import profilePicture from "../../../assets/Account/profilePicture.webp";
import styles from "../Account.module.css";

export default function Profile() {
  const [isEditing, setIsEditing] = React.useState(false);
  const nameRef = React.createRef();
  const buildingRef = React.createRef();
  const floorRef = React.createRef();
  const aptRef = React.createRef();
  const phoneRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const editIconImage = "image";
  const profilePicUrl = "imageUrl";
  const locationIcon = "icon";
  const contactDeetIcon = "icon";
  const profileIcon = "img";
  const buildingValue1 = "1";
  const buildingValue2 = "2";
  const buildingValue3 = "3";

  const student = {
    name: "Alex Smith",
    pronoun: "They/them",
  };

  const changeProfilePic = () => {};
  const editProfile = () => {
    setIsEditing(true);
  };
  const saveProfileEdit = () => {
    setIsEditing(false);
  };
  const cancelProfileEdit = () => {
    setIsEditing(false);
    // cancel edits on input fields
    // reset to original values
    // nameRef.current.value = student["name"];
    // buildingRef.current.value = student["building"];
    // floorRef.current.value = student["floor"];
    // aptRef.current.value = student["apartment"];
    // phoneRef.current.value = student["phone"];
    // emailRef.current.value = student["email"];
    // passwordRef.current.value = student["password"];
  };

  return (
    <Box sx={AccountBox}>
      <Typography variant="title1">Profile</Typography>
      <Grid container alignItems="center" spacing={"18px"}>
        <Grid item xs={1.2} sx={{ minWidth: "70px" }}>
          <img src={profilePicture} id={styles.pfp} alt="profile"></img>
        </Grid>
        <Grid item sm={3.5} xs={4.5}>
          <Typography variant="callout">Full Name</Typography>
          <TextField
            defaultValue={student.name}
            size="small"
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item sm={3.5} xs={4.5}>
          <Typography variant="callout">Pronouns</Typography>
          <TextField
            value={student.pronoun}
            size="small"
            sx={textFieldStyles}
          />
        </Grid>
      </Grid>

      <Typography variant="title2">Default Location</Typography>
      <Grid container alignItems="center" spacing={"18px"}>
        <Grid item sm={3.5} xs={4.5}>
          <Typography variant="callout">UCSD Building</Typography>
        </Grid>
        <Grid item sm={3.5} xs={4.5}>
          <TextField
            defaultValue="Ellicott Hall"
            size="small"
            sx={textFieldStyles}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" spacing={"18px"}>
        <Grid item sm={3.5} xs={4.5}>
          <Typography variant="callout">Floor / Apartment #</Typography>
        </Grid>
        <Grid item sm={3.5} xs={4.5}>
          <TextField defaultValue="326" size="small" sx={textFieldStyles} />
        </Grid>
      </Grid>

      <Typography variant="title2">Contact Details</Typography>

      <Grid container alignItems="center" spacing={"18px"}>
        <Grid item sm={3.5} xs={4.5}>
          <Typography variant="callout">Phone Number</Typography>
        </Grid>
        <Grid item sm={3.5} xs={4.5}>
          <TextField
            defaultValue="530-324-5656"
            size="small"
            sx={textFieldStyles}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" spacing={"18px"}>
        <Grid item sm={3.5} xs={4.5}>
          <Typography variant="callout">Email</Typography>
        </Grid>
        <Grid item sm={3.5} xs={4.5}>
          <TextField
            defaultValue="alextest@test.com"
            size="small"
            sx={textFieldStyles}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
