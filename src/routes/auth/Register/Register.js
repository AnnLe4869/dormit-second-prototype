import React from "react";
import styles from "../Auth.module.css";
import accountVector from "../../../mock_data/images/accountVector.png";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { Box, Button, Checkbox, Grid, Typography } from "@mui/material";

function Register({ nextStep }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: "10px",
        }}
      >
        <img
          alt="Account Icon"
          src={accountVector}
          className={styles.callIcon}
        />
        <Typography variant="h4" fontWeight="700">
          Create account
        </Typography>
        <Typography variant="body1">
          One more step to{" "}
          <Box component="span" color="#7141FA">
            nutricious victory
          </Box>
        </Typography>

        {/* Inputs */}

        <Grid
          container
          columnGap={5}
          sx={{
            textAlign: "left",
            justifyContent: "center",
            width: "100%",
            margin: "10px 20px",
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              width: "100%",
              maxWidth: "600px",
              flexDirection: "column",
              alignItems: "start",
              margin: "10px 0",
            }}
          >
            <Typography
              variant="body1"
              fontWeight="500"
              fontSize="small"
              padding="5px 0"
            >
              Full Name
            </Typography>
            <input
              className={styles.inputAccount}
              type="text"
              placeholder="Name"
            ></input>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              width: "100%",
              maxWidth: "600px",
              flexDirection: "column",
              alignItems: "start",
              margin: "10px 0",
            }}
          >
            <Typography
              variant="body1"
              fontWeight="500"
              fontSize="small"
              padding="5px 0"
            >
              Email
            </Typography>
            <input
              className={styles.inputAccount}
              type="text"
              placeholder="email@address.com"
            ></input>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            margin: "20px 20px",
            textAlign: "left",
          }}
        >
          <Checkbox {...label} color="primary" />

          <Typography variant="body1">
            By entering this phone number, you agree with Dormit’s <br /> Terms
            & Conditions and Privacy Policy
          </Typography>
        </Box>
        <Link to="/auth/register" className={styles.buttonLink}>
          <Button
            variant="contained"
            disableRipple
            sx={{
              backgroundColor: "#7141FA",
              borderRadius: "999px",
              color: "#ffffff",
              padding: "10px 15px",
              width: "100%",
              fontWeight: "bold",
              fontSize: "large",
              border: "none",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#7141FA",
              },
            }}
            onClick={nextStep}
          >
            Confirm
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default Register;
