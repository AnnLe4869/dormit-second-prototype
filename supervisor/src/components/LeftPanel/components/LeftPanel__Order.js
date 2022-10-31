import React from "react";

const LeftPanel__Order = ({ order }) => {
  return (
    <div
      className={`leftPanel__Order ${
        order.orderNo === selectedOrder.orderNo && "orderSelected"
      }`}
      onClick={() => setSelectedOrder(order)}
    >
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