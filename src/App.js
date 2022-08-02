import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useInitializeApp } from "./context/app-context";
import AccountPage from "./routes/account/Account";
import AuthPage from "./routes/auth/Auth";
<<<<<<< Updated upstream
import CheckoutPage from "./routes/checkout/Checkout";
=======
import OrderDetails from "./routes/checkout/OrderDetails"
>>>>>>> Stashed changes
import Homepage from "./routes/home/Home";
import OrderPage from "./routes/order/Order";
import SearchPage from "./routes/search/Search";
import Supplies from "./routes/Category/Supplies/Supplies";
import Category from "./routes/Category/Category";

function App() {
  useInitializeApp();

  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />} />

        <Route path="/auth" element={<AuthPage />} />

        <Route path="/order" element={<OrderPage />} />

<<<<<<< Updated upstream
        <Route path="/checkout" element={<CheckoutPage />} />
=======
        <Route path="/checkout" element={<OrderDetails />} />
>>>>>>> Stashed changes

        <Route path="/account" element={<AccountPage />} />

        <Route path="/category" element={<Category />} />
        <Route path="/category/supplies" element={<Supplies />} />

        <Route path="/" element={<Homepage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
