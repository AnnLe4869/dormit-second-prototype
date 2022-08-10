import React, { useEffect, useState } from "react";
import styles from "../home/CartItem.module.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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

  const counter = () => {
    return (
      <div className={styles.quantity}>
        <button className={styles.incdec} onClick={increase}>
          <ArrowDropUpIcon/>
        </button>
        <p className={styles.counter}>{quan}</p>
        <button className={styles.incdec} onClick={decrease}>
          <ArrowDropDownIcon/>
        </button>
      </div>
    )
  }

  return (
    <>
      {item ? (
        <div className={styles.box}>
          <img src={photo} className={styles.image}></img>
          <div className={styles.details}>
            <p className={styles.itemName}>{name}</p>
            <p className={styles.description}>{desc}</p>
            <button className={styles.delete} onClick={toggleDel}>
              <DeleteOutlineIcon fontSize="large" />
            </button>
          </div>
          <div className={styles.priceAndCount}>
            <p>${price * quantity}</p>
            {counter()}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cart_item;
