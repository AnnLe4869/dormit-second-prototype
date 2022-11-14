import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productList from "../../../mock_data/data/PRODUCT_MOCK_DATA.json";

import { Container } from "@mui/system";
import {
  Box,
  Button,
  Divider,
  StepLabel,
  Stepper,
  Step,
  Typography,
  StepConnector,
  stepConnectorClasses,
} from "@mui/material";
import apple from "../../../mock_data/images/apple.jpg";
import { styled } from "@mui/material/styles";
import msgIcon from "../../../mock_data/images/msgIcon.png";
import PhoneIcon from "../../../mock_data/images/PhoneIcon.png";
import {ReactComponent as LeftArrow} from "../../../assets/Order/leftarrow.svg"
import {ReactComponent as Flag} from "../../../assets/Order/flag.svg"

import { UserContext } from "../../../context/user/user-context";
import { useProducts } from "../../../context/product/product-handler";
import OrderItem from "./OrderItem";
import { convertToDollar } from "../../../helper/convertToDollar";

const order1 = {
  products: [productList[23], productList[24], productList[25]],
};

const steps = ["Placed", "Picking Up", "On the Way", "Received"];


function Order() {
  const { state } = useContext(UserContext);
  const { current_orders } = state;
  const { orderId } = useParams();
  const products = useProducts();
  const [selectedOrder, setSelectedOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedOrder(current_orders ? (current_orders).filter(order => order.id === orderId)[0] : []);
  }, [current_orders]);

  const selectedOrderItems = [];
  let itemNumber = 1;
  selectedOrder.items?.map(({ product_id, quantity }) => {
    const product = products.find(({ id }) => id === product_id);
    const productComponent = (
      <OrderItem
        key={product.id}
        number={itemNumber}
        price={product.prices[0].unit_amount}
        taxRate={parseFloat(product.metadata.tax) / 100}
        desc={product.description}
        name={product.name}
        photo={product.images}
        quantity={parseInt(quantity)}
      />
    );
    selectedOrderItems.push(productComponent)
    itemNumber++
  })

  const getSubTotal = () => {
    let subTotal = 0;
    selectedOrderItems?.forEach((item) => {
      subTotal += item.props.price * item.props.quantity;
    });
    return subTotal;
  };

  const getTax = () => {
    let taxTotal = 0;
    selectedOrderItems?.forEach((item) => {
      taxTotal += item.props.price * item.props.quantity * item.props.taxRate;
    });
    return Math.round(taxTotal);
  };

  const getDeliveryFee = () => {
    const shippingFee = products.find((item) => item.id === "shipping_fee");
    return parseFloat(shippingFee?.price);
  };

  const getTotal = () => {
    return getSubTotal() + getTax() + getDeliveryFee();
  };

  const getTotalCount = () => {
    let count = 0;
    selectedOrderItems?.forEach((element) => {
      count += element.props.quantity;
    });
    return count;
  };

  return (
    <Box sx={{ paddingBottom: "100px" }}>
      <Box
        sx={{
          display: "flex",
          margin: "30px 25px 20px 25px",
          gap: "15px",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      > 
        <Box
          onClick={() => navigate('../../order')}
        >
          <LeftArrow />
        </Box>
        <Typography 
          variant="Mobile Title 1"
          sx={{
            fontWeight: "500",
            fontSize: "28px",
            width: "390px"
          }}
        >
          In Progress
        </Typography>
      </Box>
      {/* Current order details */}
      <Divider
        sx={{ borderBottomWidth: "4px", width: "100%" }}
      />

      <Container maxWidth="sm" sx={{padding: "0 25px"}}>
        {/* Order */}
        <Box 
          sx={{ 
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Poppins",
            padding: "25px 0 0 0"
        }}>
          <Typography
            sx={{
              fontWeight: "600",
              color: "#586DD0",
              fontSize: "22px"
            }}
          >
            {`#${selectedOrder.id && (selectedOrder.id).substring(3, 9)} (${selectedOrderItems.length} items)`}
          </Typography>
          <Box
            sx={{
              // position: "absolute"
            }}
          >
            <Flag />
          </Box>
        </Box>
        <Typography 
          variant="body1"
          fontSize="large" 
          sx={{ 
            my: "10px",
            fontFamily: "Poppins",
            color: "#586DD0",
            fontWeight: "600",
            fontSize: "16px"
        }}>
          <b style={{color: "#000000"}}>Order Confirmed •</b> <span style={{fontWeight: "400"}}>Searching </span>Rusher
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            my: "20px",
            padding: "0 10px",
            gap: "10px",
          }}
        >
          {selectedOrderItems.map((item) => {
            return item;
          })}
        </Box>
        {/* Completed order information */}
        <Box>
          {/* Totals */}
          <Divider
            flexItem="true"
            light="false"
            variant="fullWidth"
            sx={{ borderBottomWidth: "2px", my: "15px" }}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              color: "#686868",
              marginBottom: "10px"
            }}
          >
            <Typography 
              sx={{
                color: "#686868",
                fontFamily: "Inter",
                fontWeight: "600",
                fontSize: "22px"
              }}>
              Order Summary
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
            <Typography variant="subtitle1" color="#686868">
              Subtotal
            </Typography>
            <Typography variant="subtitle1" color="#686868">
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
            <Typography variant="subtitle1" color="#686868">
              Tax
            </Typography>
            <Typography variant="subtitle1" color="#686868">
              ${convertToDollar(getTax())}
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
            <Typography variant="subtitle1" color="#686868">
              Delivery
            </Typography>
            <Typography variant="subtitle1" color="#686868">
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
            <Typography variant="subtitle1" color="#686868">
              Rusher Tip
            </Typography>
            <Typography variant="subtitle1" color="#686868">
              $1.95
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
            <Typography variant="subtitle1" color="#000000">
              Total
            </Typography>
            <Typography variant="subtitle1" color="#000000">
              ${convertToDollar(getTotal())}
            </Typography>
          </Box>

          {/* Address */}
          <Divider
            flexItem="true"
            light="false"
            variant="fullWidth"
            sx={{ borderBottomWidth: "2px", my: "15px" }}
          />
          <Typography variant="h6" fontWeight="bold" sx={{ mb: "10px" }}>
            Address
          </Typography>
          <Typography variant="subtitle1" color="#686868">
            Black Hall 1234 <br />
            UC San Diego
          </Typography>
        </Box>
        {/* Rusher info */}
        <Divider
          flexItem="true"
          light="false"
          variant="fullWidth"
          sx={{ borderBottomWidth: "2px", my: "15px" }}
        />
        <Typography variant="h6" fontWeight="bold" sx={{ mb: "10px" }}>
          Rusher
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            my: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img alt="Apple" width="60px" src={apple} />
            <Typography variant="body1" fontSize="larger">
              Rusher
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Button>
              <img alt="Phone Icon" src={PhoneIcon} />
            </Button>
            <Button>
              <img alt="Message Icon" src={msgIcon} />
            </Button>
          </Box>
        </Box>
        <Divider
          flexItem="true"
          light="false"
          variant="fullWidth"
          sx={{ borderBottomWidth: "2px", my: "15px" }}
        />

        <Box
          sx={{
            marginY: "40px",
          }}
        >
          <Button
            disableRipple
            variant="contained"
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
          >
            Reorder
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Order;
