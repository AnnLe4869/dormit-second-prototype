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
import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../context/product/product-handler";

import { UserContext } from "../../../context/user/user-context";

import { getTotal, getTotalCount } from "../../../helper/getTotalsAndFees.js";

import apple from "../../../mock_data/images/apple.jpg";
import styles from "./OrderDetails.module.css";

const RUSHER_TIP_1 = 1.5;
const RUSHER_TIP_2 = 2;
const RUSHER_TIP_3 = 2.5;

const BUILDING = "UCSD Building";
const FLOOR = "1/12";
const NOTES = "Leave it at my door";

const Details = ({currentCart, rusherTip}) => {

  

  return (
    <div className={styles.box}>
      <div className={styles.outerPicture}>
        {currentCart && currentCart.map((item, index)=>{
          if (index < 4) return <img className={styles.images} src={item.image} />
        })}
      </div>
      <div className={styles.details}>
        <Typography fontWeight="700" variant="h6" className={styles.names}>
          {currentCart && currentCart.map((item, index) => {

            if (index < 4){
              return <span className={styles.name}>{item.name}</span>
            }

            if (index === 4 && currentCart.length > 4){
              return "..."

            }

          })}
        </Typography>
        <div className={styles.row}>
          <Typography fontWeight="500" variant="h6">
            Item Count
          </Typography>
          <Typography fontWeight="500" variant="h6">
            {getTotalCount(currentCart)}
          </Typography>
        </div>
        <div className={styles.row}>
          <Typography fontWeight="500" variant="h6">
            Total
          </Typography>
          <Typography fontWeight="500" variant="h6">
            ${getTotal(currentCart) + rusherTip}
          </Typography>
        </div>
      </div>
    </div>
  );
};

const OrderDetails = () => {

  const cartProducts = [];
  const cartProductsQuantities = [];

  const navigate = useNavigate();
  const { state } = useContext(UserContext);

  const otherTipRef = useRef("");

  const [rusherTip, setRusherTip] = useState(0);
  const [showOtherTip, setShowOtherTip] = useState(false);
  const [otherTip, setOtherTip] = useState("");

  /*
  object = {
    price: ,
    quantity: ,
    tax: ,
  }

  */

  const products = useProducts().slice(1).filter((product) => {
    if (product.name && product.images && product.prices && product.id) return true;
    else return false;
  });

  console.log("products: ", products)
  console.log("cart: ", state.cart);

  if (state.cart && products.length > 0){
    state.cart.map(({ product_id, quantity }) => {
      const product = products.find((current) => current.id === product_id);

      cartProductsQuantities.push({
        name: product.name,
        image: product.images[0],
        price: product.prices[0].unit_amount,
        quantity: quantity,
        tax: product.metadata.tax
      });

      cartProducts.push(product);
    });
  }

  //Print the state.cart (prod_id, quantity)
  if (state.cart) {
    console.log("Count: ", getTotalCount(state.cart));
  }

  //Print the combined cartProductQuantites and total price
  if (cartProductsQuantities.length > 0){
    console.log("cartProductsQuantities: ", cartProductsQuantities);
    console.log("Total: ", getTotal(cartProductsQuantities))
  }

  function handleTip(tip){
    console.log("other tip: ", tip)
    setShowOtherTip(false);
    setRusherTip(tip);
  }

  useEffect(() => {
    console.log("otherTip: ", otherTip)
  }, [otherTip])


  useEffect(() => {
    console.log("rusherTip: ", rusherTip)
  }, [rusherTip])

  useEffect(() => {
    console.log("UserContext state: ", state);
  }, [state])


  return (
    <>
      <header>
        <button className={styles.back}>
          <ArrowBackIosIcon fontSize="large" onClick={() => navigate(-1)}/>
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
            <Details currentCart={cartProductsQuantities} rusherTip={rusherTip}/>
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
                value="UCSD Building"
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
                readOnly
                id="outlined-basic"
                required
                value="floor"
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
                value="Leave it at my door"
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
                <button className={styles.tipButton} onClick={() => handleTip(RUSHER_TIP_1)}>$1.50</button>
                <button className={styles.tipButton} onClick={() => handleTip(RUSHER_TIP_2)}>$2.00</button>
                <button className={styles.tipButton} onClick={() => handleTip(RUSHER_TIP_3)}>$2.50</button>
                <button className={styles.tipButton} onClick={() => setShowOtherTip(true)}>Other</button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <h2>Rusher Other Tip: {otherTip}</h2>
          {showOtherTip && 
            <div className={styles.otherTipBox}>
            <Typography width={"100%"} variant="body1">
              Other Tip
            </Typography>
            <TextField
              onChange={() => {
                setOtherTip(otherTipRef.current.value)
                setRusherTip(otherTip)
              }}
              inputRef={otherTipRef}
              type={"number"}
              id="outlined-basic"
              required
              variant="outlined"
              sx={{
                height: "inherit",
                backgroundColor: "#EEEEEE",
                width: "50%",
                "@media screen and (max-width: 900px)": {
                  marginRight: "none"
                },
              }}
            />
            </div>
          
          }
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
