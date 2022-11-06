import { createContext, useState } from "react";
import { orderData } from "../data/orderData";

export const OrderCtx = createContext();

const OrderProvider = (props) => {
  const [orders, setOrders] = useState(orderData);

  return (
    <OrderCtx.Provider value={[orders, setOrders]}>
      {props.children}
    </OrderCtx.Provider>
  );
};

export default OrderProvider;
