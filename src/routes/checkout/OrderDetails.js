import React from "react";
import BottomNav from "../../shared/bottom-nav/BottomNav";
import styles from "./OrderDetails.module.css";
import { TextField, Divider, Button, ButtonGroup } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AppleIcon from "@mui/icons-material/Apple";
import apple from "../../mock_data/images/apple.jpg";

const details = () => {
  return (
    <div className={styles.box}>
      <div className={styles.outerPicture}>
        <img className={styles.images} src={apple}></img>
        <img className={styles.images} src={apple}></img>
      </div>
      <div className={styles.details}>
        <div className={styles.row}>Item Name, Item Name</div>
        <div className={styles.row}>
          <p>Item Count</p>
          <p>2</p>
        </div>
        <div className={styles.row}>
          <p>Total</p>
          <p>$11.75</p>
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

      <div className={styles.body}>
        <div className={styles.paymentBox}>
          <div className={styles.title}>Order Summary</div>
          <div>{details()}</div>
        </div>

        <div className={styles.addressBox}>
          <div className={styles.title}>Address</div>
          <div className={styles.input}>
            <div>UCSD Building</div>
            <TextField
              id="outlined-basic"
              label="UCSD Building"
              variant="outlined"
              required
              sx={{ height: "inherit", width: "343px" }}
            />
          </div>
          <div className={styles.input}>
            <div>Floor / Apartment #</div>
            <TextField
              id="outlined-basic"
              label="1/12"
              required
              variant="outlined"
              sx={{ height: "inherit", width: "343px" }}
            />
          </div>
          <div className={styles.input}>
            <div>Notes for Rusher</div>
            <TextField
              id="outlined-basic"
              label="Notes"
              variant="outlined"
              sx={{ height: "inherit", width: "343px" }}
            />
          </div>
        </div>

        <div className={styles.paymentBox}>
          <div className={styles.title}>Payment</div>
          <div className={styles.input}>
            <div>Discover Card 4414</div>
            <button
              style={{ border: "0", background: "none", cursor: "pointer" }}
            >
              <NavigateNextIcon />
            </button>
          </div>
        </div>

        <div className={styles.rusherTips}>
          <div className={styles.title}>Rusher Tip</div>
          <ButtonGroup variant="contained" sx={{ "border-radius": "20px" }}>
            <button className={styles.tipButton}>$1.50</button>
            <button className={styles.tipButton}>$2.00</button>
            <button className={styles.tipButton}>$2.50</button>
            <button className={styles.tipButton}>Other</button>
          </ButtonGroup>
        </div>

        <div className={styles.replacement}>
          <div className={styles.title}>Replacement Items</div>
          <ButtonGroup variant="contained" sx={{ "border-radius": "20px" }}>
            <button className={styles.replaceButton}>Pick for me</button>
            <button className={styles.replaceButton}>Call me</button>
            <button className={styles.replaceButton}>Refund me</button>
          </ButtonGroup>
        </div>

        <button className={styles.placeOrder}>
          <CreditCardIcon fontSize="large" />
          Place Order
        </button>

        <button className={styles.placeOrder} style={{ background: "black" }}>
          <AppleIcon fontSize="large" />
          Place Order
        </button>

        <button
          className={styles.placeOrder}
          style={{ background: "#008CFF", "column-gap": "10px" }}
        >
          <img src="./venmo.svg"></img>
          Place Order
        </button>
      </div>
      <footer>
        <BottomNav />
      </footer>
    </>
  );
};

export default OrderDetails;
