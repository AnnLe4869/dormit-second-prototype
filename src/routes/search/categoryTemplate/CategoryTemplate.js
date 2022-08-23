import React from "react";
import styles from "./CategoryTemplate.module.css";
import { useNavigate } from "react-router-dom";

const CategoryTemplate = (props) => {
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
export default CategoryTemplate;
