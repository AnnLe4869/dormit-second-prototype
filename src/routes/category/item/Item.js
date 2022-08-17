import React, { useState } from "react";
import styles from "./Item.module.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Item = (props) => {
  const [count, setCount] = React.useState(1);

  const addToCart = () => {
    alert("Added to cart!");
  };

  return (
    <div>
      <header className={styles.header}>
        <CloseIcon
          onClick={() => props.onClose(false)}
          className={styles.close}
        />
      </header>
      <div className={styles.display}>
        <img className={styles.image} src={props.link} />
        <p className={styles.name}> Item Name </p>
        <p className={styles.stock}>Low in stock, order quickly!</p>
        <p className={styles.description}>Item description</p>

        <p className={styles.price}> $X.xx </p>

        <ButtonGroup className={styles.quantity}>
          <Button
            style={{
              maxWidth: "35px",
              maxHeight: "35px",
              minWidth: "35px",
              minHeight: "35px",
            }}
            aria-label="reduce"
            variant="text"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <KeyboardArrowDownIcon />
          </Button>

          <div className={styles.countBox}>{count}</div>

          <Button
            style={{
              maxWidth: "35px",
              maxHeight: "35px",
              minWidth: "35px",
              minHeight: "35px",
            }}
            aria-label="increase"
            variant="text"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <KeyboardArrowUpIcon />
          </Button>
        </ButtonGroup>

        <button className={styles.addToCartButton} onClick={addToCart}>
          <p className={styles.addToCartText}>Add to Cart </p>
        </button>
      </div>
    </div>
  );
};
export default Item;
