import React, { useState } from "react";
import ItemCSS from "./ItemEntry.module.css";

/*
 * Imported Assets
 */
import greenCheck from "../../assets/ItemEntry/greenCheck.svg";
import purplePlus from "../../assets/ItemEntry/purplePlus.svg";

const ItemEntry = ({ id, name, image, price, dealPrice, stock }) => {
  //useState() constant for Plus/Check icon
  const [inCart, setInCart] = useState(false);

  let added = inCart;

  /*
   * Function which toggles Plus/Check icon flag.
   */
  function toggleCorner() {
    added = !added;
    setInCart(added);
  }

  /*
   * onClick listener which is called when an item is clicked
   */
  function toggleImage() {
    alert(name);
  }

  /*
   * Function which returns description of item stock
   */
  function checkStock(stock) {
    if (stock === 0) {
      // console.log("Out of stock");
      return <p>Out of stock</p>;
    } else if (stock === 1) {
      // console.log("Only 1 left!");
      return <p className={ItemCSS.purpleFont}>Only 1 left!</p>;
    } else if (stock < 4) {
      // console.log("Low in stock");
      return <p className={ItemCSS.purpleFont}>Low in stock</p>;
    }
    return;
  }

  return (
    <div className={ItemCSS.itemContainer}>
      {/* Corner button (Plus/Check) */}
      <button className={ItemCSS.itemCorner} onClick={toggleCorner}>
        {inCart ? (
          <img src={greenCheck} alt="Added Item" />
        ) : (
          <img src={purplePlus} alt="Add Item" />
        )}
      </button>

      {/* Item image */}
      <button className={ItemCSS.itemImage} onClick={toggleImage}>
        <img src={image} alt="Item" />
      </button>

      {/* Item Info (Price, Stock) */}
      <section
        className={ItemCSS.itemInfo}
        style={stock ? {} : { color: "#686868" }}
      >
        <p className={ItemCSS.itemName}>{name}</p>
        {dealPrice ? (
          <>
            <p className={ItemCSS.purpleFont}>${dealPrice}</p>
            <p className={ItemCSS.strikeThrough}>${price}</p>
          </>
        ) : (
          <p>${price}</p>
        )}

        <div className={ItemCSS.stockInfo}>{checkStock(stock)}</div>
      </section>
    </div>
  );
};

export default ItemEntry;
