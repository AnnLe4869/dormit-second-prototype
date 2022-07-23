import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../Style/Cart.module.css"
import { useState } from 'react'
import Cart_item from './Cart_item';
import { Container, Row, Col, Modal, Stack, Alert, CloseButton, Offcanvas} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  return (
    <div>
      <main>
        <div className={styles.Cartbuttondiv}>
          <button className = {styles.Cartbutton} onClick={()=> setShow(true)}>
            View Cart
            <div className={styles.price}>$XX.XX</div>
            <div className={styles.count}>X Items</div>
          </button>
        </div>
        
        <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="bottom"
        style={{"height":"97%"}}
        >
        <Offcanvas.Header closeButton>
        <Stack gap={4}>
            <div style={{"margin":"auto"}}>
                <Offcanvas.Title>
                    <div className={styles.headertext}>Order Details</div>
                </Offcanvas.Title>
            </div>
            <div>
                <hr style={{"margin-top":"-16px", "width":"100%"}}></hr>
            </div>
        </Stack>
        </Offcanvas.Header>


        <Offcanvas.Body>
          <div className={styles.cart_item}><Cart_item /></div>
          <br></br>
          <div className={styles.cart_item}><Cart_item /></div>
          <br></br>
          <div className={styles.cart_item}><Cart_item /></div>
          <br></br>
          {/* <div className={styles.cart_item}><Cart_item /></div>
          <br></br>
          <div className={styles.cart_item}><Cart_item /></div>
          <br></br>  */}
          {/* {Lessquantity()} */}
          {/* {OutOfStock()} */}
          {/* {closedstore()} */}
        </Offcanvas.Body>
        <Modal.Footer style={{'white-space' : 'normal'}}>
          <Stack gap={1}>
          <Container style = {{'max-width':'384px'}}>
            <Row style = {{'margin-bottom':'13px'}}>
              <Col><div className={styles.footer_subs}>Subtotal</div></Col>
              <Col style={{'text-align': 'right'}}><div className={styles.footer_subs}>$X.XX</div></Col>
            </Row>
            <Row style = {{'margin-bottom':'13px'}}>
              <Col><div className={styles.footer_subs}>Tax</div></Col>
              <Col style={{'text-align': 'right'}}><div className={styles.footer_subs}>$X.XX</div></Col>
            </Row>
            <Row style = {{'margin-bottom':'13px'}}>
              <Col><div className={styles.footer_subs}>Delivery</div></Col>
              <Col style={{'text-align': 'right'}}><div className={styles.footer_subs}>$X.XX</div></Col>
            </Row>
            <Row style = {{'margin-bottom':'13px'}}>
              <Col><div className={styles.footer_total}>Total</div></Col>
              <Col style={{'text-align': 'right'}}><div className={styles.footer_total}>$X.XX</div></Col>
            </Row>
          </Container>
          
          <div className={styles.footer_button_div}>
            <button className={styles.footer_button} onClick={() => {navigate("/order/details")}}>
              <div className={styles.ft_text_small2}>X Items</div>
              <div className={styles.ft_text_big}>Review Order</div>
              <div className={styles.ft_text_small}>$X.XX</div>
            </button>
          </div>
          </Stack>
        </Modal.Footer>
      </Offcanvas>
      
      </main>
    </div>
  )
}



const closedstore = () => {
  return(
  <>
    <Alert key='danger' variant='danger' style={{
      'position':'absolute',
      'width':'200px',
      'height':'60px',
      'text-align':'center',
      'background': '#7141FA',
      'top':'2vh',
      'left':'0',
      'color':'white',
      'font-family':'Poppins',
      'font-style':'normal',
      'font-weight':'bold',
      'font-size':'18px'
    }}>
      Store is closed
    </Alert>
  </>
  )
}

const OutOfStock = () => {
  return (
    <>
    <Alert key='danger' variant='danger' style={{
            'position':'absolute',
            'width':'354px',
            'height':'60px',
            'text-align':'center',
            'background': '#EF5247',
            'top':'2vh',
            'right':'0',
            'color':'white',
            'font-family':'Poppins',
            'font-style':'normal',
            'font-weight':'bold',
            'font-size':'18px'
          }}>
            <CloseButton style={{'position':'relative',
            'top':'10%',
            'right':'5%'}} variant='white'/>[ItemName] Out of Stock
          </Alert>
    </>
  )
}

const Lessquantity = () => {
  return(
    <>
    <Alert key='danger' variant='danger' style={{
            'position':'absolute',
            'width':'411px',
            'background': '#EF5247',
            'height':'60px',
            'text-align':'center',
            'top':'10vh',
            'right':'0',
            'color':'white',
            'font-family':'Poppins',
            'font-style':'normal',
            'font-weight':'bold',
            'font-size':'18px'
          }}>
            <CloseButton style={{'position':'relative',
            'top':'10%',
            'right':'5%'}} variant='white'/>[ItemName] Reduced Stock & Quantity
          </Alert>
    </>
  )
}

export default Cart