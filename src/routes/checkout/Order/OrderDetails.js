import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import apple from "../../../mock_data/images/apple.jpg";
import styles from "./OrderDetails.module.css";

const Details = () => {
  return (
    <div className={styles.box}>
      <div className={styles.outerPicture}>
        <img className={styles.images} src={apple}></img>
        <img className={styles.images} src={apple}></img>
        <img className={styles.images} src={apple}></img>
        <img className={styles.images} src={apple}></img>
      </div>
      <div className={styles.details}>
        <Typography fontWeight="700" variant="h6" className={styles.row}>
          Item Name, Item Name
        </Typography>
        <div className={styles.row}>
          <Typography fontWeight="500" variant="h6">
            Item Count
          </Typography>
          <Typography fontWeight="500" variant="h6">
            2
          </Typography>
        </div>
        <div className={styles.row}>
          <Typography fontWeight="500" variant="h6">
            Total
          </Typography>
          <Typography fontWeight="500" variant="h6">
            $11.75
          </Typography>
        </div>
      </div>
    </div>
  );
};

const OrderDetails = () => {
  return (
    <>
      <header>
        <button className={styles.back}>
          <ArrowBackIosIcon fontSize="large" />
        </button>
        <p> Order Details </p>
      </header>

      <Divider />

      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingY: "25px",
          }}
        >
          <div className={styles.paymentBox}>
            <Typography
              fontWeight="700"
              fontFamily="BlinkMacSystemFont"
              variant="h5"
              marginBottom={"15px"}
            >
              Order Summary
            </Typography>
            <Details />
          </div>
          <Divider
            sx={{
              width: "100%",
              marginBottom: "25px",
              maxWidth: "610px",
            }}
          />
          <div className={styles.addressBox}>
            <Typography
              fontWeight="700"
              fontFamily="BlinkMacSystemFont"
              variant="h5"
            >
              Address
            </Typography>
            <div className={styles.input}>
              <Typography width={"100%"} variant="body1">
                UCSD Building
              </Typography>
              <TextField
                id="outlined-basic"
                label="UCSD Building"
                variant="outlined"
                required
                sx={{
                  height: "inherit",
                  backgroundColor: "#EEEEEE",
                  width: "100%",
                }}
              />
            </div>
            <div className={styles.input}>
              <Typography width={"100%"} variant="body1">
                Floor / Apartment #
              </Typography>
              <TextField
                id="outlined-basic"
                label="1/12"
                required
                variant="outlined"
                sx={{
                  height: "inherit",
                  backgroundColor: "#EEEEEE",
                  width: "100%",
                }}
              />
            </div>
            <div className={styles.input}>
              <Typography width={"100%"} variant="body1">
                Notes for Rusher
              </Typography>
              <TextField
                id="outlined-basic"
                label="Notes"
                variant="outlined"
                sx={{
                  height: "inherit",
                  backgroundColor: "#EEEEEE",
                  width: "100%",
                }}
              />
            </div>
          </div>
          {/* <Divider
            sx={{
              width: "100%",
              marginBottom: "25px",
              maxWidth: "610px",
            }}
          />
          <div className={styles.paymentBox}>
            <Typography
              fontWeight="700"
              fontFamily="BlinkMacSystemFont"
              variant="h5"
            >
              Payment
            </Typography>
            <div className={styles.input}>
              <Typography variant="h6">Discover Card 4414</Typography>
              <button
                style={{ border: "0", background: "none", cursor: "pointer" }}
              >
                <NavigateNextIcon />
              </button>
            </div>
          </div> */}
          <Divider
            sx={{
              width: "100%",
              marginBottom: "25px",
              maxWidth: "610px",
            }}
          />
          <Grid
            container
            sx={{
              width: "100%",
              maxWidth: "610px",
              height: "inherit",
              gap: "10px",
              display: "flex",
              marginBottom: "30px",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={3}>
              <Typography variant="body1">Rusher Tip</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <ButtonGroup
                disableElevation
                variant="contained"
                sx={{ "border-radius": "20px", width: "100%" }}
              >
                <button className={styles.tipButton}>$1.50</button>
                <button className={styles.tipButton}>$2.00</button>
                <button className={styles.tipButton}>$2.50</button>
                <button className={styles.tipButton}>Other</button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              width: "100%",
              maxWidth: "610px",
              height: "inherit",
              gap: "10px",
              display: "flex",
              marginBottom: "60px",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={3}>
              <Typography variant="body1">Replacement Items</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <ButtonGroup
                disableElevation
                variant="contained"
                sx={{ "border-radius": "20px", width: "100%" }}
              >
                <button className={styles.replaceButton}>Pick for me</button>
                <button className={styles.replaceButton}>Call me</button>
                <button className={styles.replaceButton}>Refund me</button>
              </ButtonGroup>
            </Grid>
          </Grid>{" "}
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              maxWidth: "420px",
              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
              height: "60px",
              background: "#7141fa",
              borderRadius: "20px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "36px",
              color: "white",
              border: "none",
              marginBottom: "10px",
            }}
          >
            <CreditCardIcon fontSize="large" />
            Place Order
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default OrderDetails;
