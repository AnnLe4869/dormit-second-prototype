import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { bottomNavStyles } from './muiStyles.js';

/*
 * Material-UI Imports
 */
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

/*
 * Material-UI Icons
 */
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PersonIcon from '@mui/icons-material/Person';

function BottomNav() {

    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        navigate(`/${newValue}`);
        setValue(newValue);
        console.log("NEW VALUE: ", value);
    }

    return (

        <BottomNavigation
            sx={bottomNavStyles.bottomNav}
            value={value}
            onChange={handleChange}
        >
            <BottomNavigationAction 
                label="Home" 
                value=""
                icon={<HomeIcon sx={bottomNavStyles.buttonNavIcon} />} 
                sx={bottomNavStyles.bottomNavButton}
            />
            <BottomNavigationAction 
                label="Search" 
                value="search"
                icon={<SearchIcon sx={bottomNavStyles.buttonNavIcon}/>} 
                sx={bottomNavStyles.bottomNavButton}
            />
            <BottomNavigationAction 
                label="Orders" 
                icon={<ReceiptLongIcon sx={bottomNavStyles.buttonNavIcon}/>} 
                sx={bottomNavStyles.bottomNavButton}
            />
            <BottomNavigationAction 
                label="Account" 
                icon={<PersonIcon sx={bottomNavStyles.buttonNavIcon}/>} 
                sx={bottomNavStyles.bottomNavButton}
            />
        </BottomNavigation>

        // <BottomNavigation
        //     sx={bottomNavStyles.bottomNav}
        //     value={value}
        //     onChange={handleChange}
        // >
        //     <Grid container spacing={0}>
        //         <Grid item xs={3} textAlign="center">
        //             <BottomNavigationAction 
        //                 label="Home" 
        //                 value="/"
        //                 icon={<HomeIcon sx={bottomNavStyles.buttonNavIcon} />} 
        //                 sx={bottomNavStyles.bottomNavButton}
        //             />
        //         </Grid>
        //         <Grid item xs={3} textAlign="center">
        //             <BottomNavigationAction 
        //                 label="Search" 
        //                 value="/search"
        //                 icon={<SearchIcon sx={bottomNavStyles.buttonNavIcon}/>} 
        //                 sx={bottomNavStyles.bottomNavButton}
        //             />
        //         </Grid>
        //         <Grid item xs={3} textAlign="center">
        //             <BottomNavigationAction 
        //                 label="Orders" 
        //                 icon={<ReceiptLongIcon sx={bottomNavStyles.buttonNavIcon}/>} 
        //                 sx={bottomNavStyles.bottomNavButton}
        //             />
        //         </Grid>
        //         <Grid item xs={3} textAlign="center">
        //             <BottomNavigationAction 
        //                 label="Account" 
        //                 icon={<PersonIcon sx={bottomNavStyles.buttonNavIcon}/>} 
        //                 sx={bottomNavStyles.bottomNavButton}
        //             />
        //         </Grid>
        //     </Grid>
        // </BottomNavigation>
    )
}

export default BottomNav