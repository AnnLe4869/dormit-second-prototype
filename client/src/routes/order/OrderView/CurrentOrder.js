import React from "react";

// import icons
import {ReactComponent as MsgIcon} from "../../../assets/Order/message.svg";
import {ReactComponent as PhoneIcon} from "../../../assets/Order/phone.svg";

import ProgressTracker from "./ProgressTracker";

import { Box } from "@mui/system";
import { Typography, Divider, Button } from "@mui/material";
import { universalOrderStyles } from "../muiStyles";

import { useNavigate } from 'react-router-dom';

function CurrentOrder({ order }) {
  const navigate = useNavigate();
  const totalProducts = order.items.length;
  const processingStage = order.process_stage;

  return (
    <Box
        onClick = {() => navigate(`/order/current/${order.id}`)}
        sx={{ 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            height: "223px",
            width: "85.2%",
            backgroundColor: "#7C91F426",
            borderRadius: "19px",
            cursor: "pointer"
        }}
    >   
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: "4% 5%",
                height: "74px"
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
                    fontWeight: "400",
                    color: "#586DD0",
                    fontSize: "12px"
                }}
            >
                Order Confirmed • <span style={{fontWeight: "700"}}>{`5 min to pick up`}</span>
            </Typography>
        </Box>
        <Divider
          sx={{
            borderColor: "#FFFFFF",
            borderBottomWidth: 1,
          }}
        />
        {/* ORDER STATUS */}
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "4% 5%",
                height: "74px",
            }}
        >
            <ProgressTracker processingStage={processingStage} iconPadding={"0 2px 0 5px"} textPadding={"0"}/>
        </Box>
        <Divider
          sx={{
            borderColor: "#FFFFFF",
            borderBottomWidth: 1,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "4% 5%",
            height: "74px"
          }}
        >
          {/* Reorder and report */}
          <Typography 
            sx={{
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "16px",
            }}
          >
            {order.rusher ? `${order.rusher}` : "Searching Rusher..."}
          </Typography>
          <Box 
            sx={{ 
                display: "flex",
                justifyContent: "center",
                gap: "10px"
            }}
          >
            <Box
              sx={universalOrderStyles.contactButtons}
              onClick = {(e) => {
                e.stopPropagation()
                window.open('tel:900300400', '_self')
              }}
            >
              <PhoneIcon fill="#FFFFFF"/>
            </Box>
            <Box
              sx={universalOrderStyles.contactButtons}
              onClick = {(e) => {
                e.stopPropagation()
                window.open('sms:900300400', '_self')
              }}
            >
              <MsgIcon fill="#FFFFFF"/>
            </Box>
          </Box>
        </Box>
    </Box>
  );
}

export default CurrentOrder;
