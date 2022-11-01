import { createContext, useState } from "react";
import { orderData } from "../data/orderData";

export const orderCtx = createContext();

const OrderProvider = (props) => {
  const [orders, setOrders] = useState(orderData.map((e) => e));

  return (
    <orderCtx.Provider value={[orders, setOrders]}>
      {props.children}
    </orderCtx.Provider>
  );
};

export default OrderProvider;
