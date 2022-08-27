import React from "react";
import styles from "./Order.module.css";
import productList from "../../mock_data/data/PRODUCT_MOCK_DATA.json";

import OrderView from "./OrderView/OrderView";
import { Container } from "@mui/system";

function Order() {
  const order1 = { products: [productList[23]], status: "completed" };
  const order2 = { products: [productList[23]], status: "completed" };
  const order3 = {
    products: [productList[23], productList[18], productList[36]],
    status: "current",
  };

  const fetchedOrders = [order1, order2, order3];

  const completedOrders = fetchedOrders.filter(
    (product) => product.status === "completed"
  );

  const currentOrders = fetchedOrders.filter(
    (product) => product.status === "current"
  );
  return (
    <Container>
      <div className={styles.centering}>
        {/* all past orders with the products in the props */}
        <h2>Current</h2>
        {currentOrders.map((order, index) => (
          <OrderView key={index} order={order} />
        ))}

        <h2>Completed</h2>
        {completedOrders.map((order, index) => (
          <OrderView key={index} order={order} />
        ))}
      </div>
    </Container>
  );
}

export default Order;
