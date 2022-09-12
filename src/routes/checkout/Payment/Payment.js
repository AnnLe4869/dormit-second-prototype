import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

export default function Payment({ stripePromise, stripeClientSecret }) {
  return (
    <>
      {stripeClientSecret && stripePromise && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: stripeClientSecret }}
        >
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}
