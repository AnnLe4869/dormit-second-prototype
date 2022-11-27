import React, { useContext, useEffect } from "react";

/*
 * Hooks & helpers
 */
import { useProducts } from "../../context/product/product-handler";
import { getCategories } from "../../helper/getProductsCategories";
import { getSection } from "../../helper/getProductsCategories";
import { getProducts } from "../../helper/getProductsCategories";

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

import { Box, Typography, Grid } from "@mui/material";

/*
 * Style sheets
 */
import HomeCSS from "./Home.module.css";
import { homepageStyles, headers } from "./muiStyles";
import { UserContext } from "../../context/user/user-context";
import ucsdLogo from "../../assets/ucsdLogo.svg";

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

          <hr className={HomeCSS.sectionBarTop} />
          {products.length > 0 && (
            <SpecialSection
              section={getSection(products, "specials")}
              products={getProducts(products)}
            />
          )}

          {/**
           * sections for derived items - section which properties derived from data
           * like Trending or Deals sections
           */}
          <hr className={HomeCSS.sectionBarTop} />
          <DerivedSections
            products={getProducts(products)}
            sections={derivedSections}
          />

          {/* Bulletin */}
          <section>
            <div className={HomeCSS.bulletinContainer}>
              <div className={HomeCSS.bulletinBox}>
                <Typography sx={headers.bulletinBox1Header1}>
                  Welcome to UCSD
                </Typography>
                <Typography sx={headers.bulletinBox1Header2}>
                  Store Hours:
                </Typography>
                <Typography sx={headers.bulletinBox1Header3}>
                  6pm - 1am
                </Typography>
                <img
                  src={ucsdLogo}
                  className={HomeCSS.ucsdLogo}
                  alt="ucsd-logo-icon"
                />
              </div>
              <div className={HomeCSS.bulletinBox}>
                <Typography sx={headers.bulletinBox1Header1}>
                  Welcome to UCSD
                </Typography>
                <Typography sx={headers.bulletinBox1Header2}>
                  Store Hours:
                </Typography>
                <Typography sx={headers.bulletinBox1Header3}>
                  6pm - 1am
                </Typography>
                <img
                  src={ucsdLogo}
                  className={HomeCSS.ucsdLogo}
                  alt="ucsd-logo-icon"
                />
              </div>
              <div className={HomeCSS.bulletinBox}>
                <Typography sx={headers.bulletinBox1Header1}>
                  Welcome to UCSD
                </Typography>
                <Typography sx={headers.bulletinBox1Header2}>
                  Store Hours:
                </Typography>
                <Typography sx={headers.bulletinBox1Header3}>
                  6pm - 1am
                </Typography>
                <img
                  src={ucsdLogo}
                  className={HomeCSS.ucsdLogo}
                  alt="ucsd-logo-icon"
                />
              </div>
            </div>
          </section>

          {/**
           * sections for category items
           * we list all section except the Special section
           */}

          {products.length > 0 ? (
            <OriginalSections
              sections={getCategories(products)}
              products={getProducts(products)}
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
