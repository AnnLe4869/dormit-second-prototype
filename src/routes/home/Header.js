import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grid from "@mui/material/Grid";


/**
 * delivery block component
 * this lies in the left of the navbar
 */
function DeliveryBlock() {
  return (
    <Box>
      <Grid container spacing={1} alignItems="center" justifyContent="left">
        <Grid item xs={1} md={1}>
          <LocationOnIcon />
        </Grid>

        <Grid item xs={6} md={6}>
          <Typography variant="body2" component="div" textAlign="left">
            Rushing to
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: "bold" }}
            component="div"
            textAlign="left"
          >
            Enter delivery location
          </Typography>


          <Typography variant="caption" component="div" textAlign="left">
            in under 10 minutes
          </Typography>
        </Grid>

        <Grid item xs={2} md={2}>
          <KeyboardArrowDownIcon />
        </Grid>
      </Grid>
    </Box>
  );
}

function StoreIcon() {
  return (
    <Box>
      <Box component="img" />
    </Box>
  );
}

export default function Header() {
  return (
    <Box>
      <AppBar
        component="nav"
        sx={{
          backgroundImage: "linear-gradient(to right, #7141fa, #a07eff)",
          padding: 1,
        }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={4} md={4}>
              <DeliveryBlock />
            </Grid>

            <Grid item xs={4} md={4}>
              <Typography
                variant="h6"
                component="div"
                textAlign="center"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                MUI
              </Typography>
            </Grid>

            <Grid item xs={4} md={4}>
              <Typography
                variant="h6"
                component="div"
                textAlign="right"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                MUI
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
