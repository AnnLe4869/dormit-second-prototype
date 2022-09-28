import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useSignOut } from "../../../context/user/auth-handler";

export default function Logout() {
  const logout = useSignOut();

  const handleClick = () => {
    logout();
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        maxWidth: "700px",
        minWidth: "350px",
        width: {
          xs: "90vw",
          sm: "75vw",
          md: "70vw",
          lg: "55vw",
          xl: "50vw",
        },
        height: "60px",
      }}
    >
      <Button
        sx={{
          display: { xs: "auto", md: "none" },
          position: "absolute",
          textTransform: "none",
          borderRadius: "30px",
          backgroundColor: "#FFF2CF",
          p: "4px 18px",
          fontWeight: "600",
          left: "0",
          bottom: "25%",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: "700", color: "#CB8700" }}
        >
          Earn Cash
        </Typography>
      </Button>
      <Button
        sx={{
          position: "absolute",
          textTransform: "none",
          borderRadius: "30px",
          backgroundColor: "#EEE9FF",
          p: "4px 18px",
          fontWeight: "600",
          right: "0",
          bottom: "25%",
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: "700", color: "#7141FA" }}
          onClick={handleClick}
        >
          Log Out
        </Typography>
      </Button>
    </Box>
  );
}
