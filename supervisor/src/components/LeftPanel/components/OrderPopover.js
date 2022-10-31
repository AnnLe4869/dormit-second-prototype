import React from "react";
import { useState } from "react";
import { Popover, Box, Button } from "@mui/material";

export default function OrderPopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="text" onClick={handleClick}>
        Order Info
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Box
            sx={{
              width: '219px',
              height: '425px',
              left: '93px',
              top: '87px',
              background: '#FFFFFF',
              border: '2px solid #C8D1FF',
              borderRadius: '15px',
        }}>
          <div>Order details</div>
        </Box>
      </Popover>
    </div>
  );
}