export default {
  /**
   * these are secrets and must be treated as Firebase secret
   * https://firebase.google.com/docs/functions/config-env#create-secret
   */
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || "stripe api key error",
  stripeWebhookSecret:
    process.env.STRIPE_WEBHOOK_SECRET || "stripe webhook secret error",
  otpSecret: process.env.OTP_SECRET || "otp secret error",

  /**
   * these are environment variables and not secret
   * can be more relaxed
   */
  shippingFee: process.env.SHIPPING_FEE || "195",
  stripePublishableKey:
    process.env.STRIPE_PUBLISHABLE_KEY || "stripe public key error",
};
