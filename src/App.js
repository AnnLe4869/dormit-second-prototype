import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useInitializeApp } from "./context/app-context";
import AccountPage from "./routes/account/Account";
import AuthPage from "./routes/auth/Auth";
import CheckoutPage from "./routes/checkout/Checkout";
import Homepage from "./routes/home/Home";
import OrderPage from "./routes/order/Order";
import SearchPage from "./routes/search/Search";
import Supplies from "./routes/Supplies/Supplies";
import Browse from "./routes/Category/Category";

function App() {
  useInitializeApp();

  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />} />

        <Route path="/auth" element={<AuthPage />} />

        <Route path="/order" element={<OrderPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/account" element={<AccountPage />} />

        <Route path="/supplies" element={<Supplies />} />

        <Route path="/browse" element={<Browse />} />

        <Route path="/" element={<Homepage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
