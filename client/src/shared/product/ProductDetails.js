import exitIcon from "../../assets/exit-icon.svg";
import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Dialog, Slide, TransitionComponent } from "@mui/material";

import React from "react";
import {
  useIncrementItemCount,
  useSelectItem,
} from "../../context/user/cart-handler";
import styles from "./ProductDetails.module.css";
import { useActivateSuccessAlert } from "../../context/alert/alert-handler";

/*
id={id} name={name} image={image} description={description} price={price} stock={stock}

*/

const ProductDetails = (props) => {
  const [count, setCount] = React.useState(1);
  const selectItem = useSelectItem();
  const incrementItemCount = useIncrementItemCount();
  const activateSuccessAlert = useActivateSuccessAlert();

  const addToCart = () => {
    selectItem(props.id);
    activateSuccessAlert(`${props.name} added to cart!`);
    for (let i = 1; i < count; i++) {
      incrementItemCount(props.id);
    }
  };

  return (
    <Dialog
      fullScreen
      open={props.showDetails}
      TransitionComponent={Transition}
      onClose={props.handleClose}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        style: { borderTopRightRadius: 16, borderTopLeftRadius: 16 },
      }}
      sx={{ marginTop: "90px" }}
    >
      <div className={styles.container}>
        <img
          src={exitIcon}
          onClick={props.handleClose}
          className={styles.close}
        />
        <div className={styles.content}>
          <img src={props.image} alt={props.name} />
          <p className={styles.name}>{props.name}</p>
          <p className={styles.stock}>{props.stock}</p>
          <p className={styles.description}>{props.description}</p>

          <p className={styles.price}>{props.price}</p>
          <div className={styles.priceCountContent}>
            <div className={styles.quantity}>
              <button
                aria-label="reduce"
                variant="text"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <img src={arrowDownIcon} />
              </button>

              <div className={styles.countBox}>{count}</div>
              <button
                aria-label="increase"
                variant="text"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <img src={arrowUpIcon} />
              </button>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.addToCartButton} onClick={addToCart}>
              <p className={styles.addToCartText}>Add to Cart </p>
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
export default ProductDetails;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
