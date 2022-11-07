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

function CurrentOrder({ order }) {
  const totalProducts = order.items.length;
  
  console.log(order)

  const orderStatusList = [
    {
        name: "Confirmed",
        icon: {CheckBoxIcon}
    },
    {
        name: "Confirmed",
        icon: {CheckBoxIcon}
    },
    {
        name: "Confirmed",
        icon: {CheckBoxIcon}
    },
    {
        name: "Completed",
        icon: {CheckBoxIcon}
    },
  ]

  return (
    <Box 
        sx={{ 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            height: "223px",
            backgroundColor: "#7C91F426",
            borderRadius: "19px",
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
                    fontWeight: "400",
                    color: "#586DD0",
                    fontSize: "12px"
                }}
            >
                Order Confirmed • <span style={{fontWeight: "700"}}>&nbsp;{`5 min to pick up`}</span>
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
                padding: "4% 5%",
                height: "74px"
            }}
        >

            <Box
                sx={{
                    lineHeight: "20px",
                    display: "flex",
                    justifyContent: "space-evenly",
                }}
            >   
                {orderStatusList.map(status => (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    {/* <img src={status.icon} /> */}
                    <CheckBoxIcon />
                    {status.name !== "Completed" && <img src={dashIconComplete} styles={{color: "black"}} />}
                </Box>
            ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}
            >
                {orderStatusList.map(status => (     
                    <Typography 
                                variant="h6" 
                                sx={{
                                    fontWeight: "600",
                                    display: "flex",
                                    fontFamily: "Poppins",
                                    fontSize: "12px"
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
            variant="body1"
            sx={{
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "16px"
            }}
          >
            Alex G.
          </Typography>
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
            <Button
              sx={{
                padding: "0",
                outline: "none",
                border: "none",
                backgroundColor: "none",
                borderRadius: "999px",
              }}
            >
              <img style={{ width: "40px", padding: "0"  }} src={msgIcon} />
            </Button>
          </Box>
        </Box>
    </Box>
  );
}

export default CurrentOrder;
