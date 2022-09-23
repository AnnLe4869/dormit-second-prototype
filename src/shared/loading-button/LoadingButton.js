import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import * as React from "react";

export function LoadingButton({ buttonName, loading, ...props }) {
  return (
    <Box>
      <Box sx={{ m: 1, position: "relative" }}>
        <Button variant="contained" disabled={loading} {...props}>
          {buttonName}
        </Button>
        {loading && (
          <CircularProgress
            size={22}
            sx={{
              color: "#e1d6ff",
              position: "absolute",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
