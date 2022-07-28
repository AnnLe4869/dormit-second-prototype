import React, { useState }  from "react";
import styles from "./Item.module.css";
import { useNavigate } from "react-router-dom";

const Item = (props) => {

  const addToCart = () => {
    alert("Added to cart!");
  }

  return (
    <div>
      <header className={styles.header}>
        <svg
          onClick={()=>props.onClose(false)}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className={styles.close}
          viewBox="0 0 16 16"
          id="itemClose"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </header>
      <div className={styles.display}>
        <img className={styles.image} src={props.link} />
        <p className={styles.name}>
          Item Name
          <span className={styles.price}>$X.xx</span>
        </p>
        <p className={styles.stock}>Only 1 left in stock!</p>
        <p className={styles.description}>Item description</p>

        <button className={styles.addToCartButton} onClick={addToCart}>
          <p className={styles.addToCartText}>Add To Cart </p>
        </button>
      </div>
    </div>
  );
};
export default Item;
