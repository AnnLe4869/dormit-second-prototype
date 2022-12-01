import React from "react";

// icons
import apple from "../../../mock_data/images/apple.jpg";
import {ReactComponent as ReorderIcon} from "../../../assets/Order/reorder.svg";

import { Image } from "../../../shared/loading-image/Image";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import { convertUnixToTime } from "../../../helper/time";
import { useProducts } from "../../../context/product/product-handler";

import { useNavigate } from 'react-router-dom';
import { useIncrementItemCount, useSelectItem } from "../../../context/user/cart-handler";
import { getCartFromLocStore } from "../../../helper/getCartFromLocStore";

function PastOrder({ order, setDrawerState }) {
  const selectItem = useSelectItem();
  const incrementCount = useIncrementItemCount();
  const localCart = getCartFromLocStore();
  const navigate = useNavigate();
  const products = useProducts();
  const totalProducts = order.items.length;

  const productImages = [];
  order.items.slice(0, 4).map(({ product_id }) => {
    const product = products.find(({ id }) => id === product_id);
    const productImage = (
      <Box
        key={product.id} 
        sx={{
          width: "100%",
        }}
      >
        <Image style={{height: "100%", borderRadius: "8px", width: "40px"}} image={product.images} />
      </Box>
    );
    productImages.push(productImage)
  })

  const handleReorderClick = (e) => {
    e.stopPropagation()
    order.items.map(({ product_id }) => {
      const existingItem = localCart.find((item) => item.product_id === product_id);
      if(!existingItem) {
        selectItem(product_id);
      } else {
        incrementCount(product_id);
      }
    })

    setDrawerState(true)
  }

  return (
    <Box
        onClick = {() => navigate(`/order/past/${order.id}`)}
        sx={{ 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            height: "124px",
            width: "85.2%",
            backgroundColor: "#7C91F426",
            borderRadius: "30px",
        }}
    >   
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "4% 6% 0 6%",
                height: "60px"
            }}
        >
            <Box
            sx={{
                lineHeight: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
            >
            <Typography 
                variant="h6" 
                sx={{
                    fontWeight: "600",
                    display: "flex",
                    fontFamily: "Poppins",
                    fontSize: "16px"
                }}
            >
                {(order.id).substring(3, 9)} - <span style={{fontWeight: "400", fontFamily: "Inter"}}>&nbsp;{`${totalProducts} items`}</span>
            </Typography>
            <Typography 
                variant="Mobile Body"
                sx={{
                    fontFamily: "Inter",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#686868"
                }}
            >
                {`$${(order.amount_total/100).toFixed(2)}`}
            </Typography>
            </Box>
            <Typography
                sx={{
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    color: "#586DD0",
                    fontSize: "12px"
                }}
            >
                Completed • <span style={{color: "#686868", fontWeight: "400"}}>{convertUnixToTime(order.order_time)}</span>
            </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 6% 2% 6%",
            height: "64px"
          }}
        >
          {/* Reorder and report */}
          <Box
            sx={{
              height: "40px",
              borderRadius: "8px",
              display: "flex",
              gap: "7px"
            }}
          >
            {/* <img src={apple} style={{height: "100%", borderRadius: "8px"}} />
            <img src={apple} style={{height: "100%", borderRadius: "8px"}} />
            <img src={apple} style={{height: "100%", borderRadius: "8px"}} /> */}
            {productImages.map((item) => {
              return item;
            })}
          </Box>
          <Box 
            sx={{ 
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                height: "100%",
            }}
          >
            <Box
              sx={{
                padding: "0",
                outline: "none",
                border: "none",
                height: "100%",
                display: "flex",
                alignItems: "flex-start",
                backgroundColor: "none",
                borderRadius: "999px",
              }}
            >
              <ReorderIcon onClick={handleReorderClick} />
            </Box>
          </Box>
        </Box>
    </Box>
  );
}

export default PastOrder;
