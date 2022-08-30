import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useInitializeApp } from "./context/app-context";
import AccountPage from "./routes/account/Account";
import AuthPage from "./routes/auth/Auth";
import CheckoutPage from "./routes/checkout/Checkout";
import Homepage from "./routes/home/Home";
import OrderPage from "./routes/order/OrderPage";
import SearchPage from "./routes/search/Search";
import Supplies from "./routes/category/supplies/Supplies";
import Category from "./routes/category/Category";

import Current from "./routes/order/Current/Current";
import Past from "./routes/order/Past/Past";
import Selected from "./routes/order/Selected/Selected";
import OrderDetails from "./routes/checkout/OrderDetails";
import CompletedOrder from "./routes/checkout/CompletedOrder";

import Test from "./routes/test/Test";
import Order from "./routes/order/Order";
import Cart from "./shared/view-cart/Cart";
import { Home } from "@mui/icons-material";

function App() {
  useInitializeApp();

  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/auth/*" element={<AuthPage />} />

        <Route path="/order/*" element={<OrderPage />}/>

        <Route path="/checkout" element={<OrderDetails />} />

        <Route path="/account" element={<AccountPage />} />

        <Route path="/category">
          <Route index element={<Category />} />
          <Route path="supplies" element={<Supplies />} />
        </Route>

        {/*this is special route for testing only. Delete when done*/}
        <Route path="/test" element={<Test />} />

        <Route path="/" element={<Homepage />} exact />
        <Route path="/complete" element={<CompletedOrder />} exact />
      </Routes>
    </Router>
  );
}

export default App;
