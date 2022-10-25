import React, { useState } from "react";
import "./RightPanel.css";
// COMPONENTS
import RightPanel__Header from "./components/RightPanel__Header";
import ToggleRusherProvider from "../context/ToggleRusher/ToggleRusher-context";
import { rushers } from "../data/rushers";
import RusherCard from "./components/RusherCard";

const RightPanel = () => {
  const [active, setActive] = useState(true);
  return (
    <ToggleRusherProvider>
      <div className="rightPanel">
        <RightPanel__Header onToggleActive={setActive} />

        {active
          ? /* ACTIVE RUSHERS */
            rushers?.map(
              (r) =>
                r.status == "on" && <RusherCard rusherInfo={r} key={r.name} />
            )
          : /*  INACTIVE RUSHERS */
            rushers?.map(
              (r) =>
                r.status == "off" && <RusherCard rusherInfo={r} k={r.name} />
            )}
      </div>
    </ToggleRusherProvider>
  );
};

export default RightPanel;
