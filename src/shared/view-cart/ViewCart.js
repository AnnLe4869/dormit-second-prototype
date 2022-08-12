import React from 'react'
import { viewCartStyles, headers } from './muiStyles.js';

/*
 * Material-UI Imports
 */
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

function ViewCart({numItems, totalAmount}) {
  return (
    <Button sx={viewCartStyles.viewCartContainer}>
        <Grid container spacing={0} sx={viewCartStyles.viewCartGrid}>
            <Grid item xs={3.5} sx={viewCartStyles.viewCartText}>
                <Typography sx={headers.header5} fontWeight={600} marginBottom="6px">
                    {numItems} Items
                </Typography>
            </Grid>
            <Grid item xs={5} sx={viewCartStyles.viewCartText}>
                <Typography sx={headers.header3} fontWeight={600}>
                    View Cart
                </Typography>
            </Grid>
            <Grid item xs={3.5} sx={viewCartStyles.viewCartText}>
                <Typography sx={headers.header5} fontWeight={600} marginBottom="6px">
                    ${totalAmount}
                </Typography>
            </Grid>
        </Grid>
    </Button>
  )
}

export default ViewCart