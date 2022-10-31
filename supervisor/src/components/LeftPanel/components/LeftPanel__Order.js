import React, { useContext, useEffect } from "react";
import { SelectedOrderCtx } from "../../../context/SelectedOrderCtx";

const LeftPanel__Order = ({ order }) => {
  const [selectedOrder, setSelectedOrder] = useContext(SelectedOrderCtx);

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
    </div>
  );
};

export default LeftPanel__Order;
