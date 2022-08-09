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
} from "@mui/material";
import apple from "../../../mock_data/images/apple.jpg";
import msgIcon from "../../../mock_data/images/msgIcon.png";
import PhoneIcon from "../../../mock_data/images/PhoneIcon.png";

const steps = ["Placed", "Picking Up", "On the Way", "Received"];

function Order() {
  const order1 = {
    products: [productList[23], productList[24], productList[25]],
    status: "current",
  };

  console.log(order1);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          marginY: "20px",
          gap: "25px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">In Progress</Typography>
      </Box>
      {/* Current order details */}
      <Divider
        flexItem="true"
        light="false"
        variant="fullWidth"
        sx={{ borderBottomWidth: "4px" }}
      />

      <Container maxWidth="sm">
        {/* Order */}
        <Typography variant="body1" fontSize="large" sx={{ my: "20px" }}>
          <b>Current</b> • Arriving in <b>4 minutes</b>
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
              <img width="100px" src={apple} />
              <Typography variant="body1" fontSize="larger">
                <b>1x</b> {product.name}
              </Typography>
            </Box>
          ))}
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
            <img width="60px" src={apple} />
            <Typography variant="body1" fontSize="larger">
              Adam's Apple
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Button>
              <img src={PhoneIcon} />
            </Button>
            <Button>
              <img src={msgIcon} />
            </Button>
          </Box>
        </Box>

        <Divider
          flexItem="true"
          light="false"
          variant="fullWidth"
          sx={{ borderBottomWidth: "2px", my: "15px" }}
        />

        <Box sx={{ display: "flex", gap: "20px", flexDirection: "column" }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: "10px" }}>
            Delivery Progress
          </Typography>
          <Stepper
            sx={{
              width: "100%",
              "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
                borderColor: "#7141FA",
              },
              "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
                borderColor: "#7141FA",
              },
              "& .MuiStepConnector-line": {
                borderTopWidth: "5px",
              },
            }}
            activeStep={1}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Container>
    </Container>
  );
}

export default Order;
