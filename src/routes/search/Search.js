import React from "react";

import styles from "./Search.module.css";
import CategoryTemplate from "./categoryTemplate/CategoryTemplate";
import SearchIcon from "@mui/icons-material/Search";

/* CategoryImages components */
import today from "../../assets/CategoryImages/todays-special.svg";
import candy from "../../assets/CategoryImages/candy.svg";
import chips from "../../assets/CategoryImages/chips.svg";
import drinks from "../../assets/CategoryImages/drinks.svg";
import snacks from "../../assets/CategoryImages/snacks.svg";
import sweets from "../../assets/CategoryImages/sweets.svg";
import icecream from "../../assets/CategoryImages/icecream.svg";
import readyToEat from "../../assets/CategoryImages/readytoeat.svg";
import categoryImage from "../../assets/CategoryImages/category.svg";

/* ViewCart components */
import ViewCart from "../../shared/view-cart/ViewCart";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import BottomNav from "../../shared/bottom-nav/BottomNav";

function Search() {
  return (
      <div>
        <div className={styles.container}>
          <header className={styles.headerMargin}>
            <div>
              <SearchIcon
                className={styles.searchIcon}
                style={{ color: "#686868" }}
              />
              <input
                className={styles.searchBar}
                type="search"
                placeholder="Search DormIt"
              />
            </div>
          </header>

          <div>
            <div className={styles.categories}>
              <CategoryTemplate className="Today's Special" image={today} name="Today's Special" link="todaysSpecial"/>
              <CategoryTemplate className="Candy" image={candy} name="Candy" link="candy"/>
              <CategoryTemplate className="Chips" image={chips} name="Chips" link="chips"/>

              <CategoryTemplate className="Drinks" image={drinks} name="" link="drinks"/>
              <CategoryTemplate className="Snacks" image={snacks} name="" link="snacks"/>
              <CategoryTemplate className="Sweets" image={sweets} name="" link="sweets"/>

              <CategoryTemplate className="Ice Cream" image={icecream} name="" link="icecream"/>
              <CategoryTemplate className="Ready To Eat" image={readyToEat} name="" link="readyToEat"/>
              <CategoryTemplate className="Category" image={categoryImage} name="" link="placeholder"/>
            </div>
          </div>
        </div>
        <ViewCart numItems="X" totalAmount="X.XX" />
        <BottomNav />
      </div>
  );
}

export default Search;
