import React, { useContext, useEffect, useState } from "react";
import Header from "../home/Header";
import styles from "./Order.module.css";

import { Box, CircularProgress, Backdrop, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import {
  useGetAllPastOrders,
  useInitializeAllOrders,
} from "../../context/user/order-handler";
import { UserContext } from "../../context/user/user-context";
import OrderView from "./OrderView/OrderView";
import CurrentOrder from "./OrderView/CurrentOrder";
import PastOrder from "./OrderView/PastOrder";

import OrderSelector from "./OrderSelector";

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
  
  const [ordersSelected, setOrdersSelected] = useState(currentOrders ? 'current' : 'completed')

  return (
    <>
      <Backdrop
        transitionDuration={{ enter: 0, exit: 500 }}
        sx={{ bgcolor: "#fff" }}
        open={!state.current_orders}
      >
        <CircularProgress variant="indeterminate" sx={{ color: "#7141FA" }} />
      </Backdrop>
      <Box sx={{
        width: "93%", 
        padding: "0",
        display: "flex",
        flexDirection: "column",
        margin: "20px auto",
        maxWidth: "600px",
        gap: "30px"
      }}>
        <h2>Orders</h2>
        <OrderSelector 
          ordersSelected={ordersSelected}
          setOrdersSelected={setOrdersSelected}           
        />
      </Box>
      <Container sx={{width: "93%", padding: "0"}}>
        <div className={styles.centering}>
          {/* all past orders with the products in the props */}


          {/* CURRENT ORDERS */}
          {ordersSelected === 'current' && currentOrders.slice(0, 3).map((order, index) => (
            <CurrentOrder key={index} order={order} />
          ))}

          {/* COMPLETED ORDERS */}
          {ordersSelected === 'completed' && completedOrders.slice(0, 3).map((order, index) => (
            <PastOrder key={index} order={order} />
          ))}

          {completedOrders.length === 0 ? (
            <Typography>No Completed Orders</Typography>
          ) : null}
        </div>
      </Container>
    </>
  );
}

export default Order;
