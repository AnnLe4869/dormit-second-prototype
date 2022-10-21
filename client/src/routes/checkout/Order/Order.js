import React, { useContext } from "react";
import { useCheckout } from "../../../context/user/checkout-handler";
import { useNavigate } from "react-router-dom";
import {
  useCheckAuthenticationStatus,
  useSignOut,
} from "../../../context/user/auth-handler";
import { UserContext } from "../../../context/user/user-context";

export default function Order({ setStripeClientSecret }) {
  const checkout = useCheckout();
  const navigate = useNavigate();
  const { state } = useContext(UserContext);

  /**
   * this is mock data
   * use real data from user input
   */
  const TIP = 1235;
  const MESSAGE = "leave the food in front of the door";
  const REPLACEMENT_OPTION = 0;
  state.shipping_address = {
    campus: "UCSD",
    building: "CSE",
    floor_apartment: "Floor 3",
  };

  const signOut = useSignOut();
  const authStatus = useCheckAuthenticationStatus();

  const handleCheckout = async () => {
    const data = await checkout({
      cart: state.cart,
      shippingAddress: state.shipping_address,
      tip: TIP,
      message: MESSAGE,
      replacementOption: REPLACEMENT_OPTION,
    });

    if (data.isSuccess) {
      setStripeClientSecret(data.clientSecret);
      navigate("/checkout/payment");
    }
  };

  return (
    <div>
      <button onClick={handleCheckout}>Pay the charge</button>
      {authStatus ? (
        <div>
          <button onClick={() => navigate("/auth/signup")}>
            NAVIGATE TO SIGN UP
          </button>

          <button onClick={signOut}>SIGN OUT</button>
        </div>
      ) : (
        <div>
          <button onClick={() => navigate("/auth/phone")}>SIGN IN</button>
        </div>
      )}
    </div>
  );
}
