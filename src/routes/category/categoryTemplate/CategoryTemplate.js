import React from "react";
import styles from "./CategoryTemplate.module.css";
import { useNavigate } from "react-router-dom";

const CategoryTemplate = (props) => {
  const navigate = useNavigate();

  const navigateCategory = () => {
    navigate("/category/supplies");
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.link} onClick={navigateCategory} />
      <p className={styles.text}> {props.className} </p>
    </div>
  );
};
export default CategoryTemplate;
