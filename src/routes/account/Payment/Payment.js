import React, { useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import { AccountBox, ButtonStyles } from "../muiStyles";
import PaymentMethodModal from "./PaymentMethodModal";

export default function Payment() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={AccountBox}>
      <Typography variant="h4">Payment Methods</Typography>
      <Typography
        variant="h6"
        sx={{ fontWeight: "500", m: "13px 0 5px 0", color: "black" }}
      >
        Saved Payment Methods
      </Typography>

      <Typography variant="body1" sx={{ mb: "20px" }}>
        No Saved Methods
      </Typography>
      <Button onClick={handleOpen} variant="contained" sx={ButtonStyles}>
        <Typography
          color="white"
          variant="body1"
          sx={{ fontWeight: "700", color: "white" }}
        >
          Add Payment Method
        </Typography>
      </Button>
      <PaymentMethodModal open={open} handleClose={handleClose} />
    </Box>
  );
}
