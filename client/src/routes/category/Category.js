import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CategoryMenu from "../../shared/category-menu/CategoryMenu";
import ProductListing from "../../shared/product/ProductListing";
import BottomNav from "../../shared/bottom-nav/BottomNav";

import styles from "./Category.module.css";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import navigateBeforeIcon from "../../assets/navigate-before-icon.svg";

import { Box } from "@mui/material";
import { categories } from "./CategoryProps.js";

import { useProducts } from "../../context/product/product-handler";
import { renderCategory, renderSpecials } from "../../helper/renderProducts.js";
import { getSection } from "../../helper/getProductsCategories";

import submitIcon from "../../assets/submit-icon.svg";

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
  console.log(props);
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

  const section = getSection(useProducts(), props.category);

  return (
    <div className={styles.container}>
      <Box
        sx={{
          display: "flex",
          position: "sticky",
          top: 0,
          height: "10vw",
          width: "100%",
          zIndex: 2,
          minHeight: "80px",
          maxHeight: "100px",
          alignItems: "center",
          justifyContent: "center",
          color: section.category_style.color,
          backgroundColor: section.category_style.background_color,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "20px",

            cursor: "pointer",
          }}
        >
          <svg
            width="14"
            height="23"
            viewBox="0 0 14 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={navigateItems}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.457 20.1448L3.3107 11.5L13.457 2.85519C13.5902 2.74166 13.7047 2.59571 13.7938 2.42566C13.8829 2.25561 13.9449 2.06479 13.9763 1.86411C14.0077 1.66342 14.0079 1.45679 13.9768 1.25602C13.9457 1.05525 13.884 0.864273 13.7952 0.693985C13.7064 0.523697 13.5922 0.377437 13.4591 0.263555C13.3261 0.149674 13.1767 0.0704018 13.0197 0.0302646C12.8627 -0.0098727 12.701 -0.0100892 12.5439 0.0296281C12.3868 0.0693454 12.2374 0.148219 12.1041 0.261744L0.602317 10.0615C0.417035 10.2194 0.265117 10.4333 0.160046 10.6842C0.0549747 10.9352 0 11.2154 0 11.5C0 11.7846 0.0549747 12.0648 0.160046 12.3158C0.265117 12.5667 0.417035 12.7806 0.602317 12.9385L12.1041 22.7383C12.2374 22.8518 12.3868 22.9307 12.5439 22.9704C12.701 23.0101 12.8627 23.0099 13.0197 22.9697C13.1767 22.9296 13.3261 22.8503 13.4591 22.7364C13.5922 22.6226 13.7064 22.4763 13.7952 22.306C13.884 22.1357 13.9457 21.9447 13.9768 21.744C14.0079 21.5432 14.0077 21.3366 13.9763 21.1359C13.9449 20.9352 13.8829 20.7444 13.7938 20.5743C13.7047 20.4043 13.5902 20.2583 13.457 20.1448V20.1448Z"
              fill={section.category_style.color}
            />
          </svg>
        </Box>
        <p className={styles.title}>{props.title}</p>
      </Box>
      <div className={styles.page}>
        <div className={styles.supplies}>
          <ul className={styles.bigItemList}>
            {props.category !== "specials"
              ? renderCategory(products, props.category, 0).map((product) => (
                  <li>{product}</li>
                ))
              : renderSpecials(products, 0).map((item) => <li>{item}</li>)}
          </ul>
        </div>

        <div className={styles.suggestionContainer}>
          <p className={styles.suggestions}>Didn't find what you wanted?</p>
          <div className={styles.inputContainer}>
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
              <img src={submitIcon} alt="submit-icon" />
            </button>
          </div>
        </div>

        <p className={styles.jumpToAnotherCategory}>Jump to another category</p>

        <CategoryMenu />
      </div>
      <BottomNav />
    </div>
  );
}

export default Category;
