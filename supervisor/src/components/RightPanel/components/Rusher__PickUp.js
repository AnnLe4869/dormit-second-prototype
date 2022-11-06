import React from "react";

const Rusher__PickUp = ({ order }) => {
  return (
    <div className="rusherPickUp">
      <div className="namePhone">
        <span className="name">{order.clientName}</span> - {order.orderNo} (
        {order.itemAmount} items)
      </div>
      <div className="adress">{order.adress}</div>
      <div className="eta">
        <b>PICKUP</b> ETA {order.pickUpETA} min
      </div>
    </div>
  );
};

export default Rusher__PickUp;
