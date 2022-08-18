import React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dormitIcon from "../../assets/Home/dormit-icon.svg";

import { headerStyles, headers } from "./muiStyles";

function Header() {
  return (
    <AppBar sx={headerStyles.headerContainer}>
      <Grid
        container
        sx={headerStyles.headerGrid}
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          xs={6}
          md={3}
          sx={headerStyles.headerLeft}
          order={{ xs: 2, md: 1 }}
        >
          <Button
            sx={headerStyles.headerButton}
            endIcon={<ExpandMoreIcon transform="scale(1.4)" />}
          >
            <Typography sx={headers.header5} fontWeight={200}>
              Delivery Location
            </Typography>
          </Button>
        </Grid>

        <Grid
          item
          xs={6}
          md={6}
          sx={headerStyles.headerCenter}
          order={{ xs: 1, md: 2 }}
        >
          <Badge sx={headerStyles.headerIcon}>
            <img src={dormitIcon} alt="DormIt Icon" />
          </Badge>
          <Typography
            sx={[headers.header2, { display: "inline-flex" }]}
            fontWeight={700}
          >
            DormIt
          </Typography>
        </Grid>

        <Grid
          item
          xs={0}
          md={3}
          sx={headerStyles.headerRight}
          order={{ md: 3 }}
        >
          <Button sx={headerStyles.headerButton}>
            <Typography sx={headers.header5} fontWeight={200}>
              Earn Cash
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Header;
