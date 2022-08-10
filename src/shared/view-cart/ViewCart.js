import React from 'react'
import { viewCartStyles } from '../../muiStyles.js';
import Cart from "../../routes/home/Cart"

/*
 * Material-UI Imports
 */
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

function ViewCart({numItems, totalAmount}) {

    const viewCart = () => {
        return <Cart show = {true}/>
    }
  return (
    <Button sx={viewCartStyles.viewCartContainer} onClick={viewCart}>
        <Grid container spacing={0} sx={viewCartStyles.viewCartGrid}>
            <Grid item xs={3.5} sx={viewCartStyles.viewCartText}>
                <Typography variant="h5" color="secondary.main" fontWeight={600} marginBottom="6px">
                    {numItems} Items
                </Typography>
            </Grid>
            <Grid item xs={5} sx={viewCartStyles.viewCartText}>
                <Typography variant="h3" color="secondary.main" fontWeight={600}>
                    View Cart
                </Typography>
            </Grid>
            <Grid item xs={3.5} sx={viewCartStyles.viewCartText}>
                <Typography variant="h5" color="secondary.main" fontWeight={600} marginBottom="6px">
                    ${totalAmount}
                </Typography>
            </Grid>
        </Grid>
    </Button>
  )
}

export default ViewCart