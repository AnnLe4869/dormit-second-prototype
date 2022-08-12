import React from "react";
import HomeCSS from "./Home.module.css";

import { Button, Typography } from "@mui/material";

import { headers, homepageStyles } from './muiStyles.js';

const THUMBNAIL_LIST_MAX = 6;

const Category = ({ name, image, color1, color2, itemList }) => {
  return (
    <div className={HomeCSS.categoryContainer}>
      <hr className={HomeCSS.sectionBarTop}/>
      <div className={HomeCSS.categoryHeader}>

        <img src={image} alt="Category Icon" />
        <Typography sx={headers.header3}>{name}</Typography>

      </div>

      <div className={HomeCSS.categoryListContainer}>
        <ul className={HomeCSS.categoryItemList}>
          {itemList.map((item, index) => {
            if (index < THUMBNAIL_LIST_MAX){
              return <li>{item}</li>;
            }
            return;
          })}
        </ul>
      </div>

      <Button 
          variant="contained" 
          sx={[homepageStyles.categorySeeAll, {
            color: color1, 
            backgroundColor: color2,
            "&:hover": {
              backgroundColor: color2
          }
          }]}
        >
          <Typography sx={headers.categorySeeAllFont}>See All</Typography>
        </Button>
    </div>
  );
};

export default Category;
