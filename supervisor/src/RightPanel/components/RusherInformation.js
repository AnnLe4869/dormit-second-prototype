import { Avatar } from "@mui/material";
import React, { useState } from "react";
// MUI
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const RusherInformation = ({ rusherInfo }) => {
  const [status, setStatus] = useState(rusherInfo.status);

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
        >
          <ToggleButton value="on">ON</ToggleButton>
          <ToggleButton value="off">OFF</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default RusherInformation;
