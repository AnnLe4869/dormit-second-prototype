import React from "react";

// import icons
import msgIcon from "../../../assets/Order/message.svg";
import PhoneIcon from "../../../assets/Order/phone.svg";

// import icons as react components as they need to dynamically change styling
import {ReactComponent as DashIcon} from "../../../assets/Order/dash.svg"
import {ReactComponent as ConfirmedIcon} from "../../../assets/Order/confirmed.svg"
import {ReactComponent as PickedUpIcon} from "../../../assets/Order/pickedup.svg"
import {ReactComponent as OnTheWayIcon} from "../../../assets/Order/ontheway.svg"
import {ReactComponent as CompleteIcon} from "../../../assets/Order/complete.svg"

import { Box } from "@mui/system";
import { Typography, Divider, Button } from "@mui/material";

import { useNavigate } from 'react-router-dom';

function CurrentOrder({ order }) {
  const navigate = useNavigate();
  const totalProducts = order.items.length;
  const processingStage = order.process_stage;

  console.log(order)

  const orderStatusList = [
    { 
      name: "Confirmed",
      processingStage: 0
    },
    { 
      name: "Picked up",
      processingStage: 1
    },
    { 
      name: "On the way",
      processingStage: 2
    },
    { 
      name: "Complete",
      processingStage: 3
    }
  ]

  return (
    <Box
        onClick = {() => navigate(`/order/current/${order.id}`)}
        sx={{ 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            height: "223px",
            width: "100%",
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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "300px",
                    padding: "0 2px 0 5px",
                    alignItems: "center",
                    marginBottom: "5px"
                }}
            >
                <ConfirmedIcon fill={processingStage >= 0 ? "#586DD0" : "#686868"} />
                <DashIcon stroke ={processingStage >= 0 ? "#586DD0" : "#686868"}/>
                <PickedUpIcon fill={processingStage >= 1 ? "#586DD0" : "#686868"} />
                <DashIcon stroke ={processingStage >= 1 ? "#586DD0" : "#686868"}/>
                <OnTheWayIcon stroke={processingStage >= 2 ? "#586DD0" : "#686868"} />
                <DashIcon stroke={processingStage >= 2 ? "#586DD0" : "#686868"}/>
                <CompleteIcon fill={processingStage >= 3 ? "#586DD0" : "#686868"} />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "300px",
                }}
            >
                {orderStatusList.map(status => (     
                    <Typography 
                      key={status.processingStage}
                      variant="h6" 
                      sx={{
                          fontWeight: processingStage >= status.processingStage ? "700" : "400",
                          display: "flex",
                          fontFamily: "Inter",
                          fontSize: "12px",
                          color: processingStage >= status.processingStage ? "#586DD0" : "#686868",
                      }}
                  >
                      {status.name}
                    </Typography>
                ))}
            </Box>
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
              sx={{
                padding: "0",
                height: "40px",
                width: "40px",
                border: "none",
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick = {(e) => {
                e.stopPropagation()
                window.open('tel:900300400', '_self')
              }}
            >
              <img src={PhoneIcon} />
            </Box>
            <Box
              sx={{
                padding: "0",
                border: "none",
                height: "40px",
                width: "40px",
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <img src={msgIcon} />
            </Box>
          </Box>
        </Box>
    </Box>
  );
}

export default CurrentOrder;
