import { useContext, useEffect } from "react";
import { AppContext } from "../../context/app-context";
import { useInitializeAllOrders } from "../../context/user/order-handler";
import { UserContext } from "../../context/user/user-context";

export default function Test() {
  const { state } = useContext(UserContext);
  const initializeOrders = useInitializeAllOrders();

  useEffect(() => {
    if (state.isAuthenticated) {
      console.log("hello world");
      initializeOrders();
    }
  }, [state.isAuthenticated]);

  return (
    <main>
      <h1>Test</h1>
    </main>
  );
}
