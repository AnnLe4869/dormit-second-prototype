import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import styles from "./CheckoutForm.module.css";

import { useActivateErrorAlert } from "../../../context/alert/alert-handler";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const activateErrorAlert = useActivateErrorAlert();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/test`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      activateErrorAlert(error.message);
    } else {
      activateErrorAlert("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <Container
      sx={{
        minHeight: "80vh",
        width: {
          lg: "60%",
          md: "80%",
          xs: "100%",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        id="payment-form"
        style={{
          width: "100%",
        }}
        className={styles.paymentForm}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" fontWeight="700" sx={{ mb: 6 }}>
          Payment
        </Typography>

        <PaymentElement id="payment-element" />

        <button
          id="submit"
          className={styles.paymentButton}
          disabled={isLoading || !stripe || !elements}
          style={{
            position: "relative",
          }}
        >
          <span id="button-text">
            Pay now
            {isLoading && (
              <CircularProgress
                size={24}
                sx={{
                  color: green[500],
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </span>
        </button>
      </form>
    </Container>
  );
}
