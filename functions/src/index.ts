import { checkout } from "./func/checkout";
import { postCheckout } from "./func/postCheckout";
import { sendCodeViaEmail } from "./func/sendCodeViaEmail";
import {
  createCustomer,
  handleStripeWebhookEvents,
  getStripePublishableKey,
} from "./func/stripe";
import { fillCustomerInfo } from "./func/testFunc";
import { updateEmail } from "./func/updateEmail";
import { updateUserProfile } from "./func/updateUserProfile";
import { verifyOtpCode } from "./func/verifyOtpCode";

fillCustomerInfo;

export {
  getStripePublishableKey,
  createCustomer,
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
  fillCustomerInfo,
};
