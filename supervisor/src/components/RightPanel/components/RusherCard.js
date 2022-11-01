import React, { useContext, useEffect, useState } from "react";
import { SelectedOrderCtx } from "../../../context/SelectedOrderCtx";
import RusherInformation from "./RusherInformation";
import Rusher__DropOff from "./Rusher__DropOff";
import Rusher__PickUp from "./Rusher__PickUp";
//
import { useHorizontalScroll } from "./useSideScroll";

const RusherCard = ({ rusherInfo }) => {
  // context
  const [selectedOrder, setSelectedOrder] = useContext(SelectedOrderCtx);
  // local variables
  const scrollRef = useHorizontalScroll();
  const [expandMenu, setExpandMenu] = useState();

  const [rusherOrders, setRusherOrders] = useState([]);

  return (
    <div className="rusherCard">
      <RusherInformation
        rusherInfo={rusherInfo}
        onExpand={setExpandMenu}
        onDownload={(e) => setRusherOrders((prev) => [...prev, e])}
      />
      <hr />
      <div
        className={expandMenu ? "rusherOrdersExpand" : "rusherOrdersRow"}
        ref={scrollRef}
      >
        {rusherOrders.map((order) => (
          <>
            <Rusher__PickUp order={order} />
            <Rusher__DropOff order={order} />
          </>
        ))}
      </div>
    </div>
  );
};

export default RusherCard;
