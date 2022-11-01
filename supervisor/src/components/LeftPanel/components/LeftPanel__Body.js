import React, { useContext, useEffect, useState } from "react";
// components
import LeftPanel__Order from "./LeftPanel__Order";

// context
import { orderCtx } from "../../../context/OrdersCtx";

const LeftPanel__Body = () => {
  const [orders, setOrders] = useContext(orderCtx);

  return (
    <div className="leftPanel__Body">
      {orders.map((order) => (
        <LeftPanel__Order order={order} key={order.orderNo} />
      ))}
    </div>
  );
};

export default LeftPanel__Body;
