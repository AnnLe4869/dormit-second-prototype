import React, { useContext } from "react";
import { SelectedOrderCtx } from "../../../context/SelectedOrderCtx";
import OrderPopover from "./OrderPopover";

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
      <div className="eta">ETA {order.dropOffETA + order.pickUpETA} min</div>
      <OrderPopover />
    </div>
  );
};

export default LeftPanel__Order;
