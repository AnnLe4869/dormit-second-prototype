import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import CategoryMenu from "../../shared/categoryMenu/CategoryMenu";
import Product from "../../shared/product/Product";
import BottomNav from "../../shared/bottom-nav/BottomNav";

import styles from "./Category.module.css";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SendIcon from "@mui/icons-material/Send";

import today from "../../assets/CategoryImages/todays-special.svg";
import candy from "../../assets/CategoryImages/candy.svg";
import chips from "../../assets/CategoryImages/chips.svg";
import drinks from "../../assets/CategoryImages/drinks.svg";
import snacks from "../../assets/CategoryImages/snacks.svg";
import sweets from "../../assets/CategoryImages/sweets.svg";
import icecream from "../../assets/CategoryImages/icecream.svg";
import readyToEat from "../../assets/CategoryImages/readytoeat.svg";
import categoryImage from "../../assets/CategoryImages/category.svg";

import { categories } from "./CategoryProps.js";

import { mockProducts } from "../../mock_data/data/mockData.js";

function Category() {
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
  for (let i = 0; i < mockProducts.length; i++) {
    const current = mockProducts[i];

    if (
      current.metadata.category === props.category ||
      props.category === "/"
    ) {
      renderedProducts.push(
        <Product
          id={current.id}
          name={current.name}
          image={current.images[0]}
          description={current.description}
          price={current.prices[0].unit_amount}
          stock={current.metadata.quantity}
        />
      );
    }
  }

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
            {renderedProducts.map((item) => {
              return <li>{item}</li>;
            })}
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

        <div className={styles.categories}>
          <CategoryMenu
            className="Today's Special"
            link="todays-special"
            image={today}
          />
          <CategoryMenu className="Candy" link="candy" image={candy} />
          <CategoryMenu className="Chips" link="chips" image={chips} />

          <CategoryMenu className="Drinks" link="drinks" image={drinks} />
          <CategoryMenu className="Snacks" link="snacks" image={snacks} />
          <CategoryMenu className="Sweets" link="sweets" image={sweets} />

          <CategoryMenu
            className="Ice Cream"
            link="icecream"
            image={icecream}
          />
          <CategoryMenu
            className="Ready To Eat"
            link="ready-to-eat"
            image={readyToEat}
          />
          <CategoryMenu className="Category" link="/" image={categoryImage} />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default Category;
