import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
// MUI COMPONENTS
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// MUI ICONS
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
// MUI STYLES
// import { sxButton } from "../muiStyles";

const RusherInformation = ({ rusherInfo, onExpand }) => {
  // console.log(rusherInfo.status);
  const [status, setStatus] = useState();
  const [expandMenu, setExpandMenu] = useState(true);
  const [endTime, setEndTime] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [ampm, setAmpm] = useState();
  const [showSetTime, setShowSetTime] = useState(false);

  const handleTimeChange = (e) => {
    setEndTime(e.target.value);
    var t = e.target.value;
    var [h, m] = t.split(":");

    setHour((h % 12) + 12 * (h % 12 == 0));
    setMinute(m);
    setAmpm(h >= 12 ? "PM" : "AM");
  };

  useEffect(() => {
    setStatus(rusherInfo.status);
  }, [rusherInfo]);

  const handleExpand = () => {
    setExpandMenu((e) => !e);
    onExpand(expandMenu);
  };

  return (
    <div className="rusherInformation">
      <div className="rusherInformation__left">
        <Avatar>A</Avatar>
        <p className="">{rusherInfo.name}</p>
        <p>{rusherInfo.phone}</p>
      </div>
      <div className="rusherInformation__right">
        {/* END TIME */}
        {!showSetTime ? (
          <div className="rusherEndTime">
            <EditIcon
              sx={{ fontSize: 20, cursor: "pointer" }}
              onClick={() => setShowSetTime(true)}
            />
            <p>{endTime ? `${hour}:${minute} ${ampm}` : "End Time"}</p>
          </div>
        ) : (
          rusherInfo.status == "on" && (
            <div className="editEndTime">
              <CloseIcon
                sx={{ fontSize: 20, cursor: "pointer" }}
                onClick={() => setShowSetTime(false)}
              />
              <div className="editEndTime__right">
                <p>Set End Time</p>
                <input
                  type="time"
                  value={endTime}
                  onChange={handleTimeChange}
                  // onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
          )
        )}

        <ToggleButtonGroup
          value={status}
          exclusive
          onChange={(e) => setStatus(e.target.value)}
          sx={{ cursor: "pointer" }}
        >
          <ToggleButton value="on">ON</ToggleButton>
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
