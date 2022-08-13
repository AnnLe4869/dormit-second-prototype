import { useRef, useState } from "react";

/*
 * Style Sheet
 */
import HomeCSS from "./Home.module.css";
import { homepageStyles, headers } from "./muiStyles";
import { useProducts } from "../../context/product/product-handler";

/*
 * Imported Components
 */
import ItemEntry from "../../shared/item-entry/ItemEntry";
import ViewCart from "../../shared/view-cart/ViewCart";
import Category from "./Category";
import Header from "./Header";

import BottomNav from "../../shared/bottom-nav/BottomNav";

/*
 * Imported Assets
 */
import apple from "../../assets/apple.png";
import innout from '../../assets/innout.png';
import specials from "../../assets/Home/specials.svg";
import candy from "../../assets/Home/candy.svg";
import chips from "../../assets/Home/chips.svg";
import drinks from "../../assets/Home/drinks.svg";
import ready from "../../assets/Home/ready.svg";
import snacks from "../../assets/Home/snacks.svg";
import icecream from "../../assets/Home/icecream.svg";
import sweets from "../../assets/Home/sweets.svg";


/*
 * Material-UI Imports
 */
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const THUMBNAIL_LIST_MAX = 6;

export default function HomePage() {

  const products = useProducts();
  console.log(products);

  /*
   * Mock lists
   */
  const mockSpecialItems = [
    <ItemEntry id="innout" name="In-N-Out Burger" image={innout} price="3.45" stock={2} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={5} />,
  ];

  const mockForYouItems = [
    <ItemEntry id="apple" image={apple} price="Price" stock={2} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={5} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={2} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={5} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" image={apple} price="Price" stock={5} />
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
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />
  ];

  const mockCategoryItems = [
    <ItemEntry price={"Price"} image={apple} />,
    <ItemEntry price={"Price"} image={apple} />,
    <ItemEntry price={"Price"} image={apple} />,
    <ItemEntry price={"Price"} image={apple} />,
    <ItemEntry price={"Price"} image={apple} />,
    <ItemEntry price={"Price"} image={apple} />,
  ];

  const categoryNavs = [

    <>
      <img src={specials} alt="Specials" onClick={(e) => scrollToCategory(0)}/>
      <Typography sx={headers.header6}>Specials</Typography>
    </>,
    <>
      <img src={candy} alt="Candy" onClick={(e) => scrollToCategory(1)}/>
      <Typography sx={headers.header6}>Candy</Typography>
    </>,
    <>
      <img src={chips} alt="Chips" onClick={(e) => scrollToCategory(2)}/>
      <Typography sx={headers.header6}>Chips</Typography>
    </>,
    <>
      <img src={drinks} alt="Drinks" onClick={(e) => scrollToCategory(3)}/>
      <Typography sx={headers.header6}>Drinks</Typography>
    </>,
    <>
      <img src={ready} alt="Ready" onClick={(e) => scrollToCategory(4)}/>
      <Typography sx={headers.header6}>Ready</Typography>
    </>,
    <>
      <img src={snacks} alt="Snacks" onClick={(e) => scrollToCategory(5)}/>
      <Typography sx={headers.header6}>Snacks</Typography>
    </>,
    <>
      <img src={icecream} alt="Ice Cream" onClick={(e) => scrollToCategory(6)}/>
      <Typography sx={headers.header6}>Ice Cream</Typography>
    </>,
    <>
      <img src={sweets} alt="Sweets" onClick={(e) => scrollToCategory(7)}/>
      <Typography sx={headers.header6}>Sweets</Typography>
    </>,
    <>
      <Box sx={homepageStyles.grayBox}/>
      <Typography sx={headers.header6}>Category</Typography>
    </>,
    <>
      <Box sx={homepageStyles.grayBox}/>
      <Typography sx={headers.header6}>Category</Typography>
    </>,
    <>
      <Box sx={homepageStyles.grayBox}/>
      <Typography sx={headers.header6}>Category</Typography>
    </>,
    <>
      <Box sx={homepageStyles.grayBox}/>
      <Typography sx={headers.header6}>Category</Typography>
    </>,
    <>
      <Box sx={homepageStyles.grayBox}/>
      <Typography sx={headers.header6}>Category</Typography>
    </>,
    <>
      <Box sx={homepageStyles.grayBox}/>
      <Typography sx={headers.header6}>Category</Typography>
    </>

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

  let categoryPixels = {pixelCount: 0};
  let forYouPixels = {pixelCount: 0};
  let trendingPixels = {pixelCount: 0};
  let dealsPixels = {pixelCount: 0};

  function scrollCategoryNext(element, object, pixels, overflow) {
    const total = overflow * pixels;
    if (object.pixelCount < total){
      document.getElementById(element).scrollTo(object.pixelCount += pixels, 0);
    }
    
  }

  function scrollCategoryBack(element, object, pixels) {
    if (object.pixelCount > 0){
      document.getElementById(element).scrollTo(object.pixelCount -= pixels, 0);
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
              onClick={() => scrollCategoryBack("categoryNav", categoryPixels, 104)}
            />

            <ArrowForwardIosIcon 
              sx={homepageStyles.rightArrow} 
              transform="scale(1.4)"
              onClick={() => scrollCategoryNext("categoryNav", categoryPixels, 104, categoryNavs.length-10)}
            />


          </div>

          {/* Today's Special */}
          <section className={HomeCSS.todaysSpecial}  id="specialsSection" ref={specialsRef}>
            <hr className={HomeCSS.sectionBarTop}/>
            <div className={HomeCSS.todaysSpecialHeader}>
              <Button 
                variant="contained" 
                sx={[homepageStyles.seeAll, {
                  color: "#7140FA", 
                  backgroundColor: "#E5DCFF",
                  "&:hover": {
                    backgroundColor: "#E5DCFF"
                }
                }]}
              >
                <Typography sx={headers.seeAllFont}>See All</Typography>
              </Button>
              <Typography sx={headers.header2}>Today's Special</Typography>
              <Typography sx={[headers.header3, {color: "#969696", fontWeight: 400}]}>Get it while it's hot!</Typography>
            </div>


            <ul className={HomeCSS.bigItemList}>
              {mockSpecialItems.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
            <hr className={HomeCSS.sectionBarBottom}/>
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
                onClick={() => scrollCategoryBack("forYouList", forYouPixels, 174)}
              />

              <ArrowForwardIosIcon 
                sx={homepageStyles.rightArrow} 
                transform="scale(1.4)"
                onClick={() => scrollCategoryNext("forYouList", forYouPixels, 174, mockForYouItems.length-6)}
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
                onClick={() => scrollCategoryBack("trendingList", trendingPixels, 174)}
              />

              <ArrowForwardIosIcon 
                sx={homepageStyles.rightArrow} 
                transform="scale(1.4)"
                onClick={() => scrollCategoryNext("trendingList", trendingPixels, 174, mockForYouItems.length-6)}
              />
            </div>

          </section>

          {/* Deals Section */}
          <section className={HomeCSS.smallItemSection}>
            <Typography sx={headers.header3}>Deals</Typography>
            <Typography sx={[headers.header3, {color: "#969696", fontWeight: 400}]}>Don't miss out!</Typography>
            <div className={HomeCSS.smallListContainer}>
              <ul className={HomeCSS.smallItemList} id="dealsList">
                {mockDealItems.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>

              <ArrowBackIosNewIcon
                sx={homepageStyles.leftArrow}
                transform="scale(1.4)"
                onClick={() => scrollCategoryBack("dealsList", dealsPixels, 174)}
              />

              <ArrowForwardIosIcon 
                sx={homepageStyles.rightArrow} 
                transform="scale(1.4)"
                onClick={() => scrollCategoryNext("dealsList", dealsPixels, 174, mockForYouItems.length-6)}
              />
            </div>

          </section>

          {/* Bulletin */}
          <section className={HomeCSS.bulletinContainer}>
            <div className={HomeCSS.homeBulletin}>
              <Box sx={homepageStyles.bulletinBox}/>
              <Box sx={homepageStyles.bulletinBox}/>
            </div>
          </section>


          {/* Candy Section */}
          <section id="candySection" ref={candyRef}>
            <Category 
              name="Candy"
              image={candy}
              color1="#D4162E"
              color2="#FCBAC2"
              itemList={mockForYouItems}
            />
          </section>

          {/* Chips Section */}
          <section id="chipsSection" ref={chipsRef}>
            <Category 
              name="Chips"
              image={chips}
              color1="#BD653C"
              color2="#FFD9C7"
              itemList={mockForYouItems}
            />
          </section>

          {/* Drinks Section */}
          <section id="drinksSection" ref={drinksRef}>
            <Category 
              name="Drinks"
              image={drinks}
              color1="#C79415"
              color2="#FFE7AA"
              itemList={mockForYouItems}
            />
          </section>

          {/* Ready To Eat Section */}
          <section id="readyToEatSection" ref={readyToEatRef}>
            <Category 
              name="Ready To Eat"
              image={ready}
              color1="#E28413"
              color2="#FFDBB0"
              itemList={mockForYouItems}
            />
          </section>

          {/* Snacks Section */}
          <section id="snacksSection" ref={snacksRef}>
            <Category 
              name="Snacks"
              image={snacks}
              color1="#3C8D8A"
              color2="#C8F0EE"
              itemList={mockForYouItems}
            />
          </section>

          {/* Ice Cream Section */}
          <section id="iceCreamSection" ref={iceCreamRef}>
            <Category 
              name="Ice Cream"
              image={icecream}
              color1="#3B88C3"
              color2="#B3DEFF"
              itemList={mockForYouItems}
            />
          </section>

          {/* Sweets Section */}
          <section id="sweetsSection" ref={sweetsRef}>
            <Category 
              name="Sweets"
              image={sweets}
              color1="#AC23B9"
              color2="#F8D7FB"
              itemList={mockForYouItems}
            />
          </section>

        </div>
      </div>
      <ViewCart numItems="X" totalAmount="X.XX" />
      <BottomNav />
    </>
  );
}
