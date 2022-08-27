import React from "react";
import styles from "./CategoryMenuItem.module.css";
import { useNavigate } from "react-router-dom";

const CategoryMenuItem = (props) => {
  const navigate = useNavigate();

  const navigateCategory = () => {
    navigate(`/category/${props.link}`);
  };

  return (
    <div className={styles.container} onClick={navigateCategory}>
      <img className={styles.image} src={props.image} alt={props.name} />
    </div>
  );
};
export default CategoryMenuItem;
