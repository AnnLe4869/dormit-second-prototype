import { useRef } from "react";

import { useProducts } from "../../context/product/product-handler";
import HomeCSS from "./Home.module.css";
import { headers, homepageStyles } from "./muiStyles";

import Header from "./Header";
import ItemEntry from "../../shared/item-entry/ItemEntry";
import ViewCart from "../../shared/view-cart/ViewCart";
import BottomNav from "../../shared/bottom-nav/BottomNav";

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

/*
 * onClick event handler to scroll to food category
 */
function scrollToCategory(refArray, index) {
  refArray[index].current.scrollIntoView({ behavior: "smooth" });
}
function scrollCategoryNext(element, object, pixels, overflow) {
  const total = overflow * pixels;
  if (object.pixelCount < total) {
    document.getElementById(element).scrollTo((object.pixelCount += pixels), 0);
  }
}

function scrollCategoryBack(element, object, pixels) {
  if (object.pixelCount > 0) {
    document.getElementById(element).scrollTo((object.pixelCount -= pixels), 0);
  }
}

export default function HomePage() {
  const products = useProducts();

  /*
   * Mock lists
   */
  const mockSpecialItems = [
    <ItemEntry
      id="innout"
      name="In-N-Out Burger"
      image={innout}
      price="3.45"
      stock={2}
    />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={5} />,
  ];

  const mockForYouItems = [
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={2} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={5} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={2} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={5} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={5} />,
  ];

  // useRef() constants for page categories
  const specialsRef = useRef(null);
  const candyRef = useRef(null);
  const chipsRef = useRef(null);
  const drinksRef = useRef(null);
  const readyToEatRef = useRef(null);
  const snacksRef = useRef(null);
  const iceCreamRef = useRef(null);
  const sweetsRef = useRef(null);

  const refArray = [
    specialsRef,
    candyRef,
    chipsRef,
    drinksRef,
    readyToEatRef,
    snacksRef,
    iceCreamRef,
    sweetsRef,
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
      color: "#D4162E",
      backgroundColor: "#FCBAC2",
      imgSrc: candy,
      ref: candyRef,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "chipsSection",
      sectionListId: "chipsList",
      sectionName: "Chips",
      alt: "Chips section",
      color: "#BD653C",
      backgroundColor: "#FFD9C7",
      imgSrc: chips,
      ref: chipsRef,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "drinksSection",
      sectionListId: "drinksList",
      sectionName: "Drinks",
      alt: "Drinks section",
      color: "#C79415",
      backgroundColor: "#FFE7AA",
      imgSrc: drinks,
      ref: drinksRef,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "readyToEatSection",
      sectionListId: "readyList",
      sectionName: "Ready To Eat",
      alt: "Ready To Eat section",
      color: "#E28413",
      backgroundColor: "#FFDBB0",
      imgSrc: ready,
      ref: readyToEatRef,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "snacksSection",
      sectionListId: "snacksList",
      sectionName: "Snacks",
      alt: "Snacks section",
      color: "#3C8D8A",
      backgroundColor: "#C8F0EE",
      imgSrc: snacks,
      ref: snacksRef,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "iceCreamSection",
      sectionListId: "iceCreamList",
      sectionName: "Ice Cream",
      alt: "Ice Cream section",
      color: "#3C8D8A",
      backgroundColor: "#C8F0EE",
      imgSrc: icecream,
      ref: iceCreamRef,
      pixels: { pixelCount: 0 },
      displayedItems: mockForYouItems,
    },
    {
      sectionId: "sweetsSection",
      sectionListId: "sweetsList",
      sectionName: "Sweets",
      alt: "Sweets section",
      color: "#AC23B9",
      backgroundColor: "#F8D7FB",
      imgSrc: sweets,
      ref: sweetsRef,
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
              {originalSections.map((section, index) => (
                <li className={HomeCSS.categoryCard}>
                  <img
                    src={section.imgSrc}
                    alt={section.alt}
                    onClick={(e) => scrollToCategory(refArray, index)}
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
          <section
            className={HomeCSS.todaysSpecial}
            id="specialsSection"
            ref={specialsRef}
          >
            <hr className={HomeCSS.sectionBarTop} />
            <div className={HomeCSS.todaysSpecialHeader}>
              <Button
                variant="contained"
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
                ref={section.ref}
              >
                <hr className={HomeCSS.sectionBarTop} />
                <div className={HomeCSS.categoryHeader}>
                  <img src={section.imgSrc} alt={section.alt} />
                  <Typography sx={headers.header3}>
                    {section.sectionName}
                  </Typography>

                  <Button
                    variant="contained"
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
