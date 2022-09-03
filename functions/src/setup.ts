import * as admin from "firebase-admin";
import { totp } from "otplib";

admin.initializeApp();
const db = admin.firestore();
totp.options = {
  // the code is valid up to this amount of time
  step: 60 * 15, // 15 minutes
};

export { db, admin, totp };
