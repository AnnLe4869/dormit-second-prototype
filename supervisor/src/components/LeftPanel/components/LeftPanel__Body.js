import React from "react";
import LeftPanel__Order from "./LeftPanel__Order";
import { orderData } from "../../../data/orderData";

const LeftPanel__Body = () => {
  return (
    <div className="leftPanel__Body">
      {orderData.map((order) => (
        <LeftPanel__Order order={order} key={order.orderNo} />
      ))}
    </div>
  );
};

export default LeftPanel__Body;
