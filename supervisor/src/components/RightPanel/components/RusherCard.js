import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
// import { SelectedOrderCtx } from "../../../context/SelectedOrderCtx";
import RusherInformation from "./RusherInformation";
import RusherOrder from "./RusherOrder";
// helper
import { useHorizontalScroll } from "./useSideScroll";

const RusherCard = ({ rusherInfo }) => {
  // context
  // const [selectedOrder, setSelectedOrder] = useContext(SelectedOrderCtx);
  // local variables
  const scrollRef = useHorizontalScroll();
  const [expandMenu, setExpandMenu] = useState();
  const [rusherOrders, setRusherOrders] = useState([]);
  // draggabe object
  const dragItem = useRef();
  const dragOverItem = useRef();

  //Bring data on Rusher Card
  const handleDownload = (e) => {
    if (e) {
      setRusherOrders((prev) => [...prev, { ...e, forPickUp: true }]);
      setRusherOrders((prev) => [...prev, { ...e, forDropOff: true }]);
    }
  };

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyRusherOrders = [...rusherOrders];
    const dragItemContent = copyRusherOrders[dragItem.current];
    copyRusherOrders.splice(dragItem.current, 1);
    copyRusherOrders.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem = null;
    setRusherOrders(copyRusherOrders);
  };

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
        {rusherOrders.map((order) => (
          <div
            draggable="true"
            onDragStart={(e, i) => dragStart(e, i)}
            onDragEnter={(e, i) => dragEnter(e, i)}
            key={order.orderNo + "1"}
            onDragEnd={drop}
          >
            <RusherOrder order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RusherCard;
