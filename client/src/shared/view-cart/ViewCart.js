import React, { useState } from "react";

import { viewCartStyles, headers } from "./muiStyles.js";
import Cart from "./Cart";

import { Drawer } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function ViewCart({ numItems, totalAmount }) {
  const [drawerState, setDrawerState] = useState(false);

  const handleDrawerClose = () => {
    setDrawerState(false);
  };

  const handleDrawerOpen = () => {
    setDrawerState(true);
  };

  if (numItems > 0) {
    return (
      <>
        <Button
          sx={viewCartStyles.viewCartContainer}
          onClick={handleDrawerOpen}
        >
          <Grid container spacing={0} sx={viewCartStyles.viewCartGrid}>
            <Grid item xs={3.5} sx={viewCartStyles.viewCartText}>
              <Typography sx={headers.header5}>{numItems} Items</Typography>
            </Grid>
            <Grid item xs={5} sx={viewCartStyles.viewCartText}>
              <Typography sx={headers.header3}>View Cart</Typography>
            </Grid>
            <Grid item xs={3.5} sx={viewCartStyles.viewCartText}>
              <Typography sx={headers.header5}>${totalAmount}</Typography>
            </Grid>
          </Grid>
        </Button>
        <Drawer
          PaperProps={{ sx: viewCartStyles.cartDrawer }}
          anchor="bottom"
          open={drawerState}
          variant="temporary"
        >
          <Cart handleDrawerClose={handleDrawerClose} />
        </Drawer>
      </>
    );
  }
}

export default ViewCart;
