import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ClearIcon from "@mui/icons-material/Clear";
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
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../context/product/product-handler";
import { useCheckout } from "../../../context/user/checkout-handler";
import { UserContext } from "../../../context/user/user-context";

import { getTotal, getTotalCount } from "../../../helper/getTotalsAndFees.js";

import building from "../../../assets/OrderDetails/building.svg";
import stairs from "../../../assets/OrderDetails/stairs.svg";
import notes from "../../../assets/OrderDetails/notes.svg";

import { headers } from "./muiStyles.js";
import styles from "./OrderDetails.module.css";

const RUSHER_TIP_1 = 1.5;
const RUSHER_TIP_2 = 2;
const RUSHER_TIP_3 = 2.5;
const OTHER = 0;
const MINTIP = 0;

const REPLACEMENT_0 = 0;
const REPLACEMENT_1 = 1;
const REPLACEMENT_2 = 2;

const CAMPUS = "UCSD";
const BUILDING = "UCSD Building";
const FLOOR = "1/12";
const MESSAGE = "Leave it at my door";

const Details = ({ currentCart, rusherTip }) => {
  return (
    <div className={styles.box}>
      <div className={styles.outerPicture}>
        {currentCart &&
          currentCart.map((item, index) => {
            if (index < 4)
              return <img className={styles.images} src={item.image} />;
          })}
      </div>
      <div className={styles.details}>
        <Typography fontWeight="700" variant="h6" className={styles.names}>
          {currentCart &&
            currentCart.map((item, index) => {
              if (index < 4) {
                return <span className={styles.name}>{item.name}</span>;
              }

              if (index === 4 && currentCart.length > 4) {
                return "...";
              }
            })}
        </Typography>
        <div className={styles.row}>
          <Typography sx={headers.header4}>Item Count</Typography>
          <Typography sx={headers.header6}>
            {getTotalCount(currentCart)}
          </Typography>
        </div>
        <div className={styles.row}>
          <Typography sx={headers.header4}>Subtotal</Typography>
          <Typography sx={headers.header6}>
            ${getTotal(currentCart).toFixed(2)}
          </Typography>
        </div>
        <div className={styles.row}>
          <Typography sx={headers.header4}>Tip</Typography>
          <Typography sx={headers.header6}>${rusherTip.toFixed(2)}</Typography>
        </div>
        <div className={styles.row}>
          <Typography sx={headers.header4}>Total</Typography>
          <Typography sx={headers.header6}>
            ${(getTotal(currentCart) + rusherTip).toFixed(2)}
          </Typography>
        </div>
      </div>
    </div>
  );
};

const OrderDetails = (setStripeClientSecret) => {
  const navigate = useNavigate();
  const checkout = useCheckout();
  const { state } = useContext(UserContext);

  const [rusherTip, setRusherTip] = useState(RUSHER_TIP_1);
  const [otherTip, setOtherTip] = useState(0);

  ///useState flag that toggles the `Other Tip` field
  const [showOtherTip, setShowOtherTip] = useState(false);
  const [replacementOption, setReplacementOption] = useState(REPLACEMENT_0);

  const [selectedTip, setSelectedTip] = useState(RUSHER_TIP_1);

  const cartProducts = [];

  ///Boolean flag that indicates if the `PLACE ORDER` button should be disabled or not
  let isDisabled =
    !state.shipping_address ||
    !state.shipping_address.campus ||
    !state.shipping_address.building ||
    !state.shipping_address.floor_apartment;

  ///Fetch products from emulator and filter products without fields
  const products = useProducts()
    .slice(1)
    .filter((product) => {
      if (product.name && product.images && product.prices && product.id)
        return true;
      else return false;
    });

  ///Set the userState's `shipping_address` field
  state.shipping_address = {
    campus: CAMPUS,
    building: BUILDING,
    floor_apartment: FLOOR,
  };

  /*
   * Iterate through the cart and add to cartProducts the product data from `useProduct`
   * and the quantities from `UserContext`
   */
  if (state.cart && products.length > 0) {
    state.cart.map(({ product_id, quantity }) => {
      const product = products.find((current) => current.id === product_id);

      cartProducts.push({
        name: product.name,
        image: product.images[0],
        price: product.prices[0].unit_amount,
        quantity: quantity,
        tax: product.metadata.tax,
      });
    });
  }

  /*
   * This function will handle the normal tip buttons (not Other Tip)
   */
  function handleTip(tip) {
    setShowOtherTip(false);
    setRusherTip(tip);
  }

  /*
   * This function will handle the input field for Other Tip
   */
  const handleOtherTipChange = (e) => {
    const value = Number(e.target.value.replace(".", "")) / 100;

    ///Return if user is attempting to add an amount over 9 digits (cents included)
    if (otherTip.toString().length > 10 && value > otherTip) {
      return;
    }

    ///Return if user enters the "-" character
    if (e.nativeEvent.data === "-") {
      return;
    } else if (value === "" || !value) {
      setOtherTip(0);
      setRusherTip(0);
    } else {
      setOtherTip(value);
      setRusherTip(value);
    }
  };

  const handleCheckout = async () => {
    alert("checking out");
    const data = await checkout({
      cart: state.cart,
      shippingAddress: state.shipping_address,
      tip: rusherTip,
      message: MESSAGE,
      replacementOption: replacementOption,
    });

    if (data.isSuccess) {
      setStripeClientSecret(data.clientSecret);
      navigate("/checkout/payment");
    }
  };

  return (
    <>
      <header>
        <button className={styles.back}>
          <ArrowBackIosIcon fontSize="large" onClick={() => navigate(-1)} />
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
            <Typography marginBottom={"15px"} sx={headers.header2}>
              Order Summary
            </Typography>
            <Details currentCart={cartProducts} rusherTip={rusherTip} />
          </div>
          <Divider
            sx={{
              width: "100%",
              marginBottom: "25px",
              maxWidth: "610px",
            }}
          />
          <div className={styles.addressBox}>
            <div className={styles.addressLine}>
              <Typography
                fontWeight="700"
                fontFamily="BlinkMacSystemFont"
                variant="h5"
              >
                Address
              </Typography>
              <button className={styles.addressButton}>
                <ArrowForwardIosIcon
                  fontSize="medium"
                  onClick={() => {
                    alert("Address Page");
                  }}
                />
              </button>
            </div>

            <div className={styles.input}>
              <img src={building} alt="" />
              <Typography width={"100%"} variant="h7">
                UCSD Building
              </Typography>

              <div className={styles.grayBox}>
                <Typography width={"100%"} sx={headers.header6} noWrap>
                  {state.shipping_address &&
                    state.shipping_address.building &&
                    state.shipping_address.building}
                </Typography>
              </div>
            </div>
            <div className={styles.input}>
              <img src={stairs} alt="" />
              <Typography width={"100%"} variant="h7">
                Floor / Apartment #
              </Typography>
              <div className={styles.grayBox}>
                <Typography width={"100%"} sx={headers.header6} noWrap>
                  {state.shipping_address &&
                    state.shipping_address.floor_apartment &&
                    state.shipping_address.floor_apartment}
                </Typography>
              </div>
            </div>
            <div className={styles.input}>
              <img src={notes} alt="" />
              <Typography width={"100%"} variant="h7">
                Notes for Rusher
              </Typography>
              <div className={styles.grayBox2}>
                <p className={styles.notesRusher}>{MESSAGE}</p>
              </div>
            </div>

            {(!state.shipping_address ||
              !state.shipping_address.campus ||
              !state.shipping_address.building ||
              !state.shipping_address.floor_apartment) && (
              <div className={styles.noAddress}>
                <Typography
                  width={"100%"}
                  variant="h7"
                  sx={{
                    fontWeight: "600",
                    cursor: "pointer",
                    transitionDuration: "0.1s",
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                  onClick={() => {
                    alert("Address page");
                  }}
                >
                  You haven't set a location yet. Click here to set one!
                </Typography>
              </div>
            )}
          </div>
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
              <Typography
                fontWeight="700"
                fontFamily="BlinkMacSystemFont"
                variant="h5"
              >
                Rusher Tip
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <ButtonGroup
                disableElevation
                variant="contained"
                sx={{ "border-radius": "20px", width: "100%" }}
              >
                <button
                  className={
                    selectedTip === RUSHER_TIP_1
                      ? `${styles.tipButton} ${styles.selected}`
                      : styles.tipButton
                  }
                  onClick={() => {
                    setRusherTip(RUSHER_TIP_1);
                    setShowOtherTip(false);
                    setSelectedTip(RUSHER_TIP_1);
                  }}
                >
                  $1.50
                </button>
                <button
                  className={
                    selectedTip === RUSHER_TIP_2
                      ? `${styles.tipButton} ${styles.selected}`
                      : styles.tipButton
                  }
                  onClick={() => {
                    setRusherTip(RUSHER_TIP_2);
                    setShowOtherTip(false);
                    setSelectedTip(RUSHER_TIP_2);
                  }}
                >
                  $2.00
                </button>
                <button
                  className={
                    selectedTip === RUSHER_TIP_3
                      ? `${styles.tipButton} ${styles.selected}`
                      : styles.tipButton
                  }
                  onClick={() => {
                    setRusherTip(RUSHER_TIP_3);
                    setShowOtherTip(false);
                    setSelectedTip(RUSHER_TIP_3);
                  }}
                >
                  $2.50
                </button>
                <button
                  className={
                    selectedTip === OTHER
                      ? `${styles.tipButton} ${styles.selected}`
                      : styles.tipButton
                  }
                  onClick={() => {
                    setRusherTip(otherTip);
                    setShowOtherTip(true);
                    setSelectedTip(OTHER);
                  }}
                >
                  Other
                </button>
              </ButtonGroup>
            </Grid>
          </Grid>
          {showOtherTip && (
            <div className={styles.otherTipBox}>
              <Typography width={"100%"} variant="h7">
                Other Tip $
              </Typography>
              <TextField
                onChange={handleOtherTipChange}
                value={otherTip.toFixed(2)}
                type={"number"}
                min={MINTIP}
                id="outlined-basic"
                required
                variant="outlined"
                sx={{
                  height: "inherit",
                  backgroundColor: "#EEEEEE",
                  width: "50%",
                  borderRadius: "10px",
                  "@media screen and (max-width: 900px)": {
                    marginRight: "none",
                  },
                }}
              />
            </div>
          )}
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
              <Typography
                fontWeight="700"
                fontFamily="BlinkMacSystemFont"
                variant="h5"
              >
                Replacement Items
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <ButtonGroup
                disableElevation
                variant="contained"
                sx={{ "border-radius": "20px", width: "100%" }}
              >
                <button
                  className={
                    replacementOption === REPLACEMENT_0
                      ? `${styles.replaceButton} ${styles.selected}`
                      : styles.replaceButton
                  }
                  onClick={() => {
                    setReplacementOption(REPLACEMENT_0);
                  }}
                >
                  Pick for me
                </button>
                <button
                  className={
                    replacementOption === REPLACEMENT_1
                      ? `${styles.replaceButton} ${styles.selected}`
                      : styles.replaceButton
                  }
                  onClick={() => {
                    setReplacementOption(REPLACEMENT_1);
                  }}
                >
                  Call me
                </button>
                <button
                  className={
                    replacementOption === REPLACEMENT_2
                      ? `${styles.replaceButton} ${styles.selected}`
                      : styles.replaceButton
                  }
                  onClick={() => {
                    setReplacementOption(REPLACEMENT_2);
                  }}
                >
                  Refund me
                </button>
              </ButtonGroup>
            </Grid>
          </Grid>{" "}
          <div className={styles.bottomButtons}>
            <Button
              onClick={() => {
                navigate(-1);
              }}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "20%",
                minWidth: "130px",
                maxWidth: "420px",
                gap: "0px",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                height: "60px",
                background: "#ff6363",
                borderRadius: "20px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "36px",
                color: "#ffffff",
                border: "none",
                marginBottom: "10px",
                textTransform: "none",
                "&:hover": {
                  color: "#ed3939",
                },
              }}
            >
              <ClearIcon fontSize="large" />
              Cancel
            </Button>
            <Button
              onClick={!isDisabled && handleCheckout}
              sx={[
                {
                  display: "flex",
                  flexDirection: "row",
                  width: "80%",
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
                  "&:hover": { background: "#7141fa" },
                  "@media screen and (max-width: 900px)": {
                    width: "60%",
                    fontSize: "22px",
                  },
                },
                (!state.shipping_address ||
                  !state.shipping_address.campus ||
                  !state.shipping_address.building ||
                  !state.shipping_address.floor_apartment) && {
                  opacity: "0.5",
                  cursor: "none",
                },
              ]}
            >
              <CreditCardIcon fontSize="large" />
              Place Order
            </Button>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default OrderDetails;
