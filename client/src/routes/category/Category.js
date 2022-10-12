import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CategoryMenu from "../../shared/category-menu/CategoryMenu";
import ProductListing from "../../shared/product/ProductListing";
import BottomNav from "../../shared/bottom-nav/BottomNav";

import styles from "./Category.module.css";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SendIcon from "@mui/icons-material/Send";

import { categories } from "./CategoryProps.js";

import { mockProducts } from "../../mock_data/data/mockData.js";

import { useProducts } from "../../context/product/product-handler";
import { renderCategory } from "../../helper/renderProducts.js";

import apple from "../../assets/apple.png";

function Category() {
  let products = useProducts().slice(1);

  //Reset scroll to top
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  ///React Router Dom Hooks
  const params = useParams();
  const navigate = useNavigate();

  ///Find the correct props by :id { props.id, props.title, props.category }
  let renderedProducts = [];
  let props = categories.find((index) => index.id === params.id);

  ///If props is undefined, set it equal to "/" category
  if (!props) props = categories[0];

  ///Iterate through all the products list. Push to renderedProducts if categories match
  // for (let i = 0; i < products.length; i++) {
  //   const current = products[i];

  //   if (
  //     current.metadata.category === props.category ||
  //     props.category === "/"
  //   ) {
  //     renderedProducts.push(
  //       <ProductListing
  //         id={current.id}
  //         name={current.name}
  //         image={current.images[0]}
  //         description={current.description}
  //         price={current.prices[0].unit_amount}
  //         stock={current.metadata.quantity}
  //       />
  //     );
  //   }
  // }

  const navigateItems = () => {
    navigate(-1);
  };

  const sendSuggestions = () => {
    alert("Thank you for your suggestions.");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavigateBeforeIcon
          className={styles.back}
          style={{ width: 48, height: 48, color: "#FFFFFF" }}
          onClick={navigateItems}
        />
        <p className={styles.title}>{props.title}</p>
      </header>
      <div className={styles.page}>
        <div className={styles.supplies}>
          <ul className={styles.bigItemList}>
            {products.length > 0 ? (
              renderCategory(products, props.category, 0).map((product) => (
                <li>{product}</li>
              ))
            ) : (
              <h2>Waiting for loading...</h2>
            )}
          </ul>
        </div>

        <div>
          <p className={styles.suggestions}>Didn't find what you wanted?</p>
          <div className={styles.suggestionContainer}>
            <input
              className={styles.suggestionInput}
              type="text"
              placeholder="Request"
            />
            <button
              className={styles.suggestionSubmit}
              type="submit"
              onClick={sendSuggestions}
            >
              <SendIcon />
            </button>
          </div>
        </div>

        <div>
          <p className={styles.jumpToAnotherCategory}>
            Jump to another category
          </p>
        </div>

        <CategoryMenu />
      </div>
      <BottomNav />
    </div>
  );
}

export default Category;
