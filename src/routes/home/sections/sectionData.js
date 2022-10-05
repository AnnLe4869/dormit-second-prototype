import { Typography } from "@mui/material";
import ProductListing from "../../../shared/product/ProductListing.js";

import apple from "../../../assets/apple.png";

import { headers } from "../muiStyles.js";

/*
 * Imported assets
 */

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
