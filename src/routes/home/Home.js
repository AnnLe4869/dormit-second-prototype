import React, { useContext } from "react";

/*
 * Hooks & helpers
 */
import { useProducts } from "../../context/product/product-handler";
import { getCategories } from "../../helper/getCategories";

/*
 * Components
 */
import Header from "./Header";
import DerivedSections from "./sections/DerivedSections";
import OriginalSections from "./sections/OriginalSections";
import SpecialSection from "./sections/SpecialSection";

/*
 * Shared components
 */
import BottomNav from "../../shared/bottom-nav/BottomNav";
import CategoryNav from "../../shared/category-nav/CategoryNav";
import ViewCart from "../../shared/view-cart/ViewCart";

/*
 * Imported data
 */
import { derivedSections } from "./sections/sectionData.js";

/*
 * Material UI Imports
 */
import Box from "@mui/material/Box";

/*
 * Style sheets
 */
import HomeCSS from "./Home.module.css";
import { homepageStyles } from "./muiStyles";
import { UserContext } from "../../context/user/user-context";

export default function HomePage() {
  const products = useProducts();
  const { state } = useContext(UserContext);

  return (
    <>
      <Header />
      <div className={HomeCSS.homeContainer}>
        <div className={HomeCSS.homeContent}>
          {/**
           * Category Nav
           * items in this section will feature clickable icons that will scroll to a
           * section in the page
           */}
          {products.length > 0 ? (
            <CategoryNav navItems={getCategories(products)} />
          ) : (
            <h3>Loading...</h3>
          )}
          {/**
           * Special sections
           * items in this section have different styling, thus has its own component
           */}

          {products.length > 0 && (
            <SpecialSection
              section={
                getCategories(products)[
                  getCategories(products).findIndex(
                    (e) => e.category_name === "specials"
                  )
                ]
              }
              database={products.slice(1)}
            />
          )}

          {/**
           * sections for derived items - section which properties derived from data
           * like Trending or Deals sections
           */}
          <DerivedSections sections={derivedSections} />

          {/* Bulletin */}
          <section className={HomeCSS.homeBulletin}>
            <Box sx={homepageStyles.bulletinBox} />
            <Box sx={homepageStyles.bulletinBox} />
          </section>

          {/**
           * sections for category items
           * we list all section except the Special section
           */}

          {products.length > 0 ? (
            <OriginalSections
              sections={getCategories(products)}
              products={products.slice(1)}
            />
          ) : (
            <h3>Loading Sections...</h3>
          )}
        </div>{" "}
        {/* homeContent */}
      </div>{" "}
      {/* homeContainer */}
      <ViewCart numItems={state.cart?.length} totalAmount="X.XX" />
      <BottomNav />
    </>
  );
}
