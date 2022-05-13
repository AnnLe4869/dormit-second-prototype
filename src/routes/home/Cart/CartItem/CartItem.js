import React from "react";
import styles from "./CartItem.module.css";

const Cart_item = (item) => {
  return (
    <div className="box">
      <p>
        <button className={styles.CartItemdelete}></button>
        <div className={styles.image}></div>
        <div className={styles.itemName}>ItemName</div>
        <div className={styles.Details}>Details</div>
        <div className={styles.price}>Price</div>
      </p>
    </div>
  );
};

export default Cart_item;
