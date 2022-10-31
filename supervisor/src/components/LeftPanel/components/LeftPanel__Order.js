import React from "react";
import OrderPopover from "./OrderPopover";

const LeftPanel__Order = ({ order }) => {

  return (
    <div className="leftPanel__Order">
      <div className="namePhone">
        <span className="name">{order.clientName}</span> - {order.orderNo} (
        {order.itemAmount} items)
      </div>
      <div className="adress">{order.adress}</div>
      <div className="eta">ETA {order.eta} min</div>
      <OrderPopover />
    </div>
  );
};

export default LeftPanel__Order;