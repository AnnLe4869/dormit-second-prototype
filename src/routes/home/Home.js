import { useRef, useState } from "react";

/*
 * Style Sheet
 */
import HomeCSS from "./Home.module.css";
import { homepageStyles, headers } from "../../muiStyles";
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
import todaysSpecialIcon from "../../assets/Home/todays-special-icon.svg";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { borderRadius, fontWeight } from "@mui/system";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { theme } from "../../muiStyles";

export default function HomePage() {

  const products = useProducts();
  console.log(products);

  /*
   * Mock lists
   */
  const mockSpecialItems = [
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={2} />,
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
  ];

  const mockDealItems = [
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"} />,
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
      <Typography sx={headers.header4}>Specials</Typography>
    </>,
    <>
      <img src={candy} alt="Candy" onClick={(e) => scrollToCategory(1)}/>
      <Typography sx={headers.header4}>Candy</Typography>
    </>,
    <>
      <img src={chips} alt="Chips" onClick={(e) => scrollToCategory(2)}/>
      <Typography sx={headers.header4}>Chips</Typography>
    </>,
    <>
      <img src={drinks} alt="Drinks" onClick={(e) => scrollToCategory(3)}/>
      <Typography sx={headers.header4}>Drinks</Typography>
    </>,
    <>
      <img src={ready} alt="Ready" onClick={(e) => scrollToCategory(4)}/>
      <Typography sx={headers.header4}>Ready</Typography>
    </>,
    <>
      <img src={snacks} alt="Snacks" onClick={(e) => scrollToCategory(5)}/>
      <Typography sx={headers.header4}>Snacks</Typography>
    </>,
    <>
      <img src={icecream} alt="Ice Cream" onClick={(e) => scrollToCategory(6)}/>
      <Typography sx={headers.header4}>Ice Cream</Typography>
    </>,
    <>
      <img src={sweets} alt="Sweets" onClick={(e) => scrollToCategory(7)}/>
      <Typography sx={headers.header4}>Sweets</Typography>
    </>

  ];

  //useRef() constants for page categories
  const chipsRef = useRef(null);
  const snacksRef = useRef(null);
  const energyRef = useRef(null);
  const drinksRef = useRef(null);
  const sweetsRef = useRef(null);
  const iceCreamRef = useRef(null);
  const readyToEatRef = useRef(null);
  const refArray = [
    chipsRef,
    snacksRef,
    energyRef,
    drinksRef,
    sweetsRef,
    iceCreamRef,
    readyToEatRef,
  ];

  /*
   * onClick event handler to scroll to food category
   */
  function scrollToCategory(index) {
    refArray[index].current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ThemeProvider theme={theme}>

      {/*********TODO: Mui **********/}
      <Header />
      <div className={HomeCSS.homeContainer}>
        <div className={HomeCSS.homeContent}>
          {/* Navbar for Food Categories */}
          <ul className={HomeCSS.homeCategoryNav2}>

            {categoryNavs.map((item) => {
              return <li className={HomeCSS.categoryCard}>{item}</li>;
            })}

          </ul>

          <section className={HomeCSS.homeCategoryNav}>
            <Button variant="outlined" sx={homepageStyles.categoryButton} onClick={(e) => scrollToCategory(0)}>
              <Typography sx={headers.header4}>Chips</Typography>
            </Button>

            <Button variant="outlined" sx={homepageStyles.categoryButton} onClick={(e) => scrollToCategory(1)}>
              <Typography sx={headers.header4}>Snacks</Typography>
            </Button>

            <Button variant="outlined" sx={homepageStyles.categoryButton} onClick={(e) => scrollToCategory(2)}>
              <Typography sx={headers.header4}>Energy</Typography>
            </Button>

            <Button variant="outlined" sx={homepageStyles.categoryButton} onClick={(e) => scrollToCategory(3)}>
              <Typography sx={headers.header4}>Drinks</Typography>
            </Button>

            <Button variant="outlined" sx={homepageStyles.categoryButton} onClick={(e) => scrollToCategory(4)}>
              <Typography sx={headers.header4}>Sweets</Typography>
            </Button>

            <Button variant="outlined" sx={homepageStyles.categoryButton} onClick={(e) => scrollToCategory(5)}>
              <Typography sx={headers.header4}>Ice Cream</Typography>
            </Button>

            <Button variant="outlined" sx={homepageStyles.categoryButton} onClick={(e) => scrollToCategory(6)}>
              <Typography sx={headers.header4}>Ready-to-eat</Typography>
            </Button>
          </section>

          {/* Bulletin */}
          <section className={HomeCSS.homeBulletin}>
              <Box sx={homepageStyles.bulletinBox}/>
              <Box sx={homepageStyles.bulletinBox}/>
              <Box sx={homepageStyles.bulletinBox}/>
          </section>

          {/* Today's Special */}
          <section className={HomeCSS.todaysSpecial}>
            <img
              src={todaysSpecialIcon}
              alt="Today's Special"
              className={HomeCSS.todaysSpecialIcon}
            />
            <Typography sx={headers.header2}>Today's Special</Typography>
            <Typography sx={headers.header3}>Get it while it's hot!</Typography>

            <ul className={HomeCSS.bigItemList}>
              {mockSpecialItems.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </section>

          {/* For You Section */}
          <section className={HomeCSS.smallItemSection}>
            <Typography sx={headers.header3}>For You</Typography>
            <ul className={HomeCSS.smallItemList}>
              {mockForYouItems.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </section>

          {/* Trending Section*/}
          <section className={HomeCSS.smallItemSection}>
            <Typography sx={headers.header3}>Trending</Typography>
            <ul className={HomeCSS.smallItemList}>
              {mockForYouItems.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </section>

          {/* Deals Section */}
          <section className={HomeCSS.smallItemSection}>
            <Typography sx={headers.header3}>Deals</Typography>
            <ul className={HomeCSS.smallItemList}>
              {mockDealItems.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </section>

          {/* Food Categories */}
          <section className={HomeCSS.categorySection}>

            {/* Chips Section */}
            {/*********TODO: Mui **********/}
            <div id="chipsSection" ref={chipsRef}>
              <Category
                name="Chips"
                itemList={mockCategoryItems}
                style={{
                  borderImageSource:
                    "linear-gradient(90.28deg, #F0786F 0%, #FABA68 100%)",
                }}
              />
            </div>

            {/* Snacks Section */}
            {/*********TODO: Mui **********/}
            <div id="snacksSection" ref={snacksRef}>
              <Category
                name="Snacks"
                itemList={mockCategoryItems}
                style={{
                  borderImageSource:
                    "linear-gradient(90.28deg, #FABA68 0%, #FFEB83 100%)",
                }}
              />
            </div>

            {/* Energy Section */}
            {/*********TODO: Mui **********/}
            <div id="energySection" ref={energyRef}>
              <Category
                name="Energy"
                itemList={mockCategoryItems}
                style={{
                  borderImageSource:
                    "linear-gradient(90.28deg, #FFEB83 0%, #CDF888 100%)",
                }}
              />
            </div>

            {/* Drinks Section */}
            {/*********TODO: Mui **********/}
            <div id="drinksSection" ref={drinksRef}>
              <Category
                name="Drinks"
                itemList={mockCategoryItems}
                style={{
                  borderImageSource:
                    "linear-gradient(90.28deg, #88F8CF 0%, #88BBF8 100%)",
                }}
              />
            </div>

            {/* Sweets Section */}
            {/*********TODO: Mui **********/}
            <div id="sweetsSection" ref={sweetsRef}>
              <Category
                name="Sweets"
                itemList={mockCategoryItems}
                style={{
                  borderImageSource:
                    "linear-gradient(90.28deg, #945B46 0%, #DEAD98 100%)",
                }}
              />
            </div>

            {/* Ice Cream Section */}
            {/*********TODO: Mui **********/}
            <div id="icecreamSection" ref={iceCreamRef}>
              <Category
                name="Ice Cream"
                itemList={mockCategoryItems}
                style={{
                  borderImageSource:
                    "linear-gradient(90.28deg, #DB88F8 0%, #F88888 100%)",
                }}
              />
            </div>

            {/* Ready-to-Eat Section */}
            {/*********TODO: Mui **********/}
            <div id="readytoeatSection" ref={readyToEatRef}>
              <Category
                name="Ready-to-Eat"
                itemList={mockCategoryItems}
                style={{
                  borderImageSource:
                    "linear-gradient(90.28deg, #DC4A4A 0%, #ECA8A8 100%)",
                }}
              />
            </div>
          </section>
        </div>
      </div>
      <ViewCart numItems="X" totalAmount="X.XX" />
      <BottomNav />
    </ThemeProvider>
  );
}
