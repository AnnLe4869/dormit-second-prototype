import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormControlLabel, RadioGroup, Typography, Radio } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { reportPageStyles } from "./muiStyles";
import {ReactComponent as CheckedIcon} from '../../../assets/Order/checked.svg'

const Report = ({ setDrawerState }) => {
    const [selected, setSelected] = useState();

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Container
            sx={{
                height: "90vh",
                overflow: "auto"
            }}
        >
            <Box
                sx={{
                position: "sticky",
                top: "0",
                width: "100%",
                backgroundColor: "#FFFFFF",
                zIndex: "1"
                }}
            >
            <Box
            sx={reportPageStyles.reportPageHeader}
            >
            <Typography
                sx={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "28px"
                }}
                variant="Mobile Title 1"
            >
                Help
            </Typography>
            <Button
                sx={reportPageStyles.closeButton}
                onClick={() => setDrawerState(false)}
            >
                <CloseIcon sx={{fontSize: "35px"}}/>
            </Button>
            </Box>
            <Box
                sx={reportPageStyles.pageMessageBox}
            >
                <Typography
                    sx={{
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        fontSize: "22px",
                        textAlign: "center",
                        marginBottom: "12px"
                    }}
                >
                    What can I help you with?
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Inter",
                        fontWeight: "400",
                        fontSize: "16px",
                        textAlign: "center",
                        width: "70%",
                        marginBottom: "30px"
                    }}
                >
                    Please <span style={{fontWeight: "700"}}>select one</span> and wait to connect with a supervisor!
                </Typography>
                <form onSubmit={handleFormSubmit}>
                    <FormControl>
                        <RadioGroup>
                            <FormControlLabel onClick={() => setSelected('Cancel Order')} sx={selected === 'Cancel Order' ? reportPageStyles.radioLabelSelectedBox : reportPageStyles.radioLabelBox} value="Cancel Order" control={<Radio checkedIcon={<CheckedIcon />} sx={reportPageStyles.radioButton} />} label="Cancel Order"/>
                            <FormControlLabel onClick={() => setSelected('Change Address')} sx={selected === 'Change Address' ? reportPageStyles.radioLabelSelectedBox : reportPageStyles.radioLabelBox} value="Change Address" control={<Radio checkedIcon={<CheckedIcon />} />} label="Change Address"/>
                            <FormControlLabel onClick={() => setSelected('Payment/Refund Problem')} sx={selected === 'Payment/Refund Problem' ? reportPageStyles.radioLabelSelectedBox : reportPageStyles.radioLabelBox} value="Payment/Refund Problem" control={<Radio checkedIcon={<CheckedIcon />} />} label="Payment/Refund Problem"/>
                            <FormControlLabel onClick={() => setSelected('Something Else')} sx={selected === 'Something Else' ? reportPageStyles.radioLabelSelectedBox : reportPageStyles.radioLabelBox} value="Something Else" control={<Radio checkedIcon={<CheckedIcon />} />} label="Something Else"/>
                        </RadioGroup>
                        <Button 
                            type="submit"
                            sx={{
                                width: "323px",
                                height: "47px",
                                backgroundColor: "#7141FA",
                                borderRadius: "30px",
                                textTransform: "none",
                                color: "#FFFFFF",
                                fontWeight: "700",
                                fontFamily: "Poppins",
                                fontSize: "20px",
                                marginTop: "30px",
                                '&:focus': {
                                    backgroundColor: "#7141FA",
                                }
                            }}
                        >
                            Connect
                        </Button>
                    </FormControl>
                </form>
            </Box>
      </Box>
    </Container>
    )
}

export default Report;