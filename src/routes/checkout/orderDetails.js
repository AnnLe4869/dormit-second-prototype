import React from "react";
import {
  Button,
  Stack,
  ButtonGroup,
  Form,
  FormGroup,
  Navbar,
} from "react-bootstrap";
import styles from "../checkout/orderDetails.module.css";

const OrderDetails = () => {
  return (
    <div>
      {/* Temporary NavBar */}
      <Navbar
        expand="sm"
        variant="dark"
        sticky="top"
        style={{ "background-color": "#7141FA" }}
      >
        <div
          style={{
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
            margin: "0 auto",
            "font-family": "Poppins",
            "font-size": "56px",
          }}
        >
          <Navbar.Brand href="#">Dormit</Navbar.Brand>
        </div>
      </Navbar>

      <div className={styles.header}>
        <div className={styles.headerText}>Order Details</div>
      </div>
      <div>
        <hr style={{ "margin-top": "-5px", width: "100%" }}></hr>
      </div>
      <Form>
        <div className={styles.addressForm}>
          <div className={styles.title}>Address</div>
          <div className={styles.inputs}>
            <FormGroup
              style={{ "margin-right": "50px" }}
              className={styles.inputDiv}
            >
              <Form.Label bsPrefix={styles.inputTitle}>
                UCSD Building
              </Form.Label>
              <Form.Control type="input" placeholder="Building Name" required />
            </FormGroup>
            <FormGroup className={styles.inputDiv}>
              <Form.Label bsPrefix={styles.inputTitle}>
                Floor / Apt #
              </Form.Label>
              <Form.Control type="input" placeholder="1/12" required />
            </FormGroup>
          </div>

          <FormGroup className={styles.notesDiv}>
            <Form.Label bsPrefix={styles.inputTitle}>Delivery Notes</Form.Label>
            <Form.Control
              type="input"
              placeholder="Notes for your Rusher"
              className={styles.notes}
            />
          </FormGroup>
        </div>
        <hr className={styles.hr}></hr>
        <Stack gap={2} style={{ "margin-bottom": "30px" }}>
          <div className={styles.wh}>
            <Stack>
              <div>Payment</div>
              <div className={styles.payment}>
                **** **** **** 1234
                <button className={styles.nextButton}>
                  <img src="./next.svg"></img>
                </button>
              </div>
            </Stack>
          </div>
          <div className={styles.wh}>
            <Stack>
              <div>Replacement Items</div>
              <ButtonGroup bsPrefix={styles.replacement} required>
                <Button className={styles.replacementButton} type="button">
                  <div className={styles.tip}>Pick for me</div>
                </Button>
                <Button className={styles.replacementButton} type="button">
                  <div className={styles.tip}>Call me</div>
                </Button>
                <Button className={styles.replacementButton} type="button">
                  <div className={styles.tip}>Refund me</div>
                </Button>
              </ButtonGroup>
            </Stack>
          </div>
          <div className={styles.wh}>
            <Stack>
              <div>Tip For Rusher</div>
              <ButtonGroup>
                <button className={styles.tipButton} type="button">
                  <div className={styles.tip}>$1.00</div>
                </button>
                <button className={styles.tipButton} type="button">
                  <div className={styles.tip}>$1.50</div>
                </button>
                <button className={styles.tipButton} type="button">
                  <div className={styles.tip}>$2.00</div>
                </button>
                <button className={styles.tipButton} type="button">
                  <div className={styles.tip}>Custom</div>
                </button>
              </ButtonGroup>
            </Stack>
          </div>
        </Stack>
        <div style={{ "text-align": "center" }}>
          <button
            className={styles.placeOrderButton}
            type="submit"
          >
            <div className={styles.placeOrder}>X Items</div>
            <div className={styles.placeOrder}>Place Order</div>
            <div className={styles.placeOrder}>$X.XX</div>
          </button>
        </div>
      </Form>
    </div>
  );
};

export default OrderDetails;
