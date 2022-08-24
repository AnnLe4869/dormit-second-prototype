import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useProducts } from "../../context/product/product-handler";
import HomeCSS from "./Home.module.css";
import { headers, homepageStyles } from "./muiStyles";

import Header from "./Header";
import Product from "../../shared/product/Product";
import ViewCart from "../../shared/view-cart/ViewCart";
import BottomNav from "../../shared/bottom-nav/BottomNav";

import CategoryNav from "../../shared/categoryNav/CategoryNav";

import apple from "../../assets/apple.png";
import candy from "../../assets/Home/candy.svg";
import chips from "../../assets/Home/chips.svg";
import drinks from "../../assets/Home/drinks.svg";
import icecream from "../../assets/Home/icecream.svg";
import ready from "../../assets/Home/ready.svg";
import snacks from "../../assets/Home/snacks.svg";
import specials from "../../assets/Home/specials.svg";
import sweets from "../../assets/Home/sweets.svg";
import innout from "../../assets/innout.png";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

/**
 * jump to selected element when called
 * in other word, we will move the view to the element with matched id
 */
function scrollToCategory(elementId) {
  document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
}
/**
 * scroll horizontally to the right (i.e next item) in the list of horizontal items
 */
function scrollCategoryNext(element, object, pixels, overflow) {
  const total = overflow * pixels;
  if (object.pixelCount < total) {
    document.getElementById(element).scrollTo((object.pixelCount += pixels), 0);
  }
}
/**
 * scroll horizontally to the left (i.e previous item) in the list of horizontal items
 */
function scrollCategoryBack(element, object, pixels) {
  if (object.pixelCount > 0) {
    document.getElementById(element).scrollTo((object.pixelCount -= pixels), 0);
  }
}

export default function HomePage() {
  const products = useProducts();

  /**
   * useNavigate which is used to redirect to a category page (e.g. 'See All` for the Candy section)
   */
  const navigate = useNavigate();

  function navigateCategory(link) {
    navigate(`/category/${link}`);
  }

  /**
   * mock product data
   */
  const mockSpecialItems = [
    <Product
      id="innout"
      name="In-N-Out Burger"
      image={innout}
      price="3.45"
      stock={2}
    />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={5} />,
  ];

  const mockForYouItems = [
    <Product id="apple" name="Apple" image={apple} price="Price" stock={2} />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={5} />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={2} />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={5} />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <Product id="apple" name="Apple" image={apple} price="Price" stock={5} />,
  ];

  /**
   * these are sections that we get from database
   */
  const originalSections = [
    {
      sectionId: "specialsSection",
      sectionListId: "specialsList",
      sectionName: "Specials",
      alt: "Specials",
      link: "todaysSpecial",
      color: "#7140FA",
      backgroundColor: "#E5DCFF",
      imgSrc: specials,
      pixels: { pixelCount: 0 },
      displayedItems: mockSpecialItems,
    },
    {
      sectionId: "candySection",
      sectionListId: "candyList",
      sectionName: "Candy",
      alt: "Candy section",
      link: "candy",
      color: "#D4162E",
      backgroundColor: "#FCBAC2",
      imgSrc: candy,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "chipsSection",
      sectionListId: "chipsList",
      sectionName: "Chips",
      alt: "Chips section",
      link: "chips",
      color: "#BD653C",
      backgroundColor: "#FFD9C7",
      imgSrc: chips,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "drinksSection",
      sectionListId: "drinksList",
      sectionName: "Drinks",
      alt: "Drinks section",
      link: "drinks",
      color: "#C79415",
      backgroundColor: "#FFE7AA",
      imgSrc: drinks,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "readyToEatSection",
      sectionListId: "readyList",
      sectionName: "Ready To Eat",
      alt: "Ready To Eat section",
      link: "readyToEat",
      color: "#E28413",
      backgroundColor: "#FFDBB0",
      imgSrc: ready,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "snacksSection",
      sectionListId: "snacksList",
      sectionName: "Snacks",
      alt: "Snacks section",
      link: "snacks",
      color: "#3C8D8A",
      backgroundColor: "#C8F0EE",
      imgSrc: snacks,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "iceCreamSection",
      sectionListId: "iceCreamList",
      sectionName: "Ice Cream",
      alt: "Ice Cream section",
      link: "icecream",
      color: "#3C8D8A",
      backgroundColor: "#C8F0EE",
      imgSrc: icecream,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "sweetsSection",
      sectionListId: "sweetsList",
      sectionName: "Sweets",
      alt: "Sweets section",
      link: "sweets",
      color: "#AC23B9",
      backgroundColor: "#F8D7FB",
      imgSrc: sweets,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
  ];

  /**
   * these are section that we use data from database to generate
   * at the moment, they are Trending and Deals sections
   */
  const derivedSection = [
    {
      sectionId: "trendingSection",
      sectionListId: "trendingList",
      sectionName: "Trending",
      additionalComponent: <></>,
      alt: "Trending section",
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "dealsSection",
      sectionListId: "dealsList",
      sectionName: "Deals",
      additionalComponent: (
        <Typography
          sx={[headers.header3, { color: "#969696", fontWeight: 400 }]}
        >
          Don't miss out!
        </Typography>
      ),
      alt: "Deals section",
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
  ];

  return (
    <>
      <Header />

      <div className={HomeCSS.homeContainer}>
        <div className={HomeCSS.homeContent}>
          {/* Navbar for navigating to each category */}
          <div className={HomeCSS.homeCategoryContainer}>
            <ul className={HomeCSS.homeCategoryNav2} id="categoryNav">
              {originalSections.map((section) => (
                <li className={HomeCSS.categoryCard}>
                  <img
                    src={section.imgSrc}
                    alt={section.alt}
                    onClick={(e) => scrollToCategory(section.sectionId)}
                  />
                  <Typography sx={headers.header6}>{section.name}</Typography>
                </li>
              ))}
            </ul>
            <ArrowBackIosNewIcon
              sx={homepageStyles.leftArrow}
              transform="scale(1.4)"
              onClick={() =>
                scrollCategoryBack("categoryNav", { pixelCount: 0 }, 105)
              }
            />
            <ArrowForwardIosIcon
              sx={homepageStyles.rightArrow}
              transform="scale(1.4)"
              onClick={() =>
                scrollCategoryNext(
                  "categoryNav",
                  { pixelCount: 0 },
                  105,
                  originalSections.length - 10
                )
              }
            />
          </div>

          {/**
           * Special sections
           * items in this section have different styling, thus has its own component
           */}
          <section className={HomeCSS.todaysSpecial} id="specialsSection">
            <hr className={HomeCSS.sectionBarTop} />
            <div className={HomeCSS.todaysSpecialHeader}>
              <Button
                variant="contained"
                onClick={() => navigateCategory("todays-special")}
                sx={[
                  homepageStyles.seeAll,
                  {
                    color: "#7140FA",
                    backgroundColor: "#E5DCFF",
                    "&:hover": {
                      backgroundColor: "#E5DCFF",
                    },
                  },
                ]}
              >
                <Typography sx={headers.seeAllFont}>See All</Typography>
              </Button>
              <Typography sx={headers.header2}>Today's Special</Typography>
              <Typography
                sx={[headers.header3, { color: "#969696", fontWeight: 400 }]}
              >
                Get it while it's hot!
              </Typography>
            </div>

            <ul className={HomeCSS.bigItemList}>
              {mockSpecialItems.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
            <hr className={HomeCSS.sectionBarBottom} />
          </section>

          {/**
           * sections for derived items - section which properties derived from data
           * like Trending or Deals sections
           */}
          {derivedSection.map((section) => (
            <section className={HomeCSS.smallItemSection}>
              <Typography sx={headers.header3}>
                {section.sectionName}
              </Typography>
              {section.additionalComponent}
              <div className={HomeCSS.smallListContainer}>
                <ul
                  className={HomeCSS.smallItemList}
                  id={section.sectionListId}
                >
                  {section.displayedItems.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>

                <ArrowBackIosNewIcon
                  sx={homepageStyles.leftArrow}
                  transform="scale(1.4)"
                  onClick={() =>
                    scrollCategoryBack(
                      section.sectionListId,
                      section.pixels,
                      174
                    )
                  }
                />

                <ArrowForwardIosIcon
                  sx={homepageStyles.rightArrow}
                  transform="scale(1.4)"
                  onClick={() =>
                    scrollCategoryNext(
                      section.sectionListId,
                      section.pixels,
                      174,
                      mockForYouItems.length - 6
                    )
                  }
                />
              </div>
            </section>
          ))}

          {/* Bulletin */}
          <section className={HomeCSS.homeBulletin}>
            <Box sx={homepageStyles.bulletinBox} />
            <Box sx={homepageStyles.bulletinBox} />
          </section>

          {/**
           * sections for category items
           * we list all section except the Special section
           */}
          {originalSections
            .filter((section) => section.sectionId !== "specialsSection")
            .map((section) => (
              <section
                className={HomeCSS.categoryContainer}
                id={section.sectionId}
              >
                <hr className={HomeCSS.sectionBarTop} />
                <div className={HomeCSS.categoryHeader}>
                  <img src={section.imgSrc} alt={section.alt} />
                  <Typography sx={headers.header3}>
                    {section.sectionName}
                  </Typography>

                  <Button
                    variant="contained"
                    onClick={() => navigateCategory(section.link)}
                    sx={[
                      homepageStyles.seeAll,
                      {
                        color: section.color,
                        backgroundColor: section.backgroundColor,
                        "&:hover": {
                          backgroundColor: section.backgroundColor,
                        },
                      },
                    ]}
                  >
                    <Typography sx={headers.seeAllFont}>See All</Typography>
                  </Button>
                </div>

                <div className={HomeCSS.categoryListContainer}>
                  <ul
                    className={HomeCSS.categoryItemList}
                    id={section.sectionListId}
                  >
                    {section.displayedItems.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                  <ArrowBackIosNewIcon
                    sx={homepageStyles.leftArrow}
                    transform="scale(1.4)"
                    onClick={() =>
                      scrollCategoryBack(
                        section.sectionListId,
                        section.pixels,
                        174
                      )
                    }
                  />

                  <ArrowForwardIosIcon
                    sx={homepageStyles.rightArrow}
                    transform="scale(1.4)"
                    onClick={() =>
                      scrollCategoryNext(
                        section.sectionListId,
                        section.pixels,
                        174,
                        section.displayedItems.length - 6
                      )
                    }
                  />
                </div>
              </section>
            ))}
        </div>
      </div>

      <ViewCart numItems="X" totalAmount="X.XX" />
      <BottomNav />
    </>
  );
}
