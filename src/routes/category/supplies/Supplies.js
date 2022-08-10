import React from "react";
import styles from "./Supplies.module.css";
import SuppliesTemplate from "./suppliesTemplate/SuppliesTemplate";
import CategoryTemplate from "../categoryTemplate/CategoryTemplate";
import { useNavigate } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SendIcon from "@mui/icons-material/Send";
import today from "../../../assets/CategoryImages/todays-special.svg";
import candy from "../../../assets/CategoryImages/candy.svg";
import chips from "../../../assets/CategoryImages/chips.svg";
import drinks from "../../../assets/CategoryImages/drinks.svg";
import snacks from "../../../assets/CategoryImages/snacks.svg";
import sweets from "../../../assets/CategoryImages/sweets.svg";
import icecream from "../../../assets/CategoryImages/icecream.svg";
import readyToEat from "../../../assets/CategoryImages/readytoeat.svg";
import categoryImage from "../../../assets/CategoryImages/category.svg";
import BottomNav from "../../../shared/bottom-nav/BottomNav";

const Supplies = (props) => {
  const navigate = useNavigate();
  const navigateItems = () => {
    navigate("/category");
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
        <p className={styles.title}>Supplies</p>
      </header>
      <div className={styles.page}>
        <div className={styles.supplies}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
            <SuppliesTemplate
              key={item}
              className={styles.item}
              link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
            />
          ))}
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
          <CategoryTemplate className="Today's Special" link={today} />
          <CategoryTemplate className="Candy" link={candy} />
          <CategoryTemplate className="Chips" link={chips} />

          <CategoryTemplate className="Drinks" link={drinks} />
          <CategoryTemplate className="Snacks" link={snacks} />
          <CategoryTemplate className="Sweets" link={sweets} />

          <CategoryTemplate className="Ice Cream" link={icecream} />
          <CategoryTemplate className="Ready To Eat" link={readyToEat} />
          <CategoryTemplate className="Category" link={categoryImage} />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
export default Supplies;
