import { useRef } from "react";

/*
 * Style Sheet
 */
import { useProducts } from "../../context/product/product-handler";
import HomeCSS from "./Home.module.css";
import { headers, homepageStyles } from "./muiStyles";

/*
 * Imported Components
 */
import ItemEntry from "../../shared/item-entry/ItemEntry";
import ViewCart from "../../shared/view-cart/ViewCart";
import Header from "./Header";

import BottomNav from "../../shared/bottom-nav/BottomNav";

/*
 * Imported Assets
 */
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

  const mockDealItems = [
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
  ];

  const categoryNavs = [
    <>
      <img src={specials} alt="Specials" onClick={(e) => scrollToCategory(0)} />
      <Typography sx={headers.header6}>Specials</Typography>
    </>,
    <>
      <img src={candy} alt="Candy" onClick={(e) => scrollToCategory(1)} />
      <Typography sx={headers.header6}>Candy</Typography>
    </>,
    <>
      <img src={chips} alt="Chips" onClick={(e) => scrollToCategory(2)} />
      <Typography sx={headers.header6}>Chips</Typography>
    </>,
    <>
      <img src={drinks} alt="Drinks" onClick={(e) => scrollToCategory(3)} />
      <Typography sx={headers.header6}>Drinks</Typography>
    </>,
    <>
      <img src={ready} alt="Ready" onClick={(e) => scrollToCategory(4)} />
      <Typography sx={headers.header6}>Ready</Typography>
    </>,
    <>
      <img src={snacks} alt="Snacks" onClick={(e) => scrollToCategory(5)} />
      <Typography sx={headers.header6}>Snacks</Typography>
    </>,
    <>
      <img
        src={icecream}
        alt="Ice Cream"
        onClick={(e) => scrollToCategory(6)}
      />
      <Typography sx={headers.header6}>Ice Cream</Typography>
    </>,
    <>
      <img src={sweets} alt="Sweets" onClick={(e) => scrollToCategory(7)} />
      <Typography sx={headers.header6}>Sweets</Typography>
    </>,
    <>
      <Box sx={homepageStyles.grayBox} />
      <Typography sx={headers.header6}>Category</Typography>
    </>,
    <>
      <Box sx={homepageStyles.grayBox} />
      <Typography sx={headers.header6}>Category</Typography>
    </>,
    <>
      <Box sx={homepageStyles.grayBox} />
      <Typography sx={headers.header6}>Category</Typography>
    </>,
    <>
      <Box sx={homepageStyles.grayBox} />
      <Typography sx={headers.header6}>Category</Typography>
    </>,
    <>
      <Box sx={homepageStyles.grayBox} />
      <Typography sx={headers.header6}>Category</Typography>
    </>,
    <>
      <Box sx={homepageStyles.grayBox} />
      <Typography sx={headers.header6}>Category</Typography>
    </>,
  ];

  //useRef() constants for page categories
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

  /*
   * onClick event handler to scroll to food category
   */
  function scrollToCategory(index) {
    refArray[index].current.scrollIntoView({ behavior: "smooth" });
  }

  let categoryPixels = { pixelCount: 0 };
  let forYouPixels = { pixelCount: 0 };
  let trendingPixels = { pixelCount: 0 };
  let dealsPixels = { pixelCount: 0 };
  let candyPixels = { pixelCount: 0 };
  let chipsPixels = { pixelCount: 0 };
  let drinksPixels = { pixelCount: 0 };
  let readyPixels = { pixelCount: 0 };
  let snacksPixels = { pixelCount: 0 };
  let iceCreamPixels = { pixelCount: 0 };
  let sweetsPixels = { pixelCount: 0 };

  function scrollCategoryNext(element, object, pixels, overflow) {
    const total = overflow * pixels;
    if (object.pixelCount < total) {
      document
        .getElementById(element)
        .scrollTo((object.pixelCount += pixels), 0);
    }
  }

  function scrollCategoryBack(element, object, pixels) {
    if (object.pixelCount > 0) {
      document
        .getElementById(element)
        .scrollTo((object.pixelCount -= pixels), 0);
    }
  }

  return (
    <>
      <Header />
      <div className={HomeCSS.homeContainer}>
        <div className={HomeCSS.homeContent}>
          {/* Navbar for Food Categories */}

          <div className={HomeCSS.homeCategoryContainer}>
            <ul className={HomeCSS.homeCategoryNav2} id="categoryNav">
              {categoryNavs.map((item) => {
                return <li className={HomeCSS.categoryCard}>{item}</li>;
              })}
            </ul>

            <ArrowBackIosNewIcon
              sx={homepageStyles.leftArrow}
              transform="scale(1.4)"
              onClick={() =>
                scrollCategoryBack("categoryNav", categoryPixels, 105)
              }
            />

            <ArrowForwardIosIcon
              sx={homepageStyles.rightArrow}
              transform="scale(1.4)"
              onClick={() =>
                scrollCategoryNext(
                  "categoryNav",
                  categoryPixels,
                  105,
                  categoryNavs.length - 10
                )
              }
            />
          </div>

          {/* Today's Special */}
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

          {/* For You Section */}
          <section className={HomeCSS.smallItemSection}>
            <Typography sx={headers.header3}>For You</Typography>
            <div className={HomeCSS.smallListContainer}>
              <ul className={HomeCSS.smallItemList} id="forYouList">
                {mockForYouItems.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryBack("forYouList", forYouPixels, 174)
                }
              />

              <ArrowForwardIosIcon
                sx={homepageStyles.rightArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryNext(
                    "forYouList",
                    forYouPixels,
                    174,
                    mockForYouItems.length - 6
                  )
                }
              />
            </div>
          </section>

          {/* Trending Section*/}
          <section className={HomeCSS.smallItemSection}>
            <Typography sx={headers.header3}>Trending</Typography>
            <div className={HomeCSS.smallListContainer}>
              <ul className={HomeCSS.smallItemList} id="trendingList">
                {mockForYouItems.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryBack("trendingList", trendingPixels, 174)
                }
              />

              <ArrowForwardIosIcon
                sx={homepageStyles.rightArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryNext(
                    "trendingList",
                    trendingPixels,
                    174,
                    mockForYouItems.length - 6
                  )
                }
              />
            </div>
          </section>

          {/* Deals Section */}
          <section className={HomeCSS.smallItemSection}>
            <Typography sx={headers.header3}>Deals</Typography>
            <Typography
              sx={[headers.header3, { color: "#969696", fontWeight: 400 }]}
            >
              Don't miss out!
            </Typography>
            <div className={HomeCSS.smallListContainer}>
              <ul className={HomeCSS.smallItemList} id="dealsList">
                {mockDealItems.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>

              <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryBack("dealsList", dealsPixels, 174)
                }
              />

              <ArrowForwardIosIcon
                sx={homepageStyles.rightArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryNext(
                    "dealsList",
                    dealsPixels,
                    174,
                    mockForYouItems.length - 6
                  )
                }
              />
            </div>
          </section>

          {/* Bulletin */}
          <section className={HomeCSS.homeBulletin}>
            <Box sx={homepageStyles.bulletinBox} />
            <Box sx={homepageStyles.bulletinBox} />
          </section>

          {/* Candy Section
          <section className={HomeCSS.categoryContainer} id="candySection" ref={candyRef}>
            <hr className={HomeCSS.sectionBarTop}/>
            <div className={HomeCSS.categoryHeader}>

              <img src={candy} alt="Candy section" />
              <Typography sx={headers.header3}>Candy</Typography>

              <Button 
                variant="contained" 
                sx={[homepageStyles.seeAll, {
                  color: "#D4162E", 
                  backgroundColor: "#FCBAC2",
                  "&:hover": {
                    backgroundColor: "#FCBAC2"
                }
                }]}
              >
                <Typography sx={headers.seeAllFont}>See All</Typography>
              </Button>
            </div>

            <div className={HomeCSS.smallListContainer}>
              <ul className={HomeCSS.smallItemList} id="candyList">
                {mockForYouItems.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() => scrollCategoryBack("candyList", candyPixels, 174)}
              />

              <ArrowForwardIosIcon 
                sx={homepageStyles.rightArrow} 
                transform="scale(1.4)"
                onClick={() => scrollCategoryNext("candyList", candyPixels, 174, mockForYouItems.length-6)}
              />
            </div>
          </section> */}

          {/* Candy Section */}
          <section
            className={HomeCSS.categoryContainer}
            id="candySection"
            ref={candyRef}
          >
            <hr className={HomeCSS.sectionBarTop} />
            <div className={HomeCSS.categoryHeader}>
              <img src={candy} alt="Candy section" />
              <Typography sx={headers.header3}>Candy</Typography>

              <Button
                variant="contained"
                sx={[
                  homepageStyles.seeAll,
                  {
                    color: "#D4162E",
                    backgroundColor: "#FCBAC2",
                    "&:hover": {
                      backgroundColor: "#FCBAC2",
                    },
                  },
                ]}
              >
                <Typography sx={headers.seeAllFont}>See All</Typography>
              </Button>
            </div>

            <div className={HomeCSS.categoryListContainer}>
              <ul className={HomeCSS.categoryItemList} id="candyList">
                {mockForYouItems.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryBack("candyList", candyPixels, 174)
                }
              />

              <ArrowForwardIosIcon
                sx={homepageStyles.rightArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryNext(
                    "candyList",
                    candyPixels,
                    174,
                    mockForYouItems.length - 6
                  )
                }
              />
            </div>
          </section>

          {/* Chips Section */}
          <section
            className={HomeCSS.categoryContainer}
            id="chipsSection"
            ref={chipsRef}
          >
            <hr className={HomeCSS.sectionBarTop} />
            <div className={HomeCSS.categoryHeader}>
              <img src={chips} alt="Chips section" />
              <Typography sx={headers.header3}>Chips</Typography>

              <Button
                variant="contained"
                sx={[
                  homepageStyles.seeAll,
                  {
                    color: "#BD653C",
                    backgroundColor: "#FFD9C7",
                    "&:hover": {
                      backgroundColor: "#FFD9C7",
                    },
                  },
                ]}
              >
                <Typography sx={headers.seeAllFont}>See All</Typography>
              </Button>
            </div>

            <div className={HomeCSS.categoryListContainer}>
              <ul className={HomeCSS.categoryItemList} id="chipsList">
                {mockForYouItems.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryBack("chipsList", chipsPixels, 174)
                }
              />

              <ArrowForwardIosIcon
                sx={homepageStyles.rightArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryNext(
                    "chipsList",
                    chipsPixels,
                    174,
                    mockForYouItems.length - 6
                  )
                }
              />
            </div>
          </section>

          {/* Drinks Section */}
          <section
            className={HomeCSS.categoryContainer}
            id="drinksSection"
            ref={drinksRef}
          >
            <hr className={HomeCSS.sectionBarTop} />
            <div className={HomeCSS.categoryHeader}>
              <img src={drinks} alt="Drinks section" />
              <Typography sx={headers.header3}>Drinks</Typography>

              <Button
                variant="contained"
                sx={[
                  homepageStyles.seeAll,
                  {
                    color: "#C79415",
                    backgroundColor: "#FFE7AA",
                    "&:hover": {
                      backgroundColor: "#FFE7AA",
                    },
                  },
                ]}
              >
                <Typography sx={headers.seeAllFont}>See All</Typography>
              </Button>
            </div>

            <div className={HomeCSS.categoryListContainer}>
              <ul className={HomeCSS.categoryItemList} id="drinksList">
                {mockForYouItems.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryBack("drinksList", drinksPixels, 174)
                }
              />

              <ArrowForwardIosIcon
                sx={homepageStyles.rightArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryNext(
                    "drinksList",
                    drinksPixels,
                    174,
                    mockForYouItems.length - 6
                  )
                }
              />
            </div>
          </section>

          {/* Ready To Eat Section */}
          <section
            className={HomeCSS.categoryContainer}
            id="readyToEatSection"
            ref={readyToEatRef}
          >
            <hr className={HomeCSS.sectionBarTop} />
            <div className={HomeCSS.categoryHeader}>
              <img src={ready} alt="Ready To Eat section" />
              <Typography sx={headers.header3}>Ready To Eat</Typography>

              <Button
                variant="contained"
                sx={[
                  homepageStyles.seeAll,
                  {
                    color: "#E28413",
                    backgroundColor: "#FFDBB0",
                    "&:hover": {
                      backgroundColor: "#FFDBB0",
                    },
                  },
                ]}
              >
                <Typography sx={headers.seeAllFont}>See All</Typography>
              </Button>
            </div>

            <div className={HomeCSS.categoryListContainer}>
              <ul className={HomeCSS.categoryItemList} id="readyList">
                {mockForYouItems.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryBack("readyList", readyPixels, 174)
                }
              />

              <ArrowForwardIosIcon
                sx={homepageStyles.rightArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryNext(
                    "readyList",
                    readyPixels,
                    174,
                    mockForYouItems.length - 6
                  )
                }
              />
            </div>
          </section>

          {/* Snacks Section */}
          <section
            className={HomeCSS.categoryContainer}
            id="snacksSection"
            ref={snacksRef}
          >
            <hr className={HomeCSS.sectionBarTop} />
            <div className={HomeCSS.categoryHeader}>
              <img src={snacks} alt="Snacks section" />
              <Typography sx={headers.header3}>Snacks</Typography>

              <Button
                variant="contained"
                sx={[
                  homepageStyles.seeAll,
                  {
                    color: "#3C8D8A",
                    backgroundColor: "#C8F0EE",
                    "&:hover": {
                      backgroundColor: "#C8F0EE",
                    },
                  },
                ]}
              >
                <Typography sx={headers.seeAllFont}>See All</Typography>
              </Button>
            </div>

            <div className={HomeCSS.categoryListContainer}>
              <ul className={HomeCSS.categoryItemList} id="snacksList">
                {mockForYouItems.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryBack("snacksList", snacksPixels, 174)
                }
              />

              <ArrowForwardIosIcon
                sx={homepageStyles.rightArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryNext(
                    "snacksList",
                    snacksPixels,
                    174,
                    mockForYouItems.length - 6
                  )
                }
              />
            </div>
          </section>

          {/* Ice Cream Section */}
          <section
            className={HomeCSS.categoryContainer}
            id="iceCreamSection"
            ref={iceCreamRef}
          >
            <hr className={HomeCSS.sectionBarTop} />
            <div className={HomeCSS.categoryHeader}>
              <img src={icecream} alt="Ice Cream section" />
              <Typography sx={headers.header3}>Ice Cream</Typography>

              <Button
                variant="contained"
                sx={[
                  homepageStyles.seeAll,
                  {
                    color: "#3B88C3",
                    backgroundColor: "#B3DEFF",
                    "&:hover": {
                      backgroundColor: "#B3DEFF",
                    },
                  },
                ]}
              >
                <Typography sx={headers.seeAllFont}>See All</Typography>
              </Button>
            </div>

            <div className={HomeCSS.categoryListContainer}>
              <ul className={HomeCSS.categoryItemList} id="iceCreamList">
                {mockForYouItems.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryBack("iceCreamList", iceCreamPixels, 174)
                }
              />

              <ArrowForwardIosIcon
                sx={homepageStyles.rightArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryNext(
                    "iceCreamList",
                    iceCreamPixels,
                    174,
                    mockForYouItems.length - 6
                  )
                }
              />
            </div>
          </section>

          {/* Sweets Section */}
          <section
            className={HomeCSS.categoryContainer}
            id="sweetsSection"
            ref={sweetsRef}
          >
            <hr className={HomeCSS.sectionBarTop} />
            <div className={HomeCSS.categoryHeader}>
              <img src={sweets} alt="Sweets section" />
              <Typography sx={headers.header3}>Sweets</Typography>

              <Button
                variant="contained"
                sx={[
                  homepageStyles.seeAll,
                  {
                    color: "#AC23B9",
                    backgroundColor: "#F8D7FB",
                    "&:hover": {
                      backgroundColor: "#F8D7FB",
                    },
                  },
                ]}
              >
                <Typography sx={headers.seeAllFont}>See All</Typography>
              </Button>
            </div>

            <div className={HomeCSS.categoryListContainer}>
              <ul className={HomeCSS.categoryItemList} id="sweetsList">
                {mockForYouItems.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
              <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryBack("sweetsList", sweetsPixels, 174)
                }
              />

              <ArrowForwardIosIcon
                sx={homepageStyles.rightArrow}
                transform="scale(1.4)"
                onClick={() =>
                  scrollCategoryNext(
                    "sweetsList",
                    sweetsPixels,
                    174,
                    mockForYouItems.length - 6
                  )
                }
              />
            </div>
          </section>
        </div>
      </div>
      <ViewCart numItems="X" totalAmount="X.XX" />
      <BottomNav />
    </>
  );
}
