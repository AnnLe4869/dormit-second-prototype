import React, { useEffect, useState } from "react";
import "./RightPanel.css";
// COMPONENTS
import RightPanel__Header from "./components/RightPanel__Header";
import { rushers } from "../../data/rushers";
import RusherCard from "./components/RusherCard";
// MUI
import { ThemeProvider } from "@emotion/react";
import { sxButton } from "./muiStyles";

const RightPanel = () => {
  const [active, setActive] = useState(true);
  const [Rushers] = useState(rushers);

  return (
    <ThemeProvider theme={sxButton}>
      <div className="rightPanel">
        <RightPanel__Header onToggleActive={setActive} />

        {active
          ? Rushers.filter((r) => r.status == "on").map((r, i) => (
              <RusherCard rusherInfo={r} key={i} />
            ))
          : Rushers.filter((r) => r.status == "off").map((r, i) => (
              <RusherCard rusherInfo={r} key={i} />
            ))}
      </div>
    </ThemeProvider>
  );
};

export default RightPanel;
