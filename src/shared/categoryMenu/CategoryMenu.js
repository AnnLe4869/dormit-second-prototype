import React from "react";
import styles from "./CategoryMenu.module.css";
import { useNavigate } from "react-router-dom";

const CategoryMenu = (props) => {
  const navigate = useNavigate();

  const navigateCategory = () => {
    navigate(`/category/${props.link}`);
  };

  return (
    <div className={styles.container} onClick={navigateCategory}>
      <img className={styles.image} src={props.image} alt={props.className} />
    </div>
  );
};
export default CategoryMenu;
