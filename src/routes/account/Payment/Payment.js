import React from "react";
import styles from "../Account.module.css";

export default function Payment() {
  const addPaymentMethod = () => {};
  // payment method
  let savedPayments = [
    { icon: "img", name: "name" },
    { icon: "img2", name: "name2" },
  ];
  let paymentIcon = "img";
  return (
    <div className={styles.boxes}>
      <div className={styles.head}>
        <h3 className={styles.boxTitle}>Payment methods</h3>
        <img
          src={paymentIcon}
          className={styles.icon}
          id={styles.paymentIcon}
          alt="payment"
        ></img>
      </div>
      <hr className={styles.lineDiv} id={styles.paymentLine} />
      <h5>Saved payment methods</h5>
      {savedPayments.map((paymentMethod, index) => {
        return (
          <div className={styles.rows}>
            <img
              scr={paymentMethod["icon"]}
              className={styles.smallIcon}
              alt="payment"
            ></img>
            <p>{paymentMethod["name"]}</p>
          </div>
        );
      })}

      {savedPayments.length === 0 && <p>No saved methods</p>}
      <button className={styles.btn} onClick={addPaymentMethod}>
        Add payment method
      </button>
    </div>
  );
}
