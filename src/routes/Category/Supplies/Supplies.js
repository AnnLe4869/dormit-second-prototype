import React from "react";
import styles from "./Supplies.module.css";
import SuppliesTemplate from "./suppliesTemplate/SuppliesTemplate";
import { AiOutlineSend } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Supplies = (props) => {
  const navigate = useNavigate();
  const navigateItems = () => {
    navigate("/category");
  };

  const sendSuggestions = () => {
    alert("Thank you for your suggestions.");
  }

  return (
    <div>
      <header className={styles.header}>
        <svg
          onClick={navigateItems}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={styles.back}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>

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
          <p className={styles.suggestions}>Didn't see what you wanted?</p>
          <div className={styles.suggestionContainer}>
            <input className={styles.suggestionInput} type="text" placeholder="Tell us what to add" />
            <button className={styles.suggestionSubmit} type="submit" onClick={sendSuggestions}>
              <AiOutlineSend />
            </button>
          </div>
        </div>

        <div>
          <p className={styles.noMoreSupplies}>
            No more supplies... looking for these?
          </p>
        </div>

        <div className={styles.supplies}>
          {[1, 2, 3, 4, 5].map((item) => (
            <SuppliesTemplate
              key={item}
              className={styles.item}
              link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Supplies;
