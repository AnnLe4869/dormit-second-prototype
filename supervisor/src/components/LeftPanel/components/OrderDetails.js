import React from "react";

export const OrderDetails = ({ order }) => {

    return (
        <div className="order-details">
          <div className="namePhone">
            <span className="name">{order.clientName}</span> - {order.orderNo} (
            {order.itemAmount} items)
          </div>
          <div className="adress">{order.adress}</div>
          <div className="eta">ETA {order.eta} min</div>
        </div>
      );

};
