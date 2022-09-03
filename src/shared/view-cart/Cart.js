// React imports
import { React, useContext, useState } from "react";

// Component import
import {
  Drawer,
  ImageList,
  ImageListItem,
  Divider,
  Box,
  Container,
  Button,
  Typography,
} from "@mui/material";
import CartItem from "./CartItem";
import ItemEntry from "../product/ProductListing";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

// Style import
import styles from "./Cart.module.css";

// Image import
import apple from "../../mock_data/images/apple.jpg";
import { UserContext } from "../../context/user/user-context";
import { mockProducts } from "../../mock_data/data/mockData";

const Cart = ({ handleDrawerClose }) => {
  const mockSuggestion = ["mock", "mock", "mock", "mock", "mock", "mock"];
  const { state } = useContext(UserContext);

  const mockCartItems = [];

  state.cart.map(({ product_id, quantity }) => {
    const product = mockProducts.find(({ id }) => id === product_id);

    const productComponent = (
      <CartItem
        key={product.id}
        desc={product.description}
        price={2}
        name={product.name}
        id={product.id}
        photo={apple}
        quantity={quantity}
      />
    );
    mockCartItems.push(productComponent);
  });

  const getSubTotal = () => {
    let total = 0;
    mockCartItems.forEach((element) => {
      total += element.props.price * element.props.quantity;
    });
    return <div>${total}</div>;
  };

  const getTax = () => {
    let total = 0;
    mockCartItems.forEach((element) => {
      total += element.props.price * element.props.quantity;
    });
    let tax = total * 0.07;
    return <div>${tax}</div>;
  };

  const getTotal = () => {
    let subTotal = 0;
    mockCartItems.forEach((element) => {
      subTotal += element.props.price * element.props.quantity;
    });
    let tax = subTotal * 0.07;
    let total = subTotal + tax + 1.95;
    return <div>${total}</div>;
  };

  const getTotalCount = () => {
    let count = 0;
    mockCartItems.forEach((element) => {
      count += element.props.quantity;
    });
    return <div>{count} Items</div>;
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingY: "10px",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            margin: "0 auto",
          }}
          variant="h2"
        >
          My Cart
        </Typography>
        <Button
          sx={{
            width: "35px",
            height: "35px",
            minWidth: "0",
            position: "absolute",
            right: "0",
            minHeight: "0",
            border: "0",
            backgroundColor: "white",
            color: "#7141FA",
            marginX: "20px",
          }}
          onClick={handleDrawerClose}
        >
          <CloseIcon />
        </Button>
      </Box>
      <Divider
        dark
        sx={{
          "margin-bottom": "25px",
          color: "black",
        }}
      />
      <Container maxWidth="md">
        <Box
          sx={{
            width: "100%",
            marginBottom: "30px",
          }}
        >
          {mockCartItems.map((item) => {
            return item;
          })}
        </Box>
        <Typography marginBottom={"10px"} variant="h2">
          Promotion Code
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "space-between",
            boxSizing: "border-box",
            background: "#ffffff",
            border: "2px solid #c4c4c4",
            borderRadius: "16px",
            alignSelf: "flex-start",
            width: "100%",
            height: "60px",
            marginBottom: "30px",
          }}
        >
          <input
            type="text"
            className={styles.promotionInput}
            placeholder="3 Promotions available"
          ></input>
          <Button
            sx={{
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              color: "#7140fa",
              borderLeft: "2px solid #c4c4c4",
              borderRight: "none",
              borderTop: "none",
              borderBottom: "none",
              background: "none",
              width: "40%",
              maxWidth: "129px",
              height: "inherit",
              justifyContent: "space-evenly",
              alignSelf: "flex-end",
            }}
          >
            View All <NavigateNextIcon />
          </Button>
        </Box>
        <Typography marginBottom={"10px"} variant="h2">
          Order Summary
        </Typography>
        <Box
          sx={{
            width: "100%",
            marginBottom: "10px",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            color: "#686868",
          }}
        >
          <Typography variant="h6">Subtotal</Typography>
          <Typography variant="h6">{getSubTotal()}</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            marginBottom: "10px",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            color: "#686868",
          }}
        >
          <Typography variant="h6">Tax</Typography>
          <Typography variant="h6">{getTax()}</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            marginBottom: "10px",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            color: "#686868",
          }}
        >
          <Typography variant="h6">Delivery</Typography>
          <Typography variant="h6">$1.95</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            marginBottom: "10px",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            color: "#686868",
          }}
        >
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">{getTotal()}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              marginBottom: "30px",
              width: "100%",
              maxWidth: "380px",
              height: "60px",
              background: "#7141fa",
              borderRadius: "30px",
              border: "none",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
              color: "#ffffff",
              marginTop: "20px",
              ":hover": {
                backgroundColor: "#7141fa",
              },
            }}
          >
            <div>{getTotalCount()}</div>
            <div>Review Order</div>
            <div>{getTotal()}</div>
          </Button>
        </Box>

        {/* Quick snacks */}
        <Box>
          <Typography variant="h4">Quick Snacks</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginY: "30px",
              gap: "10px",
            }}
          >
            {mockSuggestion.map((val) => (
              <img
                style={{
                  height: "150px",
                  width: "150px",
                  backgroundColor: "#C4C4C4",
                  borderRadius: "16px",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Essentials */}
        <Box>
          <Typography variant="h4">Essentials</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginY: "30px",
              gap: "10px",
            }}
          >
            {mockSuggestion.map((val) => (
              <img
                style={{
                  height: "150px",
                  width: "150px",
                  backgroundColor: "#C4C4C4",
                  borderRadius: "16px",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Deals */}
        <Box>
          <Typography variant="h4">Deals</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginY: "30px",
              gap: "10px",
            }}
          >
            {mockSuggestion.map((val) => (
              <img
                style={{
                  height: "150px",
                  width: "150px",
                  backgroundColor: "#C4C4C4",
                  borderRadius: "16px",
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Cart;
