import React from "react";
import { Grid, Box, TextField, Modal, Typography } from "@mui/material";
import { ModalStyles } from "../muiStyles";

export default function PaymentOptionModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        backdropFilter: "blur(2px)",
        bgcolor: "rgba(255, 255, 255, 0.60)",
      }}
    >
      <Box sx={ModalStyles}>
        <Typography variant="title1" color="seconda">
          Payment Methods
        </Typography>
        <Grid container alignItems="center" spacing={1.5}>
          <Grid item sm={3} xs={4.5}>
            <TextField label="Credit/debit card" size="small" />
          </Grid>
          <Grid item sm={3} xs={4.5}>
            <TextField
              id="outlined-multiline-flexible"
              label="Card number"
              size="small"
            />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
