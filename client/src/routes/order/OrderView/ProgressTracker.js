import React from "react";

// import icons as react components as they need to dynamically change styling
import {ReactComponent as DashIcon} from "../../../assets/Order/dash.svg"
import {ReactComponent as ConfirmedIcon} from "../../../assets/Order/confirmed.svg"
import {ReactComponent as PickedUpIcon} from "../../../assets/Order/pickedup.svg"
import {ReactComponent as OnTheWayIcon} from "../../../assets/Order/ontheway.svg"
import {ReactComponent as CompleteIcon} from "../../../assets/Order/complete.svg"

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function ProgressTracker({ processingStage, width, iconPadding, textPadding }) {

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
    <>
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: width,
                padding: iconPadding,
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
                padding: textPadding,
                width: width,
            }}
        >
            {orderStatusList.map(status => (     
                <Typography 
                    key={status.processingStage}
                    variant="h6" 
                    sx={{
                        fontWeight: processingStage === status.processingStage ? "700" : "400",
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
    </>
  )
}

export default ProgressTracker;
