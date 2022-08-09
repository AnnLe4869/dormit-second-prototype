import React from "react";

import styles from "./Category.module.css";
import CategoryTemplate from "./categoryTemplate/CategoryTemplate";
import SearchIcon from '@mui/icons-material/Search';

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
import { theme } from "../../muiStyles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import BottomNav from "../../shared/bottom-nav/BottomNav";

function Category() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <div className={styles.container}>
        <header className={styles.headerMargin}>
          <div>
            <SearchIcon className={styles.searchIcon} style={{color: "#686868" }}/>
            <input className={styles.searchBar} type="search" placeholder="Search DormIt" />
          </div>
        </header>

        <div >
          <div className={styles.categories}>
            <CategoryTemplate
              className="Today's Special"
              link={today}
            />
            <CategoryTemplate
              className="Candy"
              link={candy}
            />
            <CategoryTemplate
              className="Chips"
              link={chips}
            />

            <CategoryTemplate
              className="Drinks"
              link={drinks}
            />
            <CategoryTemplate
              className="Snacks"
              link={snacks}
            />
            <CategoryTemplate
              className="Sweets"
              link={sweets}
            />

            <CategoryTemplate
              className="Ice Cream"
              link={icecream}
            />
            <CategoryTemplate
              className="Ready To Eat"
              link={readyToEat}
            />
            <CategoryTemplate
              className="Category"
              link={categoryImage}
            />
          </div>
        </div>
        
      </div>
      <ViewCart numItems="X" totalAmount="X.XX" />
      <BottomNav/>
    </div>
    </ThemeProvider>
  );
}

export default Category;
