import React from "react";
import HomeCSS from "./Home.module.css";

import { Button, Typography } from "@mui/material";

import { headers, homepageStyles } from './muiStyles.js';

const THUMBNAIL_LIST_MAX = 6;

const Category = ({ name, image, color1, color2, itemList }) => {
  return (
    <>
      <hr className={HomeCSS.sectionBarTop}/>
      <div className={HomeCSS.categoryHeader}>

        <img src={image} alt="Category Icon" />
        <Typography sx={headers.header3}>{name}</Typography>

        <Button 
          variant="contained" 
          sx={[homepageStyles.seeAll, {
            color: color1, 
            backgroundColor: color2,
            "&:hover": {
              backgroundColor: color2
          }
          }]}
        >
          <Typography sx={headers.seeAllFont}>See All</Typography>
        </Button>
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
    </>
  );
};

export default Category;
