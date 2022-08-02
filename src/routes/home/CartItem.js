import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import styles from "../home/CartItem.module.css";

const Cart_item = ({ id, name, desc, quantity, photo, price }) => {
  const [item, setitem] = useState(true);
  const [quan, setquantity] = useState(quantity);

  const toggleDel = () => {
    setitem(false);
  };
  const increase = () => {
    setquantity(quan + 1);
  };
  const decrease = () => {
    setquantity(quan - 1);
  };

  return (
    <>
      {item ? (
        <div className={styles.box}>
          <img src={photo} className={styles.image}></img>
          <div className={styles.details}>
            <p className={styles.itemName}>{name}</p>
            <p className={styles.description}>{desc}</p>
            <p className={styles.price}>${price * quantity}</p>
          </div>
          <button className={styles.delete} onClick={toggleDel}>
            <img src="./delete.svg"></img>
          </button>

          <div className={styles.quantity}>
            <button className={styles.incdec} onClick={increase}>
              <img src="./decrease.svg"></img>
            </button>
            <p className={styles.counter}>{quan}</p>
            <button className={styles.incdec} onClick={decrease}>
              <img src="./increase.svg"></img>
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cart_item;
