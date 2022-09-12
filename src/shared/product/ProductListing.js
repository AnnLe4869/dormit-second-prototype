import React, { useEffect, useState } from "react";
import Item from "./ProductDetails";
import { Image } from "../loading-image/Image";

import Dialog from "@mui/material/Dialog";
import styles from "./ProductListing.module.css";

/*
 * Imported Assets
 */

import greenCheck from "../../assets/ItemEntry/greenCheck.svg";
import purplePlus from "../../assets/ItemEntry/purplePlus.svg";
import {
  useRemoveProductFromCart,
  useSelectItem,
} from "../../context/user/cart-handler";
import { getCartFromLocStore } from "../../helper/getCartFromLocStore";

/*
 * Helper function that formats the price
 */
function priceFormat(price) {
  //Reverse toString the Number type of the price and store it in temp
  const temp = price.toString().split("").reverse().join("");

  //Initialize return string
  let priceString = "";

  for (let i = 0; i < temp.length; i++) {
    priceString = temp[i] + priceString;

    //Add the decimal to seperate cents and dollars
    if (i === 1) {
      priceString = "." + priceString;
    }
  }

  //If there are no digits for dollars, prepend a "0"
  if (priceString.length === 3) {
    priceString = "0" + priceString;
  }

  //Prepend the "$" when done formatting
  priceString = "$" + priceString;

  return priceString;
}

/*
 * Helper function which returns description of item stock
 */
function stockFormat(stock) {
  let stockDescription = <></>;

  if (stock === 0) {
    stockDescription = <p>Out of stock</p>;
  } else if (stock === 1) {
    stockDescription = <p className={styles.purpleFont}>Only 1 left!</p>;
  } else if (stock < 4) {
    stockDescription = <p className={styles.purpleFont}>Low in stock</p>;
  }

  return stockDescription;
}

const ProductListing = ({
  id,
  name,
  image,
  description,
  price,
  dealPrice,
  stock,
}) => {
  //useState() constant for Plus/Check icon
  const [inCart, setInCart] = useState(false);
  const selectItem = useSelectItem();
  const removeProductFromCart = useRemoveProductFromCart();

  //useState() to show item details popup window
  const [showDetails, setShowDetails] = useState(false);

  let added = inCart;

  //Format the price and stock description based on the data
  let formattedPrice = priceFormat(price);
  let stockDescription = stockFormat(stock);

  /*
   * Function which toggles Plus/Check icon flag.
   */
  function toggleCorner() {
    added = !added;
    setInCart(added);
    if (added) {
      selectItem(id);
    }

    if (!added) {
      removeProductFromCart(id);
    }
  }

  useEffect(() => {
    const localCart = getCartFromLocStore();
    const data = localCart.find((item) => item.product_id === id);

    if (data) {
      setInCart(true);
    }
  }, []);

  return (
    <>
      <div className={styles.itemContainer}>
        {/* Corner button (Plus/Check) */}
        <button className={styles.itemCorner} onClick={toggleCorner}>
          {inCart ? (
            <img src={greenCheck} alt="Added Item" />
          ) : (
            <img src={purplePlus} alt="Add Item" />
          )}
        </button>

        {/* Item image */}
        <button
          className={styles.itemImage}
          onClick={() => setShowDetails((o) => !o)}
        >
          <Image image={image} style={styles} />
        </button>

        {/* Item Info (Price, Stock) */}
        <section
          className={styles.itemInfo}
          style={stock ? {} : { color: "#686868" }}
        >
          <p className={styles.itemName}>{name}</p>
          {dealPrice ? (
            <>
              <p className={styles.purpleFont}>${dealPrice}</p>
              <p className={styles.strikeThrough}>{formattedPrice}</p>
            </>
          ) : (
            <p>{formattedPrice}</p>
          )}

          <div className={styles.stockInfo}>{stockDescription}</div>
        </section>
      </div>

      {/* Item Description Popup */}
      <div>
        <Dialog fullScreen open={showDetails} onClose={setShowDetails}>
          <Item
            id={id}
            name={name}
            image={image}
            description={description}
            price={formattedPrice}
            stock={stockDescription}
            onClose={setShowDetails}
            link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
          />
        </Dialog>
      </div>
    </>
  );
};

export default ProductListing;
