import React, { useContext, useEffect, useState } from "react";
import productList from "../../../mock_data/data/PRODUCT_MOCK_DATA.json";

import OrderView from "../OrderView/OrderView";
import { Container } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import { UserContext } from "../../../context/user/user-context";
import { useInitializeAllOrders } from "../../../context/user/order-handler";

function Current() {
  const { state } = useContext(UserContext);
  const initializeOrders = useInitializeAllOrders();
  const [orderCount, setOrderCount] = useState(3);

  useEffect(() => {
    if (state.isAuthenticated) {
      initializeOrders();
    }
  }, [state.isAuthenticated]);

  const buttonHandler = (setOrderCount, orderCount) => {
    setOrderCount(orderCount + 3);
  };

  const fetchedOrders = state?.current_orders;
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
        {fetchedOrders ? (
          <>
            {/* all past orders with the products in the props */}
            <Typography variant="h4">Current</Typography>
            {fetchedOrders?.slice(0, orderCount).map((order, index) => (
              <OrderView status={"current"} key={index} order={order} />
            ))}
          </>
        ) : (
          <Typography variant="h3">Loading...</Typography>
        )}

        {fetchedOrders?.length > orderCount ? (
          <Button
            sx={{
              color: "#7A7A7A",
              backgroundColor: "#EEEEEE",
              borderRadius: 30,
              fontWeight: 600,
              py: 1,
            }}
            onClick={() => buttonHandler(setOrderCount, orderCount)}
          >
            Load More
          </Button>
        ) : null}
      </Box>
    </Container>
  );
}

export default Current;
