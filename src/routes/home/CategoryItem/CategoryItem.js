import React from "react";
import styles from "./CategoryItem.module.css";

const CateItems = () => {
  return (
    <>
      <div>
        <div className={styles.cateOutline}>
          <img className={styles.cateImage} src="/lays.png"></img>
          <button className={styles.catePlus}>
            <img src="/DesktopAdd.svg"></img>
          </button>
          <div className={styles.catePrice}>$Price</div>
        </div>
      </div>
    </>
  );
};

export default CateItems;
