import React from 'react'
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import HomeCSS from "../Home.module.css";
import { headers, homepageStyles } from "../muiStyles.js";

function OriginalSections( {sections} ){

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
            .map((section) => (
              <section
                className={HomeCSS.categoryContainer}
                id={section.sectionId}
              >
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
                        color: section.color,
                        backgroundColor: section.backgroundColor,
                        "&:hover": {
                          backgroundColor: section.backgroundColor,
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
                    {  section.displayedItems.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              </section>
            ))}
        </>
    )
}

export default OriginalSections
