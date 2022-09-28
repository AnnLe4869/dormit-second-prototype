// React imports
import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Component import
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import CartItem from "./CartItem";
import { useProducts } from "../../context/product/product-handler";
import OrderDetails from "../../routes/checkout/Order/OrderDetails";
import { convertToDollar } from "../../helper/convertToDollar";

// Style import
import styles from "./Cart.module.css";

// Image import
import { UserContext } from "../../context/user/user-context";
import { mockProducts } from "../../mock_data/data/mockData";
import apple from "../../mock_data/images/apple.jpg";

const Cart = ({ handleDrawerClose }) => {
  const mockSuggestion = ["mock", "mock", "mock", "mock", "mock", "mock"];
  const { state } = useContext(UserContext);

  const cartItems = [];
  const products = useProducts();

  const navigate = useNavigate();

  state.cart.map(({ product_id, quantity }) => {
    const product = products.find(({ id }) => id === product_id);
    const productComponent = (
      <CartItem
        key={product.id}
        desc={product.description}
        price={product.prices[0].unit_amount}
        taxRate={parseFloat(product.metadata.tax) / 100}
        name={product.name}
        id={product.id}
        photo={apple}
        quantity={parseInt(quantity)}
      />
    );
    cartItems.push(productComponent);
  });

  const getSubTotal = () => {
    let subTotal = 0;
    cartItems.forEach((item) => {
      subTotal += item.props.price * item.props.quantity;
    });
    return subTotal;
  };

  const getTax = () => {
    let taxTotal = 0;
    cartItems.forEach((item) => {
      taxTotal += item.props.price * item.props.quantity * item.props.taxRate;
    });
    return Math.round(taxTotal);
  };

  const getDeliveryFee = () => {
    const shippingFee = products.find((item) => item.id === "shipping_fee");
    return parseFloat(shippingFee.price);
  };

  const getTotal = () => {
    return getSubTotal() + getTax() + getDeliveryFee();
  };

  const getTotalCount = () => {
    let count = 0;
    cartItems.forEach((element) => {
      count += element.props.quantity;
    });
    return count;
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
          {cartItems.map((item) => {
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
          <Typography variant="h6">
            ${convertToDollar(getSubTotal())}
          </Typography>
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
          <Typography variant="h6">${convertToDollar(getTax())}</Typography>
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
          <Typography variant="h6">
            ${convertToDollar(getDeliveryFee())}
          </Typography>
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
          <Typography variant="h6">${convertToDollar(getTotal())}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => navigate("/checkout/order")}
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
            <div>{getTotalCount()} items</div>
            <div>Review Order</div>
            <div>${convertToDollar(getTotal())}</div>
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
