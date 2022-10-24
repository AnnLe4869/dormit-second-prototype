import React, { useState } from "react";
import "./RightPanel.css";
// COMPONENTS
import RightPanel__Header from "./components/RightPanel__Header";
import ActiveRushers from "./components/ActiveRushers";
import InActiveRushers from "./components/InActiveRushers";
import ToggleRusherProvider from "../context/ToggleRusher/ToggleRusher-context";

const RightPanel = () => {
  const [active, setActive] = useState();
  return (
    <ToggleRusherProvider>
      <div className="rightPanel">
        <RightPanel__Header onToggleActive={setActive} />
        {active ? <ActiveRushers /> : <InActiveRushers />}
      </div>
    </ToggleRusherProvider>
  );
};

export default RightPanel;
