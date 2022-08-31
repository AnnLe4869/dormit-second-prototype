import React from "react";
import { useCheckout } from "../../../context/user/checkout-handler";
import { useNavigate } from "react-router-dom";
import {
  useCheckAuthenticationStatus,
  useSignOut,
} from "../../../context/user/auth-handler";

export default function Order({ setStripeClientSecret }) {
  const checkout = useCheckout();
  const navigate = useNavigate();
  const signOut = useSignOut();
  const authStatus = useCheckAuthenticationStatus();

  const handleCheckout = async () => {
    const { data } = await checkout({
      shippingAddress: {
        campus: "UCSD",
        building: "CSE",
        floor_apartment: "Floor 3",
      },
      tip: 2510,
      message: "leave the food in front of the door",
    });

    setStripeClientSecret(data.clientSecret);
    navigate("/checkout/payment");
  };

  return (
    <div>
      <button onClick={handleCheckout}>Pay the charge</button>
      {authStatus ? (
        <button onClick={signOut}>SIGN OUT</button>
      ) : (
        <button onClick={() => navigate("/auth/phone")}>SIGN IN</button>
      )}
    </div>
  );
}
