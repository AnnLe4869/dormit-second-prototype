import React, { useState } from "react";
// MUI
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const RightPanel__Header = ({ onToggleActive }) => {
  const [alignment, setAlignment] = useState("active");

  const handleToggle = (e) => {
    setAlignment(e.target.value);

    switch (e.target.value) {
      case "active":
        onToggleActive(true);
        break;
      case "inactive":
        onToggleActive(false);
        break;
    }
  };

  return (
    <div className="rightPanel__Header">
      Rushers
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleToggle}
        // onChange={(e) => setAlignment(e.target.value)}
        // aria-label="Platform"
      >
        <ToggleButton value="active">ACTIVE</ToggleButton>
        <ToggleButton value="inactive">INACTIVE</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default RightPanel__Header;
