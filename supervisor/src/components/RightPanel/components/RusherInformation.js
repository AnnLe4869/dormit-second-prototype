import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
// MUI COMPONENTS
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// MUI ICONS
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// MUI STYLES
// import { sxButton } from "../muiStyles";

const RusherInformation = ({ rusherInfo, onExpand }) => {
  const [status, setStatus] = useState(rusherInfo.status);
  const [expandMenu, setExpandMenu] = useState(true);

  const handleExpand = () => {
    setExpandMenu((e) => !e);
    onExpand(expandMenu);
  };

  return (
    <div className="rusherInformation">
      <div className="rusherInformation__left">
        <Avatar alt="Remy Sharp">A</Avatar>
        <p className="">{rusherInfo.name}</p>
        <p>{rusherInfo.phone}</p>
      </div>
      <div className="rusherInformation__right">
        <p>6PM</p>

        <ToggleButtonGroup
          color="primary"
          value={status}
          exclusive
          onChange={(e) => setStatus(e.target.value)}
          sx={{ cursor: "pointer" }}
        >
          <ToggleButton value="on" sx={{ borderRadius: 20 }}>
            ON
          </ToggleButton>
          <ToggleButton value="off">OFF</ToggleButton>
        </ToggleButtonGroup>
        {expandMenu ? (
          <KeyboardArrowDownIcon
            onClick={handleExpand}
            sx={{ cursor: "pointer" }}
          />
        ) : (
          <KeyboardArrowUpIcon
            onClick={handleExpand}
            sx={{ cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
};

export default RusherInformation;
