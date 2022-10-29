import React, { useContext, useEffect, useState } from "react";
import Header from "../home/Header";
import styles from "./Order.module.css";

import { Button, CircularProgress, Backdrop, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import {
  useGetAllPastOrders,
  useInitializeAllOrders,
} from "../../context/user/order-handler";
import { UserContext } from "../../context/user/user-context";
import OrderView from "./OrderView/OrderView";

function Order() {
  const { state } = useContext(UserContext);
  const initializePast = useGetAllPastOrders();
  const initializeOrders = useInitializeAllOrders();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isAuthenticated) {
      initializeOrders();
      initializePast();
    }
  }, [state.isAuthenticated]);

  const completedOrders = state.pastOrders ? state.pastOrders : [];

  const currentOrders = state.current_orders ? state.current_orders : [];
  return (
    <>
      <Backdrop
        transitionDuration={{ enter: 0, exit: 500 }}
        sx={{ bgcolor: "#fff" }}
        open={!state.current_orders}
      >
        <CircularProgress variant="indeterminate" sx={{ color: "#7141FA" }} />
      </Backdrop>
      <Container>
        <div className={styles.centering}>
          {/* all past orders with the products in the props */}
          <h2>Current</h2>
          {currentOrders.slice(0, 3).map((order, index) => (
            <OrderView status={"current"} key={index} order={order} />
          ))}
          {currentOrders.length > 3 ? (
            <Button
              onClick={() => navigate("/order/current")}
              sx={{
                color: "#7A7A7A",
                backgroundColor: "#EEEEEE",
                borderRadius: 30,
                fontWeight: 600,
                py: 1,
              }}
            >
              Load More
            </Button>
          ) : null}

          <h2>Completed</h2>
          {completedOrders.slice(0, 3).map((order, index) => (
            <OrderView status={"completed"} key={index} order={order} />
          ))}

          {completedOrders.length > 3 ? (
            <Button
              onClick={() => navigate("/order/past")}
              sx={{
                color: "#7A7A7A",
                backgroundColor: "#EEEEEE",
                borderRadius: 30,
                fontWeight: 600,
                py: 1,
              }}
            >
              Load More
            </Button>
          ) : null}
          {completedOrders.length === 0 ? (
            <Typography>No Completed Orders</Typography>
          ) : null}
        </div>
      </Container>
    </>
  );
}

export default Order;
