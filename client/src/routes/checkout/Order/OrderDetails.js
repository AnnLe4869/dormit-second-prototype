import {ReactComponent as LeftArrowIcon} from '../../../assets/Checkout/leftarrow.svg'
import {ReactComponent as RightArrowIcon} from '../../../assets/Checkout/rightarrow.svg'
import {ReactComponent as AddressIcon} from '../../../assets/Checkout/address.svg'
import CreditCardIcon from "@mui/icons-material/CreditCard";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Grid,
  TextField,
  ToggleButton,
  Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../context/product/product-handler";
import { useCheckout } from "../../../context/user/checkout-handler";
import { UserContext } from "../../../context/user/user-context";

import styles from "./OrderDetails.module.css";
import { buttonSelector } from './muiStyles';

import Details from "./Details";

const RUSHER_TIP_1 = 1.5;
const RUSHER_TIP_2 = 2;
const RUSHER_TIP_3 = 2.5;
const OTHER = 0;
const MINTIP = 0;

const REPLACEMENT_0 = 0;
const REPLACEMENT_1 = 1;
const REPLACEMENT_2 = 2;


const OrderDetails = ({ setStripeClientSecret }) => {
  const navigate = useNavigate();
  const checkout = useCheckout();
  const { state: user } = useContext(UserContext);

  const [rusherTip, setRusherTip] = useState(RUSHER_TIP_1);
  const [otherTip, setOtherTip] = useState(0);

  ///useState flag that toggles the `Other Tip` field
  const [showOtherTip, setShowOtherTip] = useState(false);
  const [replacementOption, setReplacementOption] = useState(REPLACEMENT_0);

  const [selectedTip, setSelectedTip] = useState(RUSHER_TIP_1);

  const cartProducts = [];

  ///Boolean flag that indicates if the `PLACE ORDER` button should be disabled or not
  let isDisabled =
    !user.shipping_address ||
    !user.shipping_address.campus ||
    !user.shipping_address.building ||
    !user.shipping_address.floor_apartment;

  ///Fetch products from emulator and filter products without fields
  const products = useProducts()
    .slice(1)
    .filter((product) => {
      if (product.name && product.images && product.prices && product.id)
        return true;
      else return false;
    });

  /*
   * Iterate through the cart and add to cartProducts the product data from `useProduct`
   * and the quantities from `UserContext`
   */
  if (user.cart && products.length > 0) {
    user.cart.map(({ product_id, quantity }) => {
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
    // alert("checking out");
    const data = await checkout({
      cart: user.cart,
      shippingAddress: user.shipping_address,
      tip: rusherTip,
      message: user.message,
      replacementOption: replacementOption,
    });

    if (data.isSuccess) {
      setStripeClientSecret(data.clientSecret);
      navigate("/checkout/payment");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "30px 20px 15px 20px",
          gap: "20px"
        }}
      >
          <LeftArrowIcon fontSize="large" onClick={() => navigate(-1)} />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "28px",
              fontWeight: "500"
            }}
          > 
            Order Details 
          </Typography>
      </Box>

      <Container sx={{padding: "0 20px"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Details currentCart={cartProducts} rusherTip={rusherTip} />
          <Divider
            sx={{
              width: "100%",
              marginBottom: "15px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 10px",
              width: "100%",
              marginBottom: "15px",
            }}
          >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px"
                }}
              >
                <AddressIcon/>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "700"
                    }}
                  >
                    {user.shipping_address ? `${user.shipping_address.campus} ${user.shipping_address.building}` : 'Campus Building'}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "15px",
                      fontWeight: "400"
                    }}
                  >
                    {user.shipping_address.floor_apartment ? `${user.shipping_address.floor_apartment}` : 'Floor / Apartment #'}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <RightArrowIcon
                  fontSize="medium"
                  onClick={() => {
                    alert("Address Page");
                  }}
                />
              </Box>
          </Box>
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
                sx={{
                  fontWeight: "700",
                  fontFamily: "Inter",
                  fontSize: "16px"
                }}
              >
                Rusher Tip
              </Typography>
            </Grid>
              <Box
                sx={buttonSelector.buttonGroup}
              >
                <ToggleButton
                  selected={selectedTip === RUSHER_TIP_1}
                  sx={buttonSelector.tipButton}
                  onClick={() => {
                    setRusherTip(RUSHER_TIP_1);
                    setShowOtherTip(false);
                    setSelectedTip(RUSHER_TIP_1);
                  }}
                >
                  $1.50
                </ToggleButton>
                <ToggleButton
                  selected={selectedTip === RUSHER_TIP_2}
                  sx={buttonSelector.tipButton}
                  onClick={() => {
                    setRusherTip(RUSHER_TIP_2);
                    setShowOtherTip(false);
                    setSelectedTip(RUSHER_TIP_2);
                  }}
                >
                  $2.00
                </ToggleButton>
                <ToggleButton
                  selected={selectedTip === RUSHER_TIP_3}
                  sx={buttonSelector.tipButton}
                  onClick={() => {
                    setRusherTip(RUSHER_TIP_3);
                    setShowOtherTip(false);
                    setSelectedTip(RUSHER_TIP_3);
                  }}
                >
                  $2.50
                </ToggleButton>
                <ToggleButton
                  selected={selectedTip === OTHER}
                  sx={buttonSelector.tipButton}
                  onClick={() => {
                    setRusherTip(otherTip);
                    setShowOtherTip(true);
                    setSelectedTip(OTHER);
                  }}
                >
                  Other
                </ToggleButton>
              </Box>
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
                sx={{
                  fontWeight: "700",
                  fontFamily: "Inter",
                  fontSize: "16px"
                }}
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
              onClick={!isDisabled ? handleCheckout : undefined}
              sx={[
                {
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
                  "&:hover": { background: "#7141fa" },
                  "@media screen and (max-width: 900px)": {
                    width: "100%",
                    fontSize: "22px",
                  },
                },
                (!user.shipping_address ||
                  !user.shipping_address.campus ||
                  !user.shipping_address.building ||
                  !user.shipping_address.floor_apartment) && {
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
