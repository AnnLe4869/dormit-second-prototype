import { useContext, useEffect } from "react";
import { AppContext } from "../../context/app-context";
import {
  useGetAllNonFetchedPastOrder,
  useGetAllPastOrders,
  useInitializeAllOrders,
} from "../../context/user/order-handler";
import { UserContext } from "../../context/user/user-context";

export default function Test() {
  const { state } = useContext(UserContext);
  const initializeOrders = useInitializeAllOrders();
  const initializePast = useGetAllPastOrders();
  const initializeNonFetched = useGetAllNonFetchedPastOrder();

  useEffect(() => {
    if (state.isAuthenticated) {
      initializeOrders();
      // initializePast();
    }
  }, [state.isAuthenticated]);

  return (
    <main>
      <h1>Test</h1>
    </main>
  );
}
