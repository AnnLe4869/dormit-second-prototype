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
      <Container>
        <div className={styles.centering}>
          {/* all past orders with the products in the props */}
          <h2>Orders</h2>
          <OrderSelector 
            ordersSelected={ordersSelected}
            setOrdersSelected={setOrdersSelected}           
          />

          {/* CURRENT ORDERS */}
          {ordersSelected === 'current' && currentOrders.slice(0, 3).map((order, index) => (
            <OrderView status={"current"} key={index} order={order} />
          ))}

          {/* COMPLETED ORDERS */}
          {ordersSelected === 'completed' && completedOrders.slice(0, 3).map((order, index) => (
            <OrderView status={"completed"} key={index} order={order} />
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
