import React from "react";

const RusherOrder = ({ order }) => {
  const type = order.forPickUp ? "PICKUP" : "DROPOFF";
  const classType = order.forPickUp ? "rusherPickUp" : "rusherDropOff";
  return (
    <div className={classType}>
      <div className="namePhone">
        <span className="name">{order.clientName}</span> - {order.orderNo} (
        {order.itemAmount} items)
      </div>
      <div className="adress">{order.adress}</div>
      <div className="eta">
        <b>{type}</b> ETA {order.pickUpETA} min
      </div>
    </div>
  );
};

export default RusherOrder;
