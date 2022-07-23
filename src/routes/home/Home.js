import { useState, useRef } from "react";
import { ProductContext } from "../../context/product/product-context";
import {
  useSignUp,
  useSignOut,
  useCheckAuthenticationStatus,
  useEmailSignIn,
} from "../../context/user/auth-handler";
import { useCheckout } from "../../context/user/checkout-handler";

/*
 * Style Sheet
 */
import './Home.css';

/*
 * Imported Components
 */
import Header from './Header';
import ViewCart from '../../shared/viewcart/ViewCart';
import Taskbar from '../../shared/taskbar/Taskbar';
import ItemEntry from '../../shared/itementry/ItemEntry';
import Category from './Category';

/*
 * Imported Assets
 */
import todaysSpecialIcon from '../../assets/Home/todays-special-icon.svg';
import apple from '../../assets/apple.png';

export default function HomePage() {
  // const status = useCheckAuthenticationStatus();
  // const signUp = useSignUp();
  // const signOut = useSignOut();
  // const checkout = useCheckout();

  // const { sendCode, authenticateUser } = useEmailSignIn();

  // const [code, setCode] = useState("");

  // const handleChange = (event) => {
  //   setCode(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   authenticateUser("asa@gmail.com", code);
  //   console.log(code);
  // };

  /*
   * Mock lists
   */
  const mockSpecialItems = [
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={2} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={5} />
  ];

  const mockForYouItems = [
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={2} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={5} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={2} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={0} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={1} />,
    <ItemEntry id="apple" name="Apple" image={apple} price="Price" stock={5} />
  ];

  const mockDealItems = [
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"}/>,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"}/>,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"}/>,
    <ItemEntry price={"Price"} image={apple} dealPrice={"Price"}/>

  ]

  const mockCategoryItems = [
    <ItemEntry price={"Price"} image={apple}/>,
    <ItemEntry price={"Price"} image={apple}/>,
    <ItemEntry price={"Price"} image={apple}/>,
    <ItemEntry price={"Price"} image={apple}/>,
    <ItemEntry price={"Price"} image={apple}/>,
    <ItemEntry price={"Price"} image={apple}/>
  ]

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
    readyToEatRef
  ];


  /*
   * onClick event handler to scroll to food category
   */
  function scrollToCategory(index) {
    refArray[index].current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <Header />
      <div className="homeContainer">
        <div className="homeContent">

          {/* Navbar for Food Categories */}
          <section className="homeCategoryNav">
            <button onClick={e => scrollToCategory(0)}>Chips</button>
            <button onClick={e => scrollToCategory(1)}>Snacks</button>
            <button onClick={e => scrollToCategory(2)}>Energy</button>
            <button onClick={e => scrollToCategory(3)}>Drinks</button>
            <button onClick={e => scrollToCategory(4)}>Sweets</button>
            <button onClick={e => scrollToCategory(5)}>Ice Cream</button>
            <button onClick={e => scrollToCategory(6)}>Ready-to-Eat</button>
          </section>

          {/* Bulletin */}
          <section className="homeBulletin">
            <div className="bulletinBox"></div>
            <div className="bulletinBox"></div>
            <div className="bulletinBox"></div>
          </section>

          {/* Today's Special */}
          <section className="todaysSpecial">
            <img src={todaysSpecialIcon} alt="Today's Special" className="todaysSpecialIcon"/>
            <h2>Today's Special</h2>
            <h3>Get it while it's hot!</h3>

            <ul className="bigItemList">
              {mockSpecialItems.map(item => {
                return <li>{item}</li>
              })}
            </ul>
          </section>

          {/* For You Section */}
          <section className="smallItemSection">
            <h3>For You</h3>
            <ul className="smallItemList">
              {mockForYouItems.map(item => {
                return <li>{item}</li>
              })}
            </ul>
          </section>

          {/* Trending Section*/}
          <section className="smallItemSection">
            <h3>Trending</h3>
            <ul className="smallItemList">
              {mockForYouItems.map(item => {
                return <li>{item}</li>
              })}
            </ul>
          </section>

          {/* Deals Section */}
          <section className="smallItemSection">
            <h3>Deals</h3>
            <ul className="smallItemList">
              {mockDealItems.map(item => {
                return <li>{item}</li>
              })}
            </ul>
          </section>

          {/* Food Categories */}
          <section className="categorySection">

            {/* Chips Section */}
            <div id="chipsSection" ref={chipsRef}>
              <Category 
                name="Chips" 
                itemList={mockCategoryItems}
                style={{ borderImageSource: 'linear-gradient(90.28deg, #F0786F 0%, #FABA68 100%)' }} 
              />
            </div>

            {/* Snacks Section */}
            <div id="snacksSection" ref={snacksRef}>
              <Category 
                name="Snacks" 
                itemList={mockCategoryItems}
                style={{ borderImageSource: 'linear-gradient(90.28deg, #FABA68 0%, #FFEB83 100%)' }} 
              />
            </div>

            {/* Energy Section */}
            <div id="energySection" ref={energyRef}>
              <Category 
                name="Energy" 
                itemList={mockCategoryItems}
                style={{ borderImageSource: 'linear-gradient(90.28deg, #FFEB83 0%, #CDF888 100%)' }} 
              />
            </div>

            {/* Drinks Section */}
            <div id="drinksSection" ref={drinksRef}>
              <Category 
                name="Drinks" 
                itemList={mockCategoryItems}
                style={{ borderImageSource: 'linear-gradient(90.28deg, #88F8CF 0%, #88BBF8 100%)' }} 
              />
            </div>

            {/* Sweets Section */}
            <div id="sweetsSection" ref={sweetsRef}>
              <Category 
                name="Sweets" 
                itemList={mockCategoryItems}
                style={{ borderImageSource: 'linear-gradient(90.28deg, #945B46 0%, #DEAD98 100%)' }} 
              />
            </div>

            {/* Ice Cream Section */}
            <div id="icecreamSection" ref={iceCreamRef}>
              <Category 
                name="Ice Cream" 
                itemList={mockCategoryItems}
                style={{ borderImageSource: 'linear-gradient(90.28deg, #DB88F8 0%, #F88888 100%)' }} 
              />
            </div>

            {/* Ready-to-Eat Section */}
            <div id="readytoeatSection" ref={readyToEatRef}>
              <Category 
                name="Ready-to-Eat" 
                itemList={mockCategoryItems}
                style={{ borderImageSource: 'linear-gradient(90.28deg, #DC4A4A 0%, #ECA8A8 100%)' }} 
              />
            </div>

          </section>
        </div>
      </div>
      <ViewCart numItems="X" totalAmount="X.XX"/>
      <Taskbar currentPage="home"/>
    </>

    // <main>
    //   {status ? (
    //     <>
    //       <button onClick={signOut}>Sign out</button>
    //       <button onClick={checkout}>Checkout</button>
    //     </>
    //   ) : (
    //     <>
    //       <button
    //         onClick={() => {
    //           sendCode("asa@gmail.com");
    //           console.log("code is sent");
    //         }}
    //       >
    //         Send code to email
    //       </button>
    //       <form onSubmit={handleSubmit}>
    //         <label form="code">Enter code</label>
    //         <input type="text" id="code" onChange={handleChange} />
    //         <button>Submit</button>
    //       </form>
    //       <button onClick={signUp}>Sign up</button>
    //     </>
    //   )}
    // </main>
  );
}
