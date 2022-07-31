import React, { useState } from "react";
import styles from "../checkout/CartItem.module.css";

const CartItem = () => {
  return (
    <div className={styles.box}>
      <p>
        <button className={styles.CartItemdelete}><img src="./Delete.svg"></img></button>
        <div className={styles.image}></div>
        <div className={styles.itemName}>ItemName</div>
        <div className={styles.Details}>Details</div>
        <div className={styles.price}>Price</div>
      </p>
    </div>
  );
};

export default CartItem;
