import React from "react";

import styles from "./Category.module.css";
import CategoryTemplate from "./categoryTemplate/CategoryTemplate";
import SearchIcon from '@mui/icons-material/Search';

function Category() {
  return (
    <div className={styles.container}>
      <header className={styles.headerMargin}>
        <div>
          <SearchIcon className={styles.searchIcon} style={{color: "#7141fa" }}/>
          <input className={styles.searchBar} type="search" placeholder="Search" />
        </div>

        <p className={styles.pageTitle}>Categories</p>
      </header>

      <div className={styles.categories}>
        <CategoryTemplate
          className="Snacks"
          link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
        />
        <CategoryTemplate
          className="Energy"
          link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
        />
        <CategoryTemplate
          className="Drinks"
          link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
        />

        <CategoryTemplate
          className="Sweets"
          link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
        />
        <CategoryTemplate
          className="Ice Cream"
          link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
        />
        <CategoryTemplate
          className="Ready-to-Eat"
          link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
        />

        <CategoryTemplate
          className="Category"
          link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
        />
        <CategoryTemplate
          className="Category"
          link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
        />
        <CategoryTemplate
          className="Category"
          link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
        />

      </div>
    </div>
  );
}

export default Category;