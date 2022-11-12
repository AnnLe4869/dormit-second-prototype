import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { SelectedOrderCtx } from "../../../context/SelectedOrderCtx";
import RusherInformation from "./RusherInformation";
import RusherOrder from "./RusherOrder";
// helper
import { useHorizontalScroll } from "./useSideScroll";

const RusherCard = ({ rusherInfo }) => {
  // context
  const [selectedOrder, setSelectedOrder] = useContext(SelectedOrderCtx);
  // local variables
  const scrollRef = useHorizontalScroll();
  const [expandMenu, setExpandMenu] = useState();
  const [rusherOrders, setRusherOrders] = useState([]);
  // draggabe object
  const dragItem = useRef();
  const dragOverItem = useRef();
  // draggable class
  // const [draggableClass, setDraggableClass] = useState("");
  const [draggingClass, setDraggingClass] = useState("");
  const [exist, setExist] = useState(false);

  // if item selected from rushers own card , it wont be available to download on its own card so we disable download button
  useEffect(() => {
    let existItem = rusherOrders.some(
      (item) => item.orderNo == selectedOrder.orderNo
    );
    setExist(existItem);
  }, [selectedOrder]);

  console.log(exist);

  //Bring data on Rusher Card
  const handleDownload = (e) => {
    if (e && !exist) {
      setRusherOrders((prev) => [...prev, { ...e, forPickUp: true }]);
      setRusherOrders((prev) => [...prev, { ...e, forDropOff: true }]);
    } else setSelectedOrder(null);
  };

  const dragStart = (e, position) => {
    dragItem.current = position;
    // setDraggableClass("draggable");
    setDraggingClass("dragging");
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    // console.log(dragOverItem.current);
  };

  // Handle Sort
  const handleSort = () => {
    let copyRusherOrders = [...rusherOrders];
    // remove and save the dragged item content
    const draggedItemContent = copyRusherOrders.splice(dragItem.current, 1);

    // switch the position
    copyRusherOrders.splice(dragOverItem.current, 0, ...draggedItemContent);
    // reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;
    setDraggingClass("");

    // update the actual array
    setRusherOrders(copyRusherOrders);
  };

  const handleDragOver = (e, i) => {
    e.preventDefault();
    // let copyRusherOrders = [...rusherOrders];
    // remove and save the dragged item content
    // const draggedItemContent = copyRusherOrders.splice(dragItem.current, 1);
    // copyRusherOrders.splice(dragOverItem.current, 0, ...draggedItemContent);
    // setRusherOrders(copyRusherOrders);
  };

  const handleClick = (e) => {
    setSelectedOrder({ ...e, forPickUp: false, forDropOff: false });
  };

  return (
    <div className="rusherCard">
      <RusherInformation
        rusherInfo={rusherInfo}
        onExpand={setExpandMenu}
        onDownload={handleDownload}
        // exist={existItem}
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
                ? order.orderNo + "-pickup"
                : order.orderNo + "-dropoff"
            }
            className={`${dragItem.current == i ? draggingClass : null} ${
              selectedOrder.orderNo == order.orderNo ? "orderSelected" : null
            }`}
            draggable="true"
            onDragStart={(e) => dragStart(e, i)}
            onDragEnter={(e) => dragEnter(e, i)}
            onDragEnd={handleSort}
            onDragOver={(e) => handleDragOver(e, i)}
            onClick={() => handleClick(order)} // take the element on selectedOrderCtx
          >
            <RusherOrder order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RusherCard;
