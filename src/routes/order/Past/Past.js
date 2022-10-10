import React, { useContext, useEffect, useState } from "react";
import productList from "../../../mock_data/data/PRODUCT_MOCK_DATA.json";

import OrderView from "../OrderView/OrderView";
import { Container } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import { UserContext } from "../../../context/user/user-context";
import { useGetAllPastOrders } from "../../../context/user/order-handler";

function Past() {
  const { state } = useContext(UserContext);
  const initializePast = useGetAllPastOrders();
  const [orderCount, setOrderCount] = useState(3);

  useEffect(() => {
    if (state.isAuthenticated) {
      initializePast();
    }
  }, [state.isAuthenticated]);

  const buttonHandler = (setOrderCount, orderCount) => {
    setOrderCount(orderCount + 3);
  };

  const fetchedOrders = state?.pastOrders;
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "50px auto",
          marginBottom: 12,
          maxWidth: "600px",
          gap: "40px",
        }}
      >
        {fetchedOrders ? (
          <>
            <Typography variant="h4">Completed</Typography>
            {fetchedOrders?.slice(0, orderCount).map((order, index) => (
              <OrderView status={"completed"} key={index} order={order} />
            ))}
          </>
        ) : (
          <Typography variant="h3">Loading...</Typography>
        )}

        {fetchedOrders.length > orderCount ? (
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

export default Past;
