import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SuppliesTemplate.module.css";
import Item from '../../item/Item.js'
import Popup from 'reactjs-popup';
import "./SuppliesPopUp.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
        <AddCircleIcon fontSize="40px"/>
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
