import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import HomeCSS from "../Home.module.css";
import { headers, homepageStyles } from "../muiStyles.js";

import { renderCategory } from "../../../helper/renderProducts.js";
import { convertToUpperCase } from "../../../helper/convertToUpperCase";

function OriginalSections({ sections, products }) {
  /**
   * useNavigate which is used to redirect to a category page (e.g. 'See All` for the Candy section)
   */
  const navigate = useNavigate();

  function navigateCategory(link) {
    navigate(`/category/${link}`);
  }

  return (
    <>
      {sections.map((section) => (
        <section
          className={HomeCSS.categoryContainer}
          id={section.category_name + "Section"}
        >
          <hr className={HomeCSS.sectionBarTop} />
          <div className={HomeCSS.categoryHeader}>
            <div dangerouslySetInnerHTML={{ __html: section.category_icon }} />
            <Typography sx={headers.header3}>
              {convertToUpperCase(section.category_name)}
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigateCategory(section.category_name)}
              sx={[
                homepageStyles.seeAll,
                {
                  color: section.category_style.color,
                  backgroundColor: section.category_style.background_color,
                  "&:hover": {
                    backgroundColor: section.category_style.background_color,
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
              id={section.category_name + "List"}
            >
              {renderCategory(products, section.category_name, 6).map(
                (item) => item
              )}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}

export default OriginalSections;