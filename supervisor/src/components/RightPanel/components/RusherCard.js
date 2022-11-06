import React, { useContext, useEffect, useState } from "react";
// import { SelectedOrderCtx } from "../../../context/SelectedOrderCtx";
import RusherInformation from "./RusherInformation";
import Rusher__DropOff from "./Rusher__DropOff";
import Rusher__PickUp from "./Rusher__PickUp";
// helper
import { useHorizontalScroll } from "./useSideScroll";

const RusherCard = ({ rusherInfo }) => {
  // context
  // const [selectedOrder, setSelectedOrder] = useContext(SelectedOrderCtx);
  // local variables
  const scrollRef = useHorizontalScroll();
  const [expandMenu, setExpandMenu] = useState();
  const [rusherOrders, setRusherOrders] = useState([]);

  const handleDownload = (e) => {
    if (e) {
      setRusherOrders((prev) => [...prev, { ...e, forPickUp: true }]);
      setRusherOrders((prev) => [...prev, { ...e, forDropOff: true }]);
    }
  };
  // console.log(rusherOrders);

  return (
    <div className="rusherCard">
      <RusherInformation
        rusherInfo={rusherInfo}
        onExpand={setExpandMenu}
        onDownload={handleDownload}
      />
      <hr />
      <div
        className={expandMenu ? "rusherOrdersExpand" : "rusherOrdersRow"}
        ref={scrollRef}
      >
        {rusherOrders.map((order) =>
          order.forPickUp ? (
            <Rusher__PickUp order={order} key={order.orderNo+"1"} />
          ) : (
            <Rusher__DropOff order={order} key={order.orderNo} />
          )
        )}
      </div>
    </div>
  );
};

export default RusherCard;
