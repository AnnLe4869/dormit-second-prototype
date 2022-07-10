export default {
  stripeSecretKey: process.env.STRIPE_API_KEY || "stripe api key error",
  otpSecret: process.env.OTP_SECRET || "otp secret error",
};
