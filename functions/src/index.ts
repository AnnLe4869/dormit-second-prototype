import { checkout } from "./func/payment/checkout";
import { postCheckout } from "./func/payment/postCheckout";
import { sendCodeViaEmail } from "./func/auth/sendCodeViaEmail";
import { setDefaultUserImg } from "./func/profile/setDefaultUserImg";
import {
  createCustomer,
  getStripePublishableKey,
  handleStripeWebhookEvents,
} from "./func/stripe";
import { completeOrder, initiateTypesense } from "./func/testFunc";
import { updateEmail } from "./func/profile/updateEmail";
import { updateUserProfile } from "./func/profile/updateUserProfile";
import { verifyOtpCode } from "./func/auth/verifyOtpCode";
import {
  onProductCreateTs,
  onProductDeleteTs,
  onProductUpdateTs,
} from "./func/typesense";

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
  onProductCreateTs,
  onProductUpdateTs,
  onProductDeleteTs,
  /**
   * this is for testing purpose only
   * remove when in development
   */
};
initiateTypesense;
completeOrder;
