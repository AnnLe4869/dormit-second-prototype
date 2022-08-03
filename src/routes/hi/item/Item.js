import React, { useState }  from "react";
import styles from "./Item.module.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Item = (props) => {

  const addToCart = () => {
    alert("Added to cart!");
  }

  return (
    <div>
      <header className={styles.header}>
        <CloseIcon onClick={()=>props.onClose(false)} className={styles.close} />
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
          <p className={styles.addToCartText}>Add to Cart </p>
        </button>
      </div>
    </div>
  );
};
export default Item;
