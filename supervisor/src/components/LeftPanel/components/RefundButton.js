import React from "react";
import { useState } from "react";
import { Button, Dialog } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export function RefundButton() {
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button variant="contained" onClick={handleClickOpen}
                size="medium" sx={{
                backgroundColor: "#7C91F4",
                position: "absolute",
                top: "85%",
                left: "25%",
                borderRadius: "100px"}}>Refund Order</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirm refund?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Are you sure you want to refund order #0000?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus variant="contained" sx={{backgroundColor: "#7C91F4"}}>
              Refund
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  