import React from "react";
import styles from "./Cart.module.css";
import { useState } from "react";
import CartItem from "./CartItem/CartItem";
import {
  Container,
  Row,
  Col,
  Modal,
  Stack,
  Alert,
  CloseButton,
} from "react-bootstrap";

const Cart = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <main>
        <div className={styles.Cartbuttondiv}>
          <button className={styles.Cartbutton} onClick={() => setShow(true)}>
            View Cart
            <div className={styles.price}>$XX.XX</div>
            <div className={styles.count}>X Items</div>
          </button>
        </div>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName={styles.modal90w}
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <div className={styles.header}>
              <div className={styles.headertext}>My Cart</div>
            </div>
          </Modal.Header>

          <Modal.Body>
            <div className={styles.cart_item}>
              <CartItem />
            </div>
            <br></br>
            <div className={styles.cart_item}>
              <CartItem />
            </div>
            <br></br>
            <div className={styles.cart_item}>
              <CartItem />
            </div>
            <br></br>
            {/* <div className={styles.cart_item}><CartItem /></div>
          <br></br>
          <div className={styles.cart_item}><CartItem /></div>
          <br></br>  */}
            <Alert
              key="danger"
              variant="danger"
              style={{
                position: "absolute",
                width: "411px",
                background: "#EF5247",
                height: "60px",
                "text-align": "center",
                top: "10vh",
                right: "0",
                color: "white",
                "font-family": "Poppins",
                "font-style": "normal",
                "font-weight": "bold",
                "font-size": "18px",
              }}
            >
              <CloseButton
                style={{ position: "relative", top: "10%", right: "5%" }}
                variant="white"
              />
              [ItemName] Reduced Stock & Quantity
            </Alert>
            <Alert
              key="danger"
              variant="danger"
              style={{
                position: "absolute",
                width: "354px",
                height: "60px",
                "text-align": "center",
                background: "#EF5247",
                top: "2vh",
                right: "0",
                color: "white",
                "font-family": "Poppins",
                "font-style": "normal",
                "font-weight": "bold",
                "font-size": "18px",
              }}
            >
              <CloseButton
                style={{ position: "relative", top: "10%", right: "5%" }}
                variant="white"
              />
              [ItemName] Out of Stock
            </Alert>
            <Alert
              key="danger"
              variant="danger"
              style={{
                position: "absolute",
                width: "200px",
                height: "60px",
                "text-align": "center",
                background: "#7141FA",
                top: "2vh",
                left: "0",
                color: "white",
                "font-family": "Poppins",
                "font-style": "normal",
                "font-weight": "bold",
                "font-size": "18px",
              }}
            >
              Store is closed
            </Alert>
          </Modal.Body>

          <Modal.Footer style={{ "white-space": "normal" }}>
            <Stack gap={1}>
              <Container style={{ width: "384px" }}>
                <Row>
                  <Col>
                    <div className={styles.footer_subs}>Subtotal</div>
                  </Col>
                  <Col style={{ "text-align": "right" }}>
                    <div className={styles.footer_subs}>$X.XX</div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className={styles.footer_subs}>Tax</div>
                  </Col>
                  <Col style={{ "text-align": "right" }}>
                    <div className={styles.footer_subs}>$X.XX</div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className={styles.footer_subs}>Delivery</div>
                  </Col>
                  <Col style={{ "text-align": "right" }}>
                    <div className={styles.footer_subs}>$X.XX</div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className={styles.footer_total}>Total</div>
                  </Col>
                  <Col style={{ "text-align": "right" }}>
                    <div className={styles.footer_total}>$X.XX</div>
                  </Col>
                </Row>
              </Container>

              <div className={styles.footer_button_div}>
                <button className={styles.footer_button}>
                  <div className={styles.ft_text_small2}>X Items</div>
                  <div className={styles.ft_text_big}>Review Order</div>
                  <div className={styles.ft_text_small}>$X.XX</div>
                </button>
              </div>
            </Stack>
          </Modal.Footer>
        </Modal>
      </main>
    </div>
  );
};

export default Cart;
