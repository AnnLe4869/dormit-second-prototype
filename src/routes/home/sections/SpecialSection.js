import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import HomeCSS from "../Home.module.css";
import { headers, homepageStyles } from "../muiStyles.js";

import { renderSpecials } from "../../../helper/renderProducts.js";

function SpecialSection({ section, products }) {
  /**
   * useNavigate which is used to redirect to a category page (e.g. 'See All` for the Candy section)
   */
  const navigate = useNavigate();

  function navigateCategory(link) {
    navigate(`/category/${link}`);
  }

  return (
    <section
      className={HomeCSS.todaysSpecial}
      id={section.category_name + "Section"}
    >
      <hr className={HomeCSS.sectionBarTop} />
      <div className={HomeCSS.todaysSpecialHeader}>
        <Button
          variant="contained"
          onClick={() => navigateCategory("todays-special")}
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
        <Typography sx={headers.header2}>Specials</Typography>
        <Typography
          sx={[headers.header3, { color: "#969696", fontWeight: 400 }]}
        >
          Get it while it's hot!
        </Typography>
      </div>

      <ul className={HomeCSS.bigItemList}>
        {renderSpecials(products, 4).map((item) => {
          return <li>{item}</li>;
        })}
      </ul>

      <hr className={HomeCSS.sectionBarBottom} />
    </section>
  );
}

export default SpecialSection;
