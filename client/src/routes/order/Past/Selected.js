import React from "react";
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

const order1 = {
  products: [productList[23], productList[24], productList[25]],
};

const steps = ["Placed", "Picking Up", "On the Way", "Received"];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 9,
    left: "calc(-50% + 7px)",
    right: "calc(50% + 7px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#7141FA",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#7141FA",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#F5F5F5",
    borderTopWidth: 8,
    borderRadius: 5,
  },
}));

function Order() {
  return (
    <Container sx={{ paddingBottom: "50px" }}>
      <Box
        sx={{
          display: "flex",
          marginY: "20px",
          gap: "25px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Order Details</Typography>
      </Box>
      {/* Current order details */}
      <Divider
        flex="true"
        light={false}
        variant="fullWidth"
        sx={{ borderBottomWidth: "4px" }}
      />

      <Container maxWidth="sm">
        {/* Order */}
        <Typography variant="body1" fontSize="large" sx={{ my: "20px" }}>
          <b>Complete</b> • March 22 at 08:05 pm
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            my: "20px",
            gap: "10px",
          }}
        >
          {order1.products.map((product, index) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img alt="Apple" width="100px" src={apple} />
              <Typography variant="body1" fontSize="larger">
                <b>1x</b> {product.name}
              </Typography>
            </Box>
          ))}
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
              $1.00
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
              $1.00
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
              $1.00
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
              Adam's Apple
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
    </Container>
  );
}

export default Order;
