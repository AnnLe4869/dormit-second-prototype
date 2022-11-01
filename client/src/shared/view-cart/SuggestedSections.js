import React from "react";
import HomeCSS from '../../routes/home/Home.module.css'
import { Box, Typography } from "@mui/material";
import { renderProducts } from '../../helper/renderProducts'

function SuggestedSections({ section, products }) {
    console.log(products)
    return (
        <>
        <Box sx={{marginBottom: "30px"}}>
          <Typography variant="h4">{section.sectionName}</Typography>
            <div className={HomeCSS.categoryListContainer}>
                <ul
                className={HomeCSS.categoryItemList}
                id={section.sectionId}
                >
                {renderProducts(products, section.sectionName, 6).map(
                    (item) => item
                )}
                </ul>
            </div>
        </Box>
        </>
    )
};

export default SuggestedSections;