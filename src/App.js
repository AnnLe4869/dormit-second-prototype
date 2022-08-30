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
import Test from "./routes/test/Test";

function App() {
  useInitializeApp();

  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />} />

        <Route path="/auth/*" element={<AuthPage />} />

        <Route path="/order/*" element={<OrderPage />}/>

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/account" element={<AccountPage />} />

        <Route path="/category">
          <Route index element={<Category />} />
          <Route path="supplies" element={<Supplies />} />
        </Route>

        {/*this is special route for testing only. Delete when done*/}
        <Route path="/test" element={<Test />} />

        <Route path="/" element={<Homepage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
