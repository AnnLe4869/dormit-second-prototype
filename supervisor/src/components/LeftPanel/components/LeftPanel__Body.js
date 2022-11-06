import React, { useContext, useEffect, useState } from "react";
// components
import LeftPanel__Order from "./LeftPanel__Order";

// context
import { OrderCtx } from "../../../context/OrdersCtx";

const LeftPanel__Body = () => {
  const [orders, setOrders] = useContext(OrderCtx);

  return (
    <div className="leftPanel__Body">
      {orders.map((order) => (
        <LeftPanel__Order order={order} key={order.orderNo} />
      ))}
    </div>
  );
};

export default LeftPanel__Body;
