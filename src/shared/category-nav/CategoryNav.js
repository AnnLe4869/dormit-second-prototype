import React from "react";
import { convertToUpperCase } from "../../helper/convertToUpperCase";

import styles from "./CategoryNav.module.css";
import { headers, homepageStyles } from "./muiStyles";

import { Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/**
 * jump to selected element when called
 * in other word, we will move the view to the element with matched id
 */
function scrollToCategory(elementId) {
  document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
}
/**
 * scroll horizontally to the right (i.e next item) in the list of horizontal items
 */
function scrollCategoryNext(element, object, pixels, overflow) {
  const total = overflow * pixels;
  if (object.pixelCount < total) {
    document.getElementById(element).scrollTo((object.pixelCount += pixels), 0);
  }
}
/**
 * scroll horizontally to the left (i.e previous item) in the list of horizontal items
 */
function scrollCategoryBack(element, object, pixels) {
  if (object.pixelCount > 0) {
    document.getElementById(element).scrollTo((object.pixelCount -= pixels), 0);
  }
}

function CategoryNav({ navItems }) {
  return (
    <div className={styles.container}>
      <ul className={styles.navbar} id="categoryNav">
        {navItems.map((category) => (
          <li className={styles.navItem}>
            <img
              src={`data:image/svg+xml;base64,${btoa(category.category_icon)}`}
              alt={convertToUpperCase(category.category_name)}
              onClick={() => {
                scrollToCategory(category.category_name + "Section");
              }}
            />
            <Typography sx={headers.header6}>
              {convertToUpperCase(category.category_name)}
            </Typography>
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
            navItems.length - 10
          )
        }
      />
    </div>
  );
}

export default CategoryNav;
