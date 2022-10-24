import { Avatar } from "@mui/material";
import React, { useState } from "react";
// MUI
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const RightPanel__RusherInformation = () => {
  const [alignment, setAlignment] = useState("on");

  return (
    <div className="rusherInformation">
      <div className="rusherInformation__left">
        <Avatar alt="Remy Sharp">A</Avatar>
        <p className="">Alex G.</p>
        <p>123-456-92-98</p>
      </div>
      <div className="rusherInformation__right">
        <p>6PM</p>

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={(e) => setAlignment(e.target.value)}
          // aria-label="Platform"
        >
          <ToggleButton value="on">ON</ToggleButton>
          <ToggleButton value="off">OFF</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default RightPanel__RusherInformation;
