import React from "react";
import { Typography, Box, Button, TextField, Grid } from "@mui/material";
import { AccountBox } from "../muiStyles";

export default function Referral() {
  return (
    <Box sx={AccountBox}>
      <Typography variant="title1">Refer a Friend</Typography>

      <Typography variant="body1">
        Get $10 in credits when someone signs up using your referral link. $10
        credit will be automatically applied to your account. You will be
        notified via email.
      </Typography>

      <Grid
        container
        spacing={0.5}
        sx={{ marginTop: "30px", minWidth: "260px" }}
      >
        <Grid item xs={3.5} sx={{ minWidth: "200px" }}>
          <TextField
            label="Share this link"
            defaultValue="https://drm.it/ROqBkLmC"
            size="small"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "30px",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "700" }}>
              Copy
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
