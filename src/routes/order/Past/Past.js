import React from "react";
import styles from "../Order.module.css";
import BottomNav from "../../../shared/bottom-nav/BottomNav";
import productList from "../../../mock_data/data/PRODUCT_MOCK_DATA.json";

import OrderView from "../OrderView/OrderView";
import { Container } from "@mui/system";

function Past() {
  const order1 = { products: [productList[23]], status: "completed" };
  const order2 = { products: [productList[33]], status: "completed" };
  const order3 = { products: [productList[43]], status: "completed" };
  const order4 = { products: [productList[13]], status: "completed" };

  const fetchedOrders = [order1, order2, order3, order4];

  return (
    <>
      <Container>
        <div className={styles.centering}>
          {/* all past orders with the products in the props */}
          <h2>Completed</h2>
          {fetchedOrders.map((order, index) => (
            <OrderView key={index} order={order} />
          ))}
        </div>
      </Container>
      <BottomNav currentPage="home" />
    </>
  );
}

export default Past;
