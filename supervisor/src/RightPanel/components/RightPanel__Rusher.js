import React from "react";
import RightPanel__RusherInformation from "./RightPanel__RusherInformation";
import Rusher__DropOff from "./Rusher__DropOff";
import Rusher__PickUp from "./Rusher__PickUp";
//
import { useHorizontalScroll } from "./useSideScroll";

const RightPanel__Rusher = () => {
  //   const handleScroll = (e) => {
  //     e.preventDefault();
  //     // console.log(e.currentTarget.scrollLeft);
  //     e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + 50;
  //   };
  const scrollRef = useHorizontalScroll();

  return (
    <div className="rightPanel__Rusher">
      <RightPanel__RusherInformation />
      <hr />
      <div
        className="rusherOrders"
        ref={scrollRef}
        // onScroll={(e) => console.log(e.currentTarget.scrollLeft)}
      >
        <Rusher__PickUp />
        <Rusher__PickUp />
        <Rusher__PickUp />
        <Rusher__PickUp />
        <Rusher__PickUp />
        <Rusher__DropOff />
        <Rusher__DropOff />
        <Rusher__DropOff />
        <Rusher__DropOff />
        <Rusher__DropOff />
      </div>
    </div>
  );
};

export default RightPanel__Rusher;
