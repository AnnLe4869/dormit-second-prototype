import React, { useState } from "react";
import RusherInformation from "./RusherInformation";
import Rusher__DropOff from "./Rusher__DropOff";
import Rusher__PickUp from "./Rusher__PickUp";
//
import { useHorizontalScroll } from "./useSideScroll";

const RusherCard = ({ rusherInfo }) => {
  const scrollRef = useHorizontalScroll();
  const [expandMenu, setExpandMenu] = useState();

  return (
    <div className="rusherCard">
      <RusherInformation rusherInfo={rusherInfo} onExpand={setExpandMenu} />
      <hr />
      <div
        className={expandMenu ? "rusherOrdersExpand" : "rusherOrdersRow"}
        ref={scrollRef}
      >
        <Rusher__PickUp />
        <Rusher__PickUp />
        <Rusher__PickUp />
        <Rusher__PickUp />
        <Rusher__DropOff />
        <Rusher__DropOff />
        <Rusher__DropOff />
        <Rusher__DropOff />
      </div>
    </div>
  );
};

export default RusherCard;
