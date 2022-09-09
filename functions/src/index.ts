import { checkout } from "./func/checkout";
import { postCheckout } from "./func/postCheckout";
import { sendCodeViaEmail } from "./func/sendCodeViaEmail";
import { setDefaultUserImg } from "./func/setDefaultUserImg";
import {
  createCustomer,
  getStripePublishableKey,
  handleStripeWebhookEvents,
} from "./func/stripe";
import { completeOrder } from "./func/testFunc";
import { updateEmail } from "./func/updateEmail";
import { updateUserProfile } from "./func/updateUserProfile";
import { verifyOtpCode } from "./func/verifyOtpCode";

export {
  getStripePublishableKey,
  createCustomer,
  setDefaultUserImg,
  handleStripeWebhookEvents,
  checkout,
  postCheckout,
  sendCodeViaEmail,
  verifyOtpCode,
  updateEmail,
  updateUserProfile,
  /**
   * this is for testing purpose only
   * remove when in development
   */
  // completeOrder,
};
completeOrder;
