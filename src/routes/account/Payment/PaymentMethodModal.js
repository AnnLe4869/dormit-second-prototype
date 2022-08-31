import React from "react";
import { Grid, Box, Button, Modal, Typography } from "@mui/material";
import { ModalStyles, ButtonStyles } from "../muiStyles";

export default function PaymentMethodModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        backdropFilter: "blur(2px)",
        bgcolor: "rgba(255, 255, 255, 0.50)",
      }}
    >
      <Box sx={ModalStyles}>
        <Typography variant="h4">Payment Methods</Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "500", m: "13px 0 5px 0", color: "black" }}
        >
          Default Payment Method
        </Typography>

        <Typography variant="body1" sx={{ mb: "20px" }}>
          No Saved Methods
        </Typography>
        <Button variant="contained" sx={ButtonStyles}>
          <Typography
            color="white"
            variant="body1"
            sx={{ fontWeight: "700", color: "white" }}
          >
            Add Payment Method
          </Typography>
        </Button>
      </Box>
    </Modal>
  );
}
