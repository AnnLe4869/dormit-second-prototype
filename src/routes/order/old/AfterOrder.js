import React from "react";
import styles from "./AfterOrder.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Order() {
  let dormitLogo = "image";
  let [orderProgress, setOrderProgress] = React.useState(60);

  // example order items
  let orderItems = [
    {
      itemName: "item1",
      amount: 1,
      image: "link",
      desc: "dscription ajfasldkfasldkf  ie asdfjekl asldf le ja asdklfjaldfjasdkfj 3i aid fao3ij faojfaof asdfa sdfasfa sdf s",
      cost: 3.12,
    },
    {
      itemName: "item2",
      amount: 2,
      image: "link",
      desc: "dscription",
      cost: 3.12,
    },
    {
      itemName: "item3",
      amount: 1,
      image: "image",
      desc: "dscription",
      cost: 3.12,
    },
  ];

  // cancel order
  const cancel = () => {};

  return (
    <div>
      <div>Order</div>
      <div id={styles.outerLayout}></div>
      <div className={styles.layout}>
        <img src={dormitLogo} id={styles.logo} alt="after order"></img>

        <p id={styles.thankMessage}>
          Thank you for ordering with <span id={styles.word}>Dormit</span>!
        </p>

        <br />
        <CircularProgressbar value={orderProgress} size="5rem" />
        <br />

        <p id={styles.text1}>You ordered</p>

        {orderItems.map((item, index) => {
          return (
            <div className={styles.item}>
              <img src={item["image"]} className={styles.image}></img>

              <div className={styles.desc}>
                <h4>{item["itemName"]}</h4>
                <p>{item["desc"]}</p>
              </div>

              <p className={styles.price}>{"$" + item["cost"]}</p>
            </div>
          );
        })}

        <button id={styles.cancelBtn} onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
