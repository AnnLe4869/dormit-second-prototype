import React from "react";

import { Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import HomeCSS from "../Home.module.css";
import { homepageStyles, headers } from "../muiStyles";

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

function DerivedSections({ sections }) {
  return (
    <>
      {sections.map((section) => (
        <section className={HomeCSS.smallItemSection}>
          <Typography sx={headers.header3}>{section.sectionName}</Typography>
          {section.additionalComponent}
          <div className={HomeCSS.smallListContainer}>
            <ul className={HomeCSS.smallItemList} id={section.sectionListId}>
              {section.displayedItems.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>

            <ArrowBackIosNewIcon
              sx={homepageStyles.leftArrow}
              transform="scale(1.4)"
              onClick={() =>
                scrollCategoryBack(section.sectionListId, section.pixels, 174)
              }
            />

            <ArrowForwardIosIcon
              sx={homepageStyles.rightArrow}
              transform="scale(1.4)"
              onClick={() =>
                scrollCategoryNext(
                  section.sectionListId,
                  section.pixels,
                  174,
                  section.length - 6
                )
              }
            />
          </div>
        </section>
      ))}
    </>
  );
}

export default DerivedSections;
