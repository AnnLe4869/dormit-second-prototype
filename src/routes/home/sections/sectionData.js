import { renderProducts } from "../../../helper/renderProducts.js";
import { mockProducts } from "../../../mock_data/data/mockData.js";

import { Typography } from "@mui/material";
import ProductListing from "../../../shared/product/ProductListing.js";

import apple from "../../../assets/apple.png";

import { headers } from "../muiStyles.js";

/*
 * Imported assets
 */
import candy from "../../../assets/Home/candy.svg";
import chips from "../../../assets/Home/chips.svg";
import drinks from "../../../assets/Home/drinks.svg";
import icecream from "../../../assets/Home/icecream.svg";
import ready from "../../../assets/Home/ready.svg";
import snacks from "../../../assets/Home/snacks.svg";
import specials from "../../../assets/Home/specials.svg";
import sweets from "../../../assets/Home/sweets.svg";

const mockForYouItems = [
  <ProductListing
    id="apple"
    name="Apple"
    image={apple}
    price="Price"
    stock={2}
  />,
  <ProductListing
    id="apple"
    name="Apple"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ProductListing
    id="apple"
    name="Apple"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ProductListing
    id="apple"
    name="Apple"
    image={apple}
    price="Price"
    stock={5}
  />,
  <ProductListing
    id="apple"
    name="Apple"
    image={apple}
    price="Price"
    stock={2}
  />,
  <ProductListing
    id="apple"
    name="Apple"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ProductListing
    id="apple"
    name="Apple"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ProductListing
    id="apple"
    name="Apple"
    image={apple}
    price="Price"
    stock={5}
  />,
  <ProductListing
    id="apple"
    name="Apple"
    image={apple}
    price="Price"
    stock={0}
  />,
  <ProductListing
    id="apple"
    name="Apple"
    image={apple}
    price="Price"
    stock={1}
  />,
  <ProductListing
    id="apple"
    name="Apple"
    image={apple}
    price="Price"
    stock={5}
  />,
];

export const originalSections = [
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
    displayedItems: renderProducts(mockProducts, "todaysSpecial", 0),
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
    displayedItems: renderProducts(mockProducts, "candy", 6),
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
    displayedItems: renderProducts(mockProducts, "chips", 6),
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
    displayedItems: renderProducts(mockProducts, "drinks", 6),
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
    displayedItems: renderProducts(mockProducts, "readyToEat", 6),
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
    displayedItems: renderProducts(mockProducts, "snacks", 6),
  },
  {
    sectionId: "iceCreamSection",
    sectionListId: "iceCreamList",
    sectionName: "Ice Cream",
    alt: "Ice Cream section",
    link: "icecream",
    color: "#3B88C3",
    backgroundColor: "#B3DEFF",
    imgSrc: icecream,
    pixels: { pixelCount: 0 },
    displayedItems: renderProducts(mockProducts, "icecream", 6),
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
    displayedItems: renderProducts(mockProducts, "sweets", 6),
  },
];

export const derivedSections = [
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
      <Typography sx={[headers.header3, { color: "#969696", fontWeight: 400 }]}>
        Don't miss out!
      </Typography>
    ),
    alt: "Deals section",
    pixels: { pixelCount: 0 },
    displayedItems: mockForYouItems,
  },
];
