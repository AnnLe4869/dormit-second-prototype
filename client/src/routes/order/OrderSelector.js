import React from "react";
import { Box, ToggleButton, Button, ToggleButtonGroup, Typography } from "@mui/material";
import { orderSelectorStyles } from './muiStyles'

const OrderSelector = ({ ordersSelected, setOrdersSelected }) => {
    return (
        <Box sx={orderSelectorStyles.selectorContainer}>
                    <ToggleButton
                        disableRipple
                        sx={orderSelectorStyles.selectorButton}
                        onClick={() => setOrdersSelected('current')}
                        selected={ordersSelected === 'current'}
                    >
                        Current
                    </ToggleButton>
                    <ToggleButton
                        disableRipple
                        sx={orderSelectorStyles.selectorButton}
                        onClick={() => setOrdersSelected('completed')}
                        selected={ordersSelected === 'completed'}
                    >
                        Completed
                    </ToggleButton>
        </Box>
    )
};

export default OrderSelector;