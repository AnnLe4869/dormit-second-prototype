import React from "react";
import productList from "../../../mock_data/data/PRODUCT_MOCK_DATA.json";

import OrderView from "../OrderView/OrderView";
import { Container } from "@mui/system";
import { Box, Typography } from "@mui/material";

function Past() {
  const order1 = { products: [productList[23]], status: "completed" };
  const order2 = { products: [productList[33]], status: "completed" };
  const order3 = { products: [productList[43]], status: "completed" };
  const order4 = { products: [productList[13]], status: "completed" };

  const fetchedOrders = [order1, order2, order3, order4];

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "50px auto",
          maxWidth: "600px",
          gap: "40px",
        }}
      >
        {/* all past orders with the products in the props */}
        <Typography variant="h4">Completed</Typography>
        {fetchedOrders.map((order, index) => (
          <OrderView key={index} order={order} />
        ))}
      </Box>
    </Container>
  );
}

export default Past;
