import React from "react";
import styles from "./CompletedOrderItem.module.css";

const CompletedOrderItem = ({ id, name, desc, price, quantity, pic }) => {
  return (
    <>
      <div className={styles.Border}>
        <div className={styles.picture}>
          <img
            style={{ border: "none", width: "85px", height: "85px" }}
            src={pic}
          ></img>
          <div className={styles.Count}>{quantity}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.name}>{name}</div>
          <div className={styles.desc}>{desc}</div>
          <div className={styles.price}>${price * quantity}</div>
        </div>
      </div>
    </>
  );
};

export default CompletedOrderItem;
