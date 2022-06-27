import React from "react";
import styles from "../Account.module.css";
export default function Contact() {
  let instagramImg = "img";
  let facebookImg = "img";
  let tiktokImg = "img";
  let linkedinImg = "img";

  let contactIcon = "img";

  // handle social media
  const openInstagram = () => {};

  const openFacebook = () => {};

  const openTiktok = () => {};

  const openLinkedin = () => {};

  return (
    <div className={styles.boxes}>
      <div className={styles.head}>
        <h3 className={styles.boxTitle}>Contact us</h3>
        <img
          src={contactIcon}
          className={styles.icon}
          id={styles.contactIcon}
          alt="contact"
        ></img>
      </div>
      <hr className={styles.lineDiv} id={styles.contactLine} />

      <div className={styles.socialMedia}>
        <div className={styles.rows}>
          <button
            style={{ background: instagramImg }}
            className={styles.mediaIcon}
            onClick={openInstagram}
          ></button>
          <button
            style={{ background: facebookImg }}
            className={styles.mediaIcon}
            onClick={openFacebook}
          ></button>
        </div>
        <div className={styles.rows}>
          <button
            style={{ background: tiktokImg }}
            className={styles.mediaIcon}
            onClick={openTiktok}
          ></button>
          <button
            style={{ background: linkedinImg }}
            className={styles.mediaIcon}
            onClick={openLinkedin}
          ></button>
        </div>
      </div>

      <div className="contactInfo">
        <p>
          <a href="link">dormit.app</a> | team@dormit.app
        </p>
      </div>
    </div>
  );
}
