import React, { useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import { AccountBox, ButtonStyles } from "../muiStyles";
import PaymentOptionModal from "./PaymentOptionModal";

export default function Payment() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={AccountBox}>
      <Typography variant="title1">Payment Methods</Typography>
      <br />
      <Typography variant="title2" color="primary" sx={{ m: "20px 0" }}>
        Saved payment methods
      </Typography>
      <br />
      <Button onClick={handleOpen} variant="contained" sx={ButtonStyles}>
        <Typography variant="callout" color="white">
          Add payment method
        </Typography>
      </Button>
      <PaymentOptionModal open={open} handleClose={handleClose} />
    </Box>
  );
}
