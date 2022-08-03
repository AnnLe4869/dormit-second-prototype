import React from 'react'
import { useState } from 'react';
import { bottomNavStyles } from '../../muiStyles.js';

/*
 * Material-UI Imports
 */
import Grid from '@mui/material/Grid';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

/*
 * Material-UI Icons
 */
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PersonIcon from '@mui/icons-material/Person';

function BottomNavMui() {

    const [value, setValue] = useState(0);

    return (
        <BottomNavigation
            sx={bottomNavStyles.bottomNav}
            value={value}
            onChange={(event, newValue) => {setValue(newValue);}}
        >
            <Grid container spacing={0}>
                <Grid item xs={3} textAlign="center">
                    <BottomNavigationAction 
                        label="Home" 
                        icon={<HomeIcon sx={bottomNavStyles.buttonNavIcon} />} 
                        sx={bottomNavStyles.bottomNavButton}
                    />
                </Grid>
                <Grid item xs={3} textAlign="center">
                    <BottomNavigationAction 
                        label="Search" 
                        icon={<SearchIcon sx={bottomNavStyles.buttonNavIcon}/>} 
                        sx={bottomNavStyles.bottomNavButton}
                    />
                </Grid>
                <Grid item xs={3} textAlign="center">
                    <BottomNavigationAction 
                        label="Orders" 
                        icon={<ReceiptLongIcon sx={bottomNavStyles.buttonNavIcon}/>} 
                        sx={bottomNavStyles.bottomNavButton}
                    />
                </Grid>
                <Grid item xs={3} textAlign="center">
                    <BottomNavigationAction 
                        label="Account" 
                        icon={<PersonIcon sx={bottomNavStyles.buttonNavIcon}/>} 
                        sx={bottomNavStyles.bottomNavButton}
                    />
                </Grid>
            </Grid>
        </BottomNavigation>
    )
}

export default BottomNavMui