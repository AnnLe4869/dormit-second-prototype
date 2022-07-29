import React from "react";
import styles from "./Order.module.css";

import productList from "../../mock_data/data/PRODUCT_MOCK_DATA.json";

import OrderView from "./OrderView/OrderView";

function Order() {
  const order1 = [productList[23]];
  const order2 = [productList[63], productList[41]];
  const order3 = [productList[34], productList[74]];
  const order4 = [
    productList[14],
    productList[24],
    productList[32],
    productList[23],
    productList[54],
    productList[63],
  ];

  const fetchedOrders = [order1, order2, order3, order4];
  console.log(fetchedOrders);
  return (
    <div>
      <div className={styles.centering}>
        <h2>Past Orders</h2>
        {/* all past orders with the products in the props */}
        {fetchedOrders.map((order) => (
          <OrderView order={order} />
        ))}
      </div>
    </div>
  );
}

export default Order;
