import * as functions from "firebase-functions";
import { identicon } from "../helper/helper";
import { db } from "../setup";

export const setDefaultUserImg = functions.auth
  .user()
  .onCreate(async (user): Promise<void> => {
    const { uid } = user;
    const svgIcon = identicon(uid);

    await db.collection("users").doc(uid).set(
      {
        profile_img: svgIcon,
      },
      { merge: true }
    );
  });
