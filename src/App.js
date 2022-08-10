import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useInitializeApp } from "./context/app-context";
import AccountPage from "./routes/account/Account";
import AuthPage from "./routes/auth/Auth";
import OtpcodePhone from "./routes/auth/Phone/Otpcode";
import OtpcodeEmail from "./routes/auth/Email/Otpcode";
import Phone from "./routes/auth/Phone/Phone";
import Email from "./routes/auth/Email/Email";
import Reset from "./routes/auth/Email/Reset";
import Register from "./routes/auth/Register/Register";
import CheckoutPage from "./routes/checkout/Checkout";
import Homepage from "./routes/home/Home";
import OrderPage from "./routes/order/Order";
import SearchPage from "./routes/search/Search";
import Supplies from "./routes/category/supplies/Supplies";
import Category from "./routes/category/Category";
import Current from "./routes/order/Current/Current";
import Past from "./routes/order/Past/Past";
import Selected from "./routes/order/Selected/Selected";
import Test from "./routes/test/Test";

function App() {
  useInitializeApp();

  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />} />

        <Route path="auth" element={<AuthPage />}>
          <Route index element={<Phone />} />
          <Route path="phone/otpcode" element={<OtpcodePhone />} />
          <Route path="signup" element={<Register />} />
          <Route path="email" element={<Email />} />
          <Route path="email/otpcode" element={<OtpcodeEmail />} />
          <Route path="email/reset" element={<Reset />} />
        </Route>

        <Route path="/order">
          <Route index element={<OrderPage />} />
          <Route exact path="current" element={<Current />} />
          <Route exact path="past" element={<Past />} />
          <Route path=":orderId" element={<Selected />} />
        </Route>

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
