import React from "react";
import { Typography, Box, Button, TextField, Grid } from "@mui/material";
import { AccountBox, ButtonStyles } from "../muiStyles";

export default function Referral() {
  const REFERRAL_LINK = "https://drm.it/ROqBkLmC";

  return (
    <Box sx={AccountBox}>
      <Typography variant="h4">Refer a Friend</Typography>

      <Typography variant="body1" sx={{ marginTop: "20px" }}>
        Get $10 in credits when someone signs up using your referral link. $10
        credit will be automatically applied to your account. You will be
        notified via email.
      </Typography>
      <Typography variant="body1" sx={{ mt: "20px", mb: "5px" }}>
        Share this link:
      </Typography>

      <Grid
        container
        spacing={"18px"}
        alignItems="center"
        sx={{ minWidth: "260px" }}
      >
        <Grid item xs={3.5} sx={{ minWidth: "200px" }}>
          <TextField
            defaultValue={REFERRAL_LINK}
            size="small"
            readOnly
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              width: "100%",
              fieldset: {
                borderColor: "#ffffff",
              },
              marginTop: "4px",
            }}
            InputProps={{
              readOnly: true,
              style: { fontSize: "12px", color: "#7141FA", fontWeight: "700" },
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" sx={ButtonStyles}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "700", color: "white" }}
            >
              Copy
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
