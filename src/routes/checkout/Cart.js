import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../checkout/cart.module.css";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Stack,
  Alert,
  CloseButton,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import cartItem from "./cartItem";

const Cart = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  return (
    <div>
      <main>
        <div className={styles.cartButtonDiv}>
          <button className={styles.cartButton} onClick={() => setShow(true)}>
            <div className={styles.price}>$XX.XX</div>
            View Cart
            <div className={styles.count}>X Items</div>
          </button>
        </div>

        <Offcanvas
          show={show}
          onHide={() => setShow(false)}
          placement="bottom"
          style={{ height: "97%" }}
        >
          <Offcanvas.Header closeButton>
            <Stack gap={4}>
              <div style={{ margin: "auto" }}>
                <Offcanvas.Title>
                  <div className={styles.headerText}>Order Details</div>
                </Offcanvas.Title>
              </div>
              <div>
                <hr style={{ "margin-top": "-16px", width: "100%" }}></hr>
              </div>
            </Stack>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className={styles.cartItem}>
              <cartItem />
            </div>
            <br></br>
            <div className={styles.cartItem}>
              <cartItem />
            </div>
            <br></br>
            <div className={styles.cartItem}>
              <cartItem />
            </div>
            <br></br>
          </Offcanvas.Body>

          <Modal.Footer style={{ "white-space": "normal" }}>
            <Stack gap={1}>
              <Container style={{ "max-width": "384px" }}>
                <Row style={{ "margin-bottom": "13px" }}>
                  <Col>
                    <div className={styles.footerSubs}>Subtotal</div>
                  </Col>
                  <Col style={{ "text-align": "right" }}>
                    <div className={styles.footerSubs}>$X.XX</div>
                  </Col>
                </Row>
                <Row style={{ "margin-bottom": "13px" }}>
                  <Col>
                    <div className={styles.footerSubs}>Tax</div>
                  </Col>
                  <Col style={{ "text-align": "right" }}>
                    <div className={styles.footerSubs}>$X.XX</div>
                  </Col>
                </Row>
                <Row style={{ "margin-bottom": "13px" }}>
                  <Col>
                    <div className={styles.footerSubs}>Delivery</div>
                  </Col>
                  <Col style={{ "text-align": "right" }}>
                    <div className={styles.footerSubs}>$X.XX</div>
                  </Col>
                </Row>
                <Row style={{ "margin-bottom": "13px" }}>
                  <Col>
                    <div className={styles.footerTotal}>Total</div>
                  </Col>
                  <Col style={{ "text-align": "right" }}>
                    <div className={styles.footerTotal}>$X.XX</div>
                  </Col>
                </Row>
              </Container>

              <button
                className={styles.footerButton}
                onClick={() => {
                  navigate("/order/details");
                }}
              >
                <div className={styles.footerButtonItemCount}>X Items</div>
                <div className={styles.footerButtonMain}>Review Order</div>
                <div className={styles.footerButtonPrice}>$X.XX</div>
              </button>
            </Stack>
          </Modal.Footer>
        </Offcanvas>
      </main>
    </div>
  );
};

export default Cart;
