import {
    Box,
  Typography
} from "@mui/material";
import React from "react";

import { getTotal, getTotalCount } from "../../../helper/getTotalsAndFees.js";

import { Image } from '../../../shared/loading-image/Image'

const Details = ({ currentCart, rusherTip }) => {
    const numberOfItems = getTotalCount(currentCart)
    
    return (
      <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "20px"
        }}
      >
        <Typography
            sx={{
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "16px"
            }}
        >
            {numberOfItems} {numberOfItems === 1 ? 'item' : 'items'} in cart • ${(getTotal(currentCart) + rusherTip).toFixed(2)}
        </Typography>
        <Box
            sx={{
                display: "flex",
                gap: "10px"
            }}
        >
          {currentCart &&
            currentCart.slice(0,4).map((item, index) => {
                return <Image key={index} style={{height: "60px", borderRadius: "16px", width: "60px"}} image={item.image} />
            })}
        </Box>
      </Box>
    );
};

export default Details;