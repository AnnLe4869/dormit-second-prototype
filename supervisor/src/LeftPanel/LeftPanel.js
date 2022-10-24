import React from "react";
import "./LeftPanel.css";
// COMPONETS
import LeftPanel__Header from "./components/LeftPanel__Header";
import LeftPanel__Body from "./components/LeftPanel__Body";

const LeftPanel = () => {
  return (
    <div className="leftPanel">
      <LeftPanel__Header />
      <LeftPanel__Body />
    </div>
  );
};

export default LeftPanel;
