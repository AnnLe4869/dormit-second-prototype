import React from "react";
import styles from "../Order.module.css";
import apple from "../../../mock_data/images/apple.jpg";
// import msgIcon from "../../../mock_data/images/msgIcon.png";
import msgIcon from "../../../assets/Order/message.svg";
import PhoneIcon from "../../../assets/Order/phone.svg";
import dashIconComplete from "../../../assets/Order/dash.svg"
// import PhoneIcon from "../../../mock_data/images/PhoneIcon.png";
import { Box } from "@mui/system";
import { Button, Typography, Divider } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { convertUnixToTime } from "../../../helper/time";

function PastOrder({ order }) {
  const totalProducts = order.items.length;
  
  console.log(order)

  const orderStatusList = [
    {
        name: "Confirmed",
        icon: {CheckBoxIcon}
    },
    {
        name: "Picked up",
        icon: {CheckBoxIcon}
    },
    {
        name: "On the way",
        icon: {CheckBoxIcon}
    },
    {
        name: "Complete",
        icon: {CheckBoxIcon}
    },
  ]

  return (
    <Box 
        sx={{ 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            height: "124px",
            backgroundColor: "#7C91F426",
            borderRadius: "19px",
        }}
    >   
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: "4% 5%",
                height: "62px"
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
                #4KB96 - <span style={{fontWeight: "400", fontFamily: "Inter"}}>&nbsp;{`${totalProducts} items`}</span>
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
            padding: "4% 5%",
            height: "62px"
          }}
        >
          {/* Reorder and report */}
          <Box
            sx={{
              height: "40px",
              width: "40px",
              borderRadius: "8px",
              display: "flex",
              gap: "7px"
            }}
          >
            <img src={apple} style={{height: "100%", borderRadius: "8px"}} />
            <img src={apple} style={{height: "100%", borderRadius: "8px"}} />
          </Box>
          <Box 
            sx={{ 
                display: "flex",
                justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                padding: "0",
                outline: "none",
                border: "none",
                backgroundColor: "none",
                borderRadius: "999px",
              }}
            >
              <img style={{ width: "40px" }} src={PhoneIcon} />
            </Button>
          </Box>
        </Box>
    </Box>
  );
}

export default PastOrder;
