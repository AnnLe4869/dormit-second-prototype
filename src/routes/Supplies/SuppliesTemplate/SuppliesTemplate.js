import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SuppliesTemplate.module.css";
import Item from '../../Item/Item.js'
import Popup from 'reactjs-popup';
import "./SuppliesPopUp.css"

const SuppliesTemplate = (props) => {

  const addToCart = () => {
    alert("Added to cart!");
  }

  const [show, setShow] = useState(false);

  return (
    <>
    <div className={styles.suppliesItemContainer}>
      <div onClick={() => setShow(o => !o)} >
        <img className={styles.image} src={props.link} alt="product" />
      </div>
      <div className={styles.plus} onClick={addToCart}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="plus"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
          ></path>
        </svg>
      </div>
      <div className={styles.price}>$Price</div>
      </div>
      <Popup open={show} className="supplies-popup" modal nested >
        <Item onClose={setShow} link="https://firebasestorage.googleapis.com/v0/b/dormit-second-prototype.appspot.com/o/products%2Fapple.jpg?alt=media&token=372a4141-e0e3-4521-bf51-604ed8622430" />
      </Popup>
    </>
  );
};
export default SuppliesTemplate;
