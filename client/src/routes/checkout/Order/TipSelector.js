import React, { useState } from "react";
import { TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const MINTIP = 0;
const RUSHER_TIP_1 = 1.5;

const TipSelector = ({ setShowOtherTip, otherTip, handleOtherTipChange, setSelectedTip, setRusherTip, setOtherTip }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowOtherTip(false)
    }

    const handleClose = (e) => {
        setSelectedTip(RUSHER_TIP_1)
        setRusherTip(RUSHER_TIP_1)
        setOtherTip(0)
        setShowOtherTip(false)
    }

    return (
        <Box
            sx={{
                height: "35vh",
                overflow: "auto",
                padding: "20px",
            }}
        >   
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px"
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        fontSize: "18px"
                    }}
                >
                    Enter custom tip
                </Typography>
                <CloseIcon onClick={handleClose} />
            </Box>
            <Typography
                sx={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "14px",
                    marginBottom: "15px"
                }}
            >
                100% of your tip goes to your hardworking Rusher
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    value={otherTip.toFixed(2)}
                    min={MINTIP}
                    required
                    onChange={handleOtherTipChange}
                    onClick={handleOtherTipChange}
                    type={"number"}
                    placeholder='$ tip amount'
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                        style: {
                            fontSize: "16px",
                            fontFamily: "Inter",
                            fontWeight: "400",
                            color: "#686868"
                        }
                    }}
                    sx={{
                        borderRadius: `10px`,
                        width: "100%",
                        margin: "0 auto",
                        marginBottom: "15px",
                        padding: "3px 10px",
                        backgroundColor: "#F5F5F5",
                        '& fieldset': {
                            borderRadius: `10px`,
                        }
                    }}
                />
                <Button
                    type="submit"
                    sx={{
                        textTransform: "none",
                        width: "100%",
                        backgroundColor: "#000000",
                        color: "#FFFFFF",
                        borderRadius: "27px"
                    }}
                >
                    Confirm
                </Button>
            </form>
        </Box>
    )
}

export default TipSelector;