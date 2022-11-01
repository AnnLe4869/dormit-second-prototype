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
import { ReactComponent as UcsdLogo } from "../../assets/ucsdLogo.svg";

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
              section={getSection(products, "specials")}
              products={getProducts(products)}
            />
          )}

          {/**
           * sections for derived items - section which properties derived from data
           * like Trending or Deals sections
           */}
          <DerivedSections
            products={getProducts(products)}
            sections={derivedSections}
          />

          {/* Bulletin */}
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ sm: 0 }}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item xs={12} sm={5.8}>
              <Box sx={homepageStyles.bulletinBox1}>
                <Typography sx={headers.bulletinBoxHeader1}>
                  Welcome to UCSD
                </Typography>
                <Typography sx={headers.header5}>Store Hours:</Typography>
                <Typography sx={headers.header4}>6pm - 1am</Typography>
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    overflow: "hidden",
                  }}
                >
                  <UcsdLogo />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5.8}>
              <Grid container sx={homepageStyles.bulletinBox2}>
                <Grid item xs={8} md={9} sm={8.5} sx={{ padding: "25px 30px" }}>
                  <Typography sx={headers.bulletinBoxHeader2}>
                    Call-to-action!
                  </Typography>
                  <Typography sx={headers.header6}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={3}
                  sm={3.5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#E5E5E5",
                    color: "black",
                  }}
                >
                  Image
                </Grid>
              </Grid>
            </Grid>
          </Grid>

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
