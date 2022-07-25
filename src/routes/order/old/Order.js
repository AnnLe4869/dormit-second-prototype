import React from "react";
import ReactStars from "react-rating-stars-component";
import styles from "./Order.module.css";

export default function Order() {
  // example variables
  let orderNumber = 2345;
  let rusherName = "name";
  let closePage = () => {};

  // star rating change event
  let ratingChanged = (newRating) => {
    console.log(newRating);
  };

  // get text from first text area box
  const experienceFieldTextEvent = (e) => {
    let text = e.target.value;
    console.log(text);
  };

  // get text from second text area box
  const feedbackFieldTextEvent = (e) => {
    let text = e.target.value;
  };

  // submit form
  const submitForm = () => {};

  return (
    <div className={styles.layout}>
      <button className={styles.close} onClick={closePage}>
        X
      </button>

      <div className={styles.centering}>
        <div className={styles.orderBox}>
          <h2>
            Order #<span className={styles.colorPurple}>{orderNumber}</span>
          </h2>
        </div>
      </div>

      <div className={styles.alignFlexStart}>
        <p className={styles.text}>Rate your ordering experience with Dormit</p>

        <ReactStars
          count={4}
          onChange={ratingChanged}
          size={40}
          activeColor="#8a2be2"
        />

        <textarea
          size="8"
          className={styles.inputField}
          placeholder="I believe that..."
          onChange={experienceFieldTextEvent}
        ></textarea>

        <br />

        <p className={styles.text}>
          Leave a message for your Rusher (
          <span className="colorPurp">{rusherName}</span>) or the Dormit team!
        </p>

        <textarea
          size="8"
          className={styles.inputField}
          placeholder="I believe that..."
          onChange={feedbackFieldTextEvent}
        ></textarea>

        <br />
        <button className={styles.submitBtn} onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  );
}
