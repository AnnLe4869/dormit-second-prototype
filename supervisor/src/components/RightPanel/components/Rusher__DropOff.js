import React from "react";

const Rusher__DropOff = ({ order }) => {
  return (
    <div className="rusherDropOff">
      <div className="namePhone">
        <span className="name">{order.clientName}</span> - {order.orderNo} (
        {order.itemAmount} items)
      </div>
      <div className="adress">{order.adress}</div>
      <div className="eta">
        <b>DROPOFF</b> ETA {order.dropOffETA} min
      </div>
    </div>
  );
};

export default Rusher__DropOff;
