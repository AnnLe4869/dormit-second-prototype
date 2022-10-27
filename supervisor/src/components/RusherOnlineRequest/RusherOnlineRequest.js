import React from "react";
import "./RusherOnlineRequest.css";
// MUI
import { Avatar, Button, createTheme, ThemeProvider } from "@mui/material";
//
import { rushers } from "../../data/rushers";

const theme = createTheme({
  palette: {
    primary: { main: "#56A455" },
    secondary: { main: "#BF5353" },
  },
  shape: {
    borderRadius: 100,
  },
  typography: {
    fontSize: 25,
  },
});

const RusherOnlineRequest = () => {
  const rusher = rushers[0].phone;

  return (
    <ThemeProvider theme={theme}>
      <div className="rusherOnlineRequest">
        <h1>Approve Rusher</h1>
        <Avatar sx={{ width: "150px", height: "150px" }} />
        <div className="rusherOnlineRequest__rusherInfo">
          <h1>Alex G.</h1>
          <h1>{rusher}</h1>
        </div>
        <div className="rusherOnlineRequest__buttonGroup">
          <Button variant="contained" sx={{ backgroundColor: "primary.main" }}>
            Approve
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "secondary.main" }}
          >
            Decline
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default RusherOnlineRequest;
