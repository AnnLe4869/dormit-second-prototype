import React from "react";
import styles from "../Account.module.css";
import { Box } from "@mui/material";
import { AccountBox } from "../muiStyles";

export default function Referral() {
  let friendIcon = "img";

  // variables
  let referalLink = "link";
  // copy referral link to clipboard
  const copyReferralLink = () => {};
  return (
    <Box sx={AccountBox}>
      <div className={styles.head}>
        <h3 className={styles.boxTitle}>Refer a friend</h3>
        <img
          src={friendIcon}
          className={styles.icon}
          id={styles.friendIcon}
          alt="friend"
        ></img>
      </div>
      <hr className={styles.lineDiv} id={styles.friendLine} />

      <p>
        Get $10 in credits when someone signs up using your referral link. $10
        credit will be automatically applied to your account. You will be
        notified via email.
      </p>
      <p>Share this link</p>
      <div className={styles.rowToColumn}>
        <input
          type="text"
          value={referalLink}
          style={{ width: "max(200px,30%)" }}
          readOnly
        ></input>
        <br />
        <button className={styles.btn} onClick={copyReferralLink}>
          copy
        </button>
      </div>
    </Box>
  );
}
