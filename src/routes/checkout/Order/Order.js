import React from "react";
import { useCheckout } from "../../../context/user/checkout-handler";
import { useNavigate } from "react-router-dom";

export default function Order({ setStripeClientSecret }) {
  const checkout = useCheckout();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const clientSecret = await checkout({
      shippingAddress: {
        campus: "UCSD",
        building: "CSE",
        floor_apartment: "Floor 3",
      },
      tip: 2510,
      message: "leave the food in front of the door",
    });
    setStripeClientSecret(clientSecret);
    navigate("/checkout/payment");
  };

  return (
    <div>
      <button onClick={handleCheckout}>Pay the charge</button>
    </div>
  );
}
