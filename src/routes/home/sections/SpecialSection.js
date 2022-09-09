import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import HomeCSS from "../Home.module.css";
import { headers, homepageStyles } from "../muiStyles.js";

import { renderSpecials } from "../../../helper/renderProducts.js";

function SpecialSection({ section, database }) {
  /**
   * useNavigate which is used to redirect to a category page (e.g. 'See All` for the Candy section)
   */
  const navigate = useNavigate();

  function navigateCategory(link) {
    navigate(`/category/${link}`);
  }

  return (
    <section className={HomeCSS.todaysSpecial} id={section.sectionId}>
      <hr className={HomeCSS.sectionBarTop} />
      <div className={HomeCSS.todaysSpecialHeader}>
        <Button
          variant="contained"
          onClick={() => navigateCategory("todays-special")}
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
        <Typography sx={headers.header2}>{section.sectionName}</Typography>
        <Typography
          sx={[headers.header3, { color: "#969696", fontWeight: 400 }]}
        >
          Get it while it's hot!
        </Typography>
      </div>

      <ul className={HomeCSS.bigItemList}>
        {renderSpecials(database, 4).map((item) => {
          return <li>{item}</li>;
        })}
      </ul>

      <hr className={HomeCSS.sectionBarBottom} />
    </section>
  );
}

export default SpecialSection;
