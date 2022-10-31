import React from "react";
import { useState } from "react";
import { Divider } from "@mui/material";
import { mockProductsSupervisor } from "../../../mock_data_supervisor/data/mockDataSupervisor";

const LeftPanel__Order = ({ order }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="leftPanel__Order">
      <div className="namePhone">
        <span className="name">{order.clientName}</span> - {order.orderNo} (
        {order.itemAmount} items)
      </div>
      <div className="adress">{order.adress}</div>
      <div className="eta">ETA {order.eta} min</div>

      {/* Custom Hover Effect */}
      <div className="order-info-text"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        Order Info
      </div>
      {/* order details */}
      {isShown && (
        <div className="order-details">
          <div className="namePhone">
            <span className="name">{order.clientName}</span> - {order.orderNo} (
            {order.itemAmount} items)
          </div>
          <div>
            <p>Items</p>
            </div>
          <Divider />
          <div className="adress">{order.adress}</div>
          <Divider />
          <div className="eta">ETA {order.eta} min</div>
        </div>
      )}
    </div>
  );
};

export default LeftPanel__Order;