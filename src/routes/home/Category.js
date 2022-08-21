import React from "react";
import HomeCSS from "./Home.module.css";

import rightArrow from "../../assets/Home/right-arrow.svg";

const THUMBNAIL_LIST_MAX = 4;

const Category = ({ name, style, itemList }) => {
  return (
    <div className={HomeCSS.categoryContainer}>
      {/* Category Header */}
      <section className={HomeCSS.categoryHeader} style={style}>
        <h2>{name}</h2>
        <button>
          See All
          <img src={rightArrow} alt="See All" />
        </button>
      </section>

      {/* Rendered list of items */}
      <ul className={HomeCSS.bigItemList}>
        {itemList.map((item, index) => {
          if (index < THUMBNAIL_LIST_MAX) {
            return <li>{item}</li>;
          }
          return;
        })}
      </ul>
    </div>
  );
};

export default Category;
