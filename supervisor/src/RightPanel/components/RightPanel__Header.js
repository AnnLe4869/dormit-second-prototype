import React, { useState } from "react";
// MUI
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const RightPanel__Header = () => {
  const [alignment, setAlignment] = useState("active");

  return (
    <div className="rightPanel__Header">
      Rushers
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={(e) => setAlignment(e.target.value)}
        // aria-label="Platform"
      >
        <ToggleButton value="active">ACTIVE</ToggleButton>
        <ToggleButton value="inactive">INACTIVE</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default RightPanel__Header;
