export default {
  stripeSecretKey: process.env.STRIPE_API_KEY || "stripe api key error",
  stripeWebhookSecret:
    process.env.STRIPE_WEBHOOK_SECRET || "stripe webhook secret error",
  otpSecret: process.env.OTP_SECRET || "otp secret error",
};
