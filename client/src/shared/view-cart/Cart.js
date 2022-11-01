// React imports
import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Component import
import CloseIcon from "@mui/icons-material/Close";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import CartItem from "./CartItem";
import { useProducts } from "../../context/product/product-handler";
import { getProducts } from "../../helper/getProductsCategories";
import OrderDetails from "../../routes/checkout/Order/OrderDetails";
import { convertToDollar } from "../../helper/convertToDollar";
import SuggestedSections from "./SuggestedSections";

// Style import
import styles from "./Cart.module.css";
import { cartPageStyles } from "./muiStyles";

// Data import
import { cartSections } from "./sections/cartSections";

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
  
  // if users click the 'View Cart' button before product data fully loaded, website will break without this if statement
  if(!products.length) {
    return (
      <h3>Loading...</h3>
    )
  }

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
        photo={product.images}
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
    <Box sx={{
      height: "96vh",
      overflow: "auto",
    }}>
      <Box
        sx={{
          position: "sticky",
          top: "0",
          width: "100%",
          backgroundColor: "#FFFFFF",
          zIndex: "999"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "30px 15px 10px 25px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={cartPageStyles.cartHeading}
            variant="Mobile Title 1"
          >
            My Cart
          </Typography>
          <Button
            sx={{
              width: "35px",
              height: "35px",
              minWidth: "0",
              minHeight: "0",
              border: "0",
              color: "#000000",
            }}
            onClick={handleDrawerClose}
          >
            <CloseIcon sx={{fontSize: "35px"}}/>
          </Button>
        </Box>
        <Divider
          dark
          sx={{
            "margin-bottom": "15px",
            color: "black",
            borderBottomWidth: 5,
          }}
        />
      </Box>
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
        <Typography 
          sx={{
            fontSize: "32px", 
            fontFamily: "Poppins",
            fontWeight: "500",
            "@media screen and (max-width: 575px)": {fontSize: "22px"}
          }} 
          margin={"35px 0 10px 0"} 
          variant="h2"
        >
          Promotion Code
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            boxSizing: "border-box",
            background: "#ffffff",
            border: "2px solid #c4c4c4",
            borderRadius: "10px",
            alignSelf: "flex-start",
            width: "100%",
            height: "70px",
            marginBottom: "40px",
            "@media screen and (max-width: 575px)": {height: "42px"}
          }}
        >
          <input
            type="text"
            className={styles.promotionInput}
            placeholder="3 Promotions available"
          ></input>
          <Button
            sx={{
              textTransform: 'none',
              fontFamily: "Inter",
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              color: "#7140fa",
              borderLeft: "2px solid #c4c4c4",
              borderRight: "none",
              borderTop: "none",
              borderBottom: "none",
              background: "none",
              borderRadius: "0",
              width: "35%",
              maxWidth: "129px",
              height: "66px",
              justifyContent: "center",
              alignSelf: "flex-end",
              padding: "0 0 0 10px",
              "@media screen and (max-width: 575px)": {height: "40px"}

            }}
          >
            View All <NavigateNextIcon />
          </Button>
        </Box>
        <Typography 
          sx={{
            fontSize: "32px", 
            fontFamily: "Poppins",
            fontWeight: "500",
            "@media screen and (max-width: 575px)": {fontSize: "22px"}
          }} 
          marginBottom={"8px"} 
          variant="h2">
          Order Summary
        </Typography>
        <Divider
        dark
          sx={{
            "margin-bottom": "10px",
            color: "black",
            borderBottomWidth: 2
          }}
        />
        <Box
          sx={{
            width: "100%",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            color: "#686868",
          }}
        >
          <Typography sx ={{fontFamily: "Inter"}} variant="Mobile Body">Subtotal</Typography>
          <Typography sx ={{fontFamily: "Inter"}} variant="Mobile Body">
            ${convertToDollar(getSubTotal())}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            color: "#686868",
          }}
        >
          <Typography sx ={{fontFamily: "Inter"}} variant="Mobile Body">Tax</Typography>
          <Typography sx ={{fontFamily: "Inter"}} variant="Mobile Body">${convertToDollar(getTax())}</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            color: "#686868",
          }}
        >
          <Typography sx ={{fontFamily: "Inter"}} variant="Mobile Body">Delivery</Typography>
          <Typography sx ={{fontFamily: "Inter"}} variant="Mobile Body">
            ${convertToDollar(getDeliveryFee())}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            color: "#686868",
          }}
        >
          <Typography sx ={{fontFamily: "Inter", fontWeight: "800", color: "#000000"}} variant="Mobile Body">Total</Typography>
          <Typography sx ={{fontFamily: "Inter", fontWeight: "800", color: "#000000"}} variant="Mobile Body">${convertToDollar(getTotal()).toFixed(2)}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => navigate("/checkout/address")}
            sx={{
              marginBottom: "30px",
              width: "313px",
              height: "60px",
              background: "#7141fa",
              borderRadius: "20px",
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
            <Typography
              sx={{
                textTransform: 'none',
                fontWeight: "700",
                fontSize: "16px",
                fontFamily: "Poppins",
                lineHeight: "24px",
              }}
              variant="Mobile Callout"
            >
              {getTotalCount()} items
            </Typography>
            <Typography
              sx={{
                textTransform: 'none',
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "21px",
                fontFamily: "Inter",
                fontStyle: "normal",
                display: "flex",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              Review Order
            </Typography>
            <Typography
              sx={{
                textTransform: 'none',
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "24px",
                fontFamily: "Poppins"
              }}
              variant="Mobile Callout"
            >
              ${convertToDollar(getTotal()).toFixed(2)}
            </Typography>
          </Button>
        </Box>
        
          {cartSections.map(section => (
            <SuggestedSections section={section} products = {getProducts(products)} />
          ))}
      </Container>
    </Box>
  );
};

export default Cart;
