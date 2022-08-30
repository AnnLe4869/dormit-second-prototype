import React, { useEffect } from "react";
import styles from "./CompletedOrder.module.css";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import CompletedOrderItem from "./CompletedOrderItem";
import apple from "../../mock_data/images/apple.jpg";
import { useNavigate } from "react-router-dom";

const CompletedOrder = () => {
  const [percent, setpercent] = useState(0);
  const items = [
    <CompletedOrderItem
      name="Apple"
      pic={apple}
      quantity={5}
      price={2}
      desc="Apple"
    />,
    <CompletedOrderItem
      name="Apple"
      pic={apple}
      quantity={6}
      price={2}
      desc="Apple"
    />,
    <CompletedOrderItem
      name="Apple"
      pic={apple}
      quantity={54}
      price={2}
      desc="Apple"
    />,
    <CompletedOrderItem
      name="Apple"
      pic={apple}
      quantity={23}
      price={2}
      desc="Apple"
    />,
  ];
  const donothing = () => {};

  useEffect(() => {
    setTimeout(() => {
      percent < 100 ? setpercent(percent + 1) : donothing();
    }, 50);
  });

  return (
    <>
      <img src="./Logo.svg" alt="logo" className={styles.logo}></img>
      {/* <div className={styles.title}>Dormit</div> */}
      <div className={styles.thanks}>
        Thank you for ordering with
        <mark className={styles.markthanks}>Dormit!</mark>
      </div>
      <div className={styles.progressbar}>
        <CircularProgressbarWithChildren
          value={percent}
          counterClockwise={true}
          styles={buildStyles({
            pathColor: "#7141FA",
          })}
        >
          {percent < 100 ? (
            <div className={styles.progresstext}>Placing Order</div>
          ) : (
            <div className={styles.progresstext}>Order Finalized</div>
          )}
        </CircularProgressbarWithChildren>
      </div>
      <div className={styles.order}>You Ordered</div>
      <div className={styles.orderedItems}>
        {items.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
      {percent < 100 ? (
        <button className={styles.cancelbutton}>Cancel</button>
      ) : null}
    </>
  );
};

export default CompletedOrder;
