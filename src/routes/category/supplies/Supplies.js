import React from "react";
import styles from "./Supplies.module.css";
import SuppliesTemplate from "./suppliesTemplate/SuppliesTemplate";
import { useNavigate } from "react-router-dom";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SendIcon from '@mui/icons-material/Send';

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
        <NavigateBeforeIcon className={styles.back} style={{ width: 48, height: 48, color: "#FFFFFF" }} onClick={navigateItems}/>
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
              <SendIcon />
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
