import React from "react";
import styles from "./Account.module.css";

import { Container } from "react-bootstrap";

import Intro from "./Intro/Intro";
import Impact from "./Impact/Impact";
import Profile from "./Profile/Profile";
import Payment from "./Payment/Payment";
import Referral from "./Referral/Referral";
import Contact from "./Contact/Contact";

export default function Account() {
  return (
    <Container className={styles.layout}>
      <Intro />
      <Impact />
      <Profile />
      <Payment />
      <Referral />
      <Contact />
    </Container>
  );
}
