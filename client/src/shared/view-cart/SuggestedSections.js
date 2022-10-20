import React from "react";
import HomeCSS from '../../routes/home/Home.module.css'
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SuggestedSections({ section, products }) {
    return (
        <>
        <Box sx={{marginBottom: "30px"}}>
          <Typography variant="h4">{section.sectionName}</Typography>
            <div className={HomeCSS.categoryListContainer}>
                <ul
                className={HomeCSS.categoryItemList}
                id={section.sectionId}
                >
                {section.renderFunction(products, 6).map(
                    (item) => item
                )}
                </ul>
            </div>
        </Box>
        </>
    )
};

export default SuggestedSections;