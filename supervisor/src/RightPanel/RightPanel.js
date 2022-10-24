import React from "react";
import "./RightPanel.css";
// COMPONENTS
import RightPanel__Header from "./components/RightPanel__Header";
import RightPanel__Rusher from "./components/RightPanel__Rusher";

const RightPanel = () => {
  return (
    <div className="rightPanel">
      <RightPanel__Header />
      <RightPanel__Rusher />
    </div>
  );
};

export default RightPanel;
