import React from 'react'

import styles from './CategoryNav.module.css';
import { headers, homepageStyles } from "../../routes/home/muiStyles";

import { Typography } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CategoryNav( {originalSections} ) {
    return (
        <div className={styles.homeCategoryContainer}>
            {/* <ul className={styles.homeCategoryNav2} id="categoryNav">
                {originalSections.map((section, index) => (
                    <li className={styles.categoryCard}>
                    <img
                        src={section.imgSrc}
                        alt={section.alt}
                        onClick={(e) => scrollToCategory(refArray, index)}
                    />
                    <Typography sx={headers.header6}>{section.name}</Typography>
                    </li>
                ))}
            </ul>
            <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() =>
                    scrollCategoryBack("categoryNav", { pixelCount: 0 }, 105)
                }
            />
            <ArrowForwardIosIcon
                sx={homepageStyles.rightArrow}
                transform="scale(1.4)"
                onClick={() =>
                    scrollCategoryNext(
                    "categoryNav",
                    { pixelCount: 0 },
                    105,
                    originalSections.length - 10
                    )
                }
            /> */}
        </div>
    )
}

export default CategoryNav
