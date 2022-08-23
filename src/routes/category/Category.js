import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import SuppliesTemplate from "./suppliesTemplate/SuppliesTemplate";
import CategoryTemplate from "../search/categoryTemplate/CategoryTemplate";
import ItemEntry from "../../shared/item-entry/ItemEntry";
import BottomNav from "../../shared/bottom-nav/BottomNav";

import styles from "./Category.module.css";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SendIcon from "@mui/icons-material/Send";

import today from "../../assets/CategoryImages/todays-special.svg";
import candy from "../../assets/CategoryImages/candy.svg";
import chips from "../../assets/CategoryImages/chips.svg";
import drinks from "../../assets/CategoryImages/drinks.svg";
import snacks from "../../assets/CategoryImages/snacks.svg";
import sweets from "../../assets/CategoryImages/sweets.svg";
import icecream from "../../assets/CategoryImages/icecream.svg";
import readyToEat from "../../assets/CategoryImages/readytoeat.svg";
import categoryImage from "../../assets/CategoryImages/category.svg";

import { categories } from './CategoryProps.js';

import { products } from '../../mock_data/data/mockData.js';

function Category() {

    //Reset scroll to top
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;

    ///React Router Dom Hooks
    const params = useParams();
    const navigate = useNavigate();

    ///Find the correct props by :id { props.id, props.title, props.category }
    let renderedProducts = [];
    let props = categories.find(index => index.id === params.id);

    ///If props is undefined, set it equal to "/" category
    if (!props) props = categories[0];

    ///Iterate through all the products list. Push to renderedProducts if categories match
    for (let i = 0; i < products.length; i++){

        const current = products[i];

        if (current.metadata.category === props.category || props.category === "/"){
            renderedProducts.push(
                <ItemEntry id={current.id} name={current.name} image={current.images[0]} price={current.prices[0].unit_amount} stock={current.metadata.quantity}/>
            )
        }
    }

    const navigateItems = () => {
      navigate(-1);
    };
  
    const sendSuggestions = () => {
      alert("Thank you for your suggestions.");
    };
  
    return (
      <div>
        <header className={styles.header}>
          <NavigateBeforeIcon
            className={styles.back}
            style={{ width: 48, height: 48, color: "#FFFFFF" }}
            onClick={navigateItems}
          />
          <p className={styles.title}>{props.title}</p>
        </header>
        <div className={styles.page}>
          <div className={styles.supplies}>
  
            {renderedProducts.map((item) => {
              return <>{item}</>;
            })}
            
            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
              <SuppliesTemplate
                key={item}
                className={styles.item}
                link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
              />
            ))} */}
          </div>
  
          <div>
            <p className={styles.suggestions}>Didn't find what you wanted?</p>
            <div className={styles.suggestionContainer}>
              <input
                className={styles.suggestionInput}
                type="text"
                placeholder="Request"
              />
              <button
                className={styles.suggestionSubmit}
                type="submit"
                onClick={sendSuggestions}
              >
                <SendIcon />
              </button>
            </div>
          </div>
  
          <div>
            <p className={styles.jumpToAnotherCategory}>
              Jump to another category
            </p>
          </div>
  
          <div className={styles.categories}>
            <CategoryTemplate className="Today's Special" link="todays-special" image={today}/>
            <CategoryTemplate className="Candy" link="candy" image={candy}/>
            <CategoryTemplate className="Chips" link="chips" image={chips}/>
  
            <CategoryTemplate className="Drinks" link="drinks"  image={drinks}/>
            <CategoryTemplate className="Snacks" link="snacks"  image={snacks}/>
            <CategoryTemplate className="Sweets" link="sweets"  image={sweets}/>
  
            <CategoryTemplate className="Ice Cream" link="icecream"  image={icecream}/>
            <CategoryTemplate className="Ready To Eat" link="ready-to-eat" image={readyToEat}/>
            <CategoryTemplate className="Category" link="/" image={categoryImage}/>
          </div>
        </div>
        <BottomNav />
      </div>
    );
  
}

export default Category
