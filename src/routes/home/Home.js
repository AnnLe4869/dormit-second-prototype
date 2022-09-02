import React, {useEffect} from "react";

/*
 * Hooks & helpers
 */
import { useProducts } from "../../context/product/product-handler";

/*
 * Components
 */
import Header from "./Header";
import SpecialSection from "./sections/SpecialSection";
import OriginalSections from "./sections/OriginalSections";
import DerivedSections from "./sections/DerivedSections";

/*
 * Shared components
 */
import CategoryNav from "../../shared/category-nav/CategoryNav";
import ViewCart from "../../shared/view-cart/ViewCart";
import BottomNav from "../../shared/bottom-nav/BottomNav";

/*
 * Imported data
 */
import { originalSections, derivedSections } from "./sections/sectionData.js";

/*
 * Material UI Imports
 */
import Box from "@mui/material/Box";

/*
 * Style sheets
 */
import HomeCSS from "./Home.module.css";
import { homepageStyles } from "./muiStyles";

export default function HomePage() {
  const products = useProducts();

  useEffect(() => {
    console.log("products: ", products)
  }, [products])


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
          <CategoryNav navItems={originalSections} />

          {/**
           * Special sections
           * items in this section have different styling, thus has its own component
           */}

          {products.length > 0 
            ? <SpecialSection section={originalSections[0]} database={products.slice(1)}/>
            : <h3>Loading Specials...</h3>
          }
          

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

          {products.length > 0 
            ? <OriginalSections sections={originalSections} database={products.slice(1)} emuSections={products[0]}/>
            : <h3>Loading Sections...</h3>
          }
        </div>{" "}
        {/* homeContent */}
      </div>{" "}
      {/* homeContainer */}
      <ViewCart numItems="X" totalAmount="X.XX" />
      <BottomNav />
    </>
  );
}
