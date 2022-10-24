import React from "react";
import RusherCard from "./RusherCard";
import { rushers } from "../../data/rushers";

const ActiveRushers = () => {
  return (
    <div className="activeRushers">
      {/* {rushers.map((r) => (
        if(r.status =="on") */}

      <RusherCard />
      {/* }
      )) */}
      <RusherCard />
      <RusherCard />
      <RusherCard />
    </div>
  );
};

export default ActiveRushers;
