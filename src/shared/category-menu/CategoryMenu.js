import React from "react";
import CategoryMenuItem from "./category-menu-item/CategoryMenuItem";

/* Import `categories`, an array of objects containing a category's `name`, `image`, and `link` */
import { categories } from "./categoryData.js";

/* Style Sheet */
import styles from "./CategoryMenu.module.css";

function CategoryMenu() {
  return (
    <div className={styles.container}>
      {/*  */}
      {categories.map((category) => {
        return (
          <CategoryMenuItem
            name={category.name}
            image={category.image}
            link={category.link}
          />
        );
      })}
    </div>
  );
}
export default CategoryMenu;
