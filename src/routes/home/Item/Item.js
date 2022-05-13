import React from "react";
import styles from "./Item.module.css";

const Items = () => {
  return (
    <>
      <div>
        <div className={styles.outline}>
          <img className={styles.image} src="/cheetos.png"></img>
          <button className={styles.Itemplus} style={{ cursor: "pointer" }}>
            <img src="/DesktopAdd.svg"></img>
          </button>
          <div className={styles.price}>$Price</div>
        </div>
      </div>
    </>
  );
};

export default Items;
