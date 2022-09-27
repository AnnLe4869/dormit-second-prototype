import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import HomeCSS from "../Home.module.css";
import { headers, homepageStyles } from "../muiStyles.js";

import { renderCategory } from "../../../helper/renderProducts.js";

function OriginalSections({ sections, database, emuSections }) {
  /**
   * useNavigate which is used to redirect to a category page (e.g. 'See All` for the Candy section)
   */
  const navigate = useNavigate();

  function navigateCategory(link) {
    navigate(`/category/${link}`);
  }

  return (
    <>
      {sections
        .filter((section) => section.sectionId !== "specialsSection")
        .map((section, index) => (
          <section className={HomeCSS.categoryContainer} id={section.sectionId}>
            <hr className={HomeCSS.sectionBarTop} />
            <div className={HomeCSS.categoryHeader}>
              <img src={section.imgSrc} alt={section.alt} />
              <Typography sx={headers.header3}>
                {section.sectionName}
              </Typography>

              <Button
                variant="contained"
                onClick={() => navigateCategory(section.link)}
                sx={[
                  homepageStyles.seeAll,
                  {
                    color: emuSections.categories[index].category_style.color,
                    backgroundColor:
                      emuSections.categories[index].category_style
                        .background_color,
                    "&:hover": {
                      backgroundColor:
                        emuSections.categories[index].category_style
                          .background_color,
                    },
                  },
                ]}
              >
                <Typography sx={headers.seeAllFont}>See All</Typography>
              </Button>
            </div>

            <div className={HomeCSS.categoryListContainer}>
              <ul
                className={HomeCSS.categoryItemList}
                id={section.sectionListId}
              >
                {renderCategory(
                  database,
                  emuSections.categories[index].category_name,
                  6
                ).map((item) => item)}
              </ul>
            </div>
          </section>
        ))}
    </>
  );
}

export default OriginalSections;
