// React imports
import { React, useState } from "react";

// Component import
import { Drawer, ImageList, ImageListItem, Divider } from "@mui/material";
import CartItem from "./CartItem";
import ItemEntry from "../../shared/item-entry/ItemEntry";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

// Style import
import styles from "./Cart.module.css";

// Image import
import apple from "../../mock_data/images/apple.jpg";

const Cart = () => {
  const [Show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(false);
  };

  const mockCartItems = [
    <CartItem key={1} desc="Apple" price={1} name="Apple" photo={apple} quantity={1} />,
    <CartItem
      key={2}
      desc="Banana"
      price={10}
      name="Banana"
      photo={apple}
      quantity={1}
    />,
    <CartItem
    key={3}
      desc="Chicken"
      price={4}
      name="Chicken"
      photo={apple}
      quantity={1}
    />,
  ];

  const mockMissingItems = [
    <ItemEntry key={1} id="apple" name="Apple" image={apple} price="Price" stock={2} />,
    <ItemEntry key={2} id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <ItemEntry key={3} id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <ItemEntry key={4} id="apple" name="Apple" image={apple} price="Price" stock={5} />,
  ];

  const getSubTotal = () => {
    let total = 0;
    mockCartItems.forEach((element) => {
      total += element.props.price * element.props.quantity;
    });
    return <div>${total}</div>;
  };

  const getTax = () => {
    let total = 0;
    mockCartItems.forEach((element) => {
      total += element.props.price * element.props.quantity;
    });
    let tax = total * 0.07;
    return <div>${tax}</div>;
  };

  const getTotal = () => {
    let subTotal = 0;
    mockCartItems.forEach((element) => {
      subTotal += element.props.price * element.props.quantity;
    });
    let tax = subTotal * 0.07;
    let total = subTotal + tax + 1.95;
    return <div>${total}</div>;
  };

  const getTotalCount = () => {
    let count = 0;
    mockCartItems.forEach((element) => {
      count += element.props.quantity;
    });
    return <div>{count} Items</div>;
  };

  return (
    <div>
      <Drawer
        anchor="bottom"
        open={Show}
        onClose={toggleShow}
        variant="temporary"
      >
        <div className={styles.header}>
          <div className={styles.headerText}>My Cart</div>
          <button className={styles.closebutton} onClick={toggleShow}>
            <CloseIcon />
          </button>
        </div>
        <Divider
          dark
          sx={{
            "margin-bottom": "25px",
            "margin-top": "15px",
            color: "black",
          }}
        />
        <div className={styles.body}>
          <div className={styles.CartItem}>
            {mockCartItems.map((item) => {
              return <div>{item}</div>;
            })}
          </div>
          <button className={styles.addmore} onClick={toggleShow}>
            Add More <AddCircleOutlineIcon/>
          </button>
          <p className={styles.missing}>Promotion Code</p>
          <div className={styles.promotion}>
            <input
              type="text"
              className={styles.promotionInput}
              placeholder="3 Promotions available"
            ></input>
            <button className={styles.viewAll}>
              View All <NavigateNextIcon/>
            </button>
          </div>
          <p className={styles.missing}>Order Summary</p>
        </div>
        <footer>
          <div className={styles.total}>
            <p>Subtotal</p>
            <p>{getSubTotal()}</p>
          </div>
          <div className={styles.total}>
            <p>Tax</p>
            <p>{getTax()}</p>
          </div>
          <div className={styles.total}>
            <p>Delivery</p>
            <p>$1.95</p>
          </div>
          <div className={styles.total}>
            <p>Total</p>
            <p>{getTotal()}</p>
          </div>
          <button className={styles.reviewOrderButton}>
            <div>{getTotalCount()}</div>
            <div>Review Order</div>
            <div>{getTotal()}</div>
          </button>
        </footer>
      </Drawer>
    </div>
  );
};

export default Cart;
