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
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  // Handle Sort
  const handleSort = () => {
    let copyRusherOrders = [...rusherOrders];
    // remove and save the dragged item content
    const draggedItemContent = copyRusherOrders.splice(dragItem.current, 1);
    console.log("sliced");
    console.log(draggedItemContent);
    // switch the position
    copyRusherOrders.splice(dragOverItem.current, 0, ...draggedItemContent);
    // reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;
    console.log("copyarray");
    console.log(copyRusherOrders);

    // update the actual array
    setRusherOrders(copyRusherOrders);
  };

  console.log(rusherOrders);

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
        {rusherOrders.map((order, i) => (
          <div
            key={
              order.forPickUp
                ? order.orderNo + "pickup"
                : order.orderNo + "dropoff"
            }
            draggable="true"
            onDragStart={(e) => dragStart(e, i)}
            onDragEnter={(e) => dragEnter(e, i)}
            onDragEnd={handleSort}
          >
            <RusherOrder order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RusherCard;
