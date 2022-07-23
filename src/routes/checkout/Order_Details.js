import React from 'react'
import {Button, Stack, ButtonGroup, Form, FormGroup, Navbar} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import styles from "../Style/Order_Details.module.css"


const Review_Cart = () => {
    
    let navigate = useNavigate();

  return (
    <div>
        <Navbar expand="sm" variant="dark" sticky='top' style={{"background-color":"#7141FA"}}>
            <div style={{"display":"flex", "justify-content":"center", "align-items":"center", "margin":"0 auto",
                        "font-family":"Poppins", "font-size":"56px"}}>
                <Navbar.Brand href="#">Dormit</Navbar.Brand>
            </div>
        </Navbar>


        <div className={styles.header}>
            <div className={styles.headertext}>
            Order Details
            </div>
        </div>
        <div>
            <hr style={{"margin-top":"-5px", "width":"100%"}}></hr>
        </div>
        <Form>
            <div className={styles.addressform}>
                <div className={styles.title}>Address</div>
                <div className={styles.inputs}>
                    <FormGroup style={{"margin-right":"50px"}} className={styles.input_div}>
                        <Form.Label bsPrefix={styles.input_title}>UCSD Building</Form.Label>
                        <Form.Control type="input" placeholder="Building Name" required/>
                    </FormGroup>
                    <FormGroup className={styles.input_div}>
                        <Form.Label bsPrefix={styles.input_title}>Floor / Apt #</Form.Label>
                        <Form.Control type="input" placeholder="1/12" required />
                    </FormGroup>
                </div>

                <FormGroup className={styles.notes_div}>
                        <Form.Label bsPrefix={styles.input_title}>Delivery Notes</Form.Label>
                        <Form.Control type="input" placeholder="Notes for your Rusher" className={styles.notes}/>
                </FormGroup>
                
            </div>
            <hr className={styles.hr}></hr>
            <Stack gap={2} style={{"margin-bottom": "30px"}}>
                <div className={styles.wh}>
                    <Stack>
                        <div>Payment</div>
                        <div className={styles.payment}>
                            <img src="./public/wallet.svg" style={{'margin-right':'15px'}}></img>
                            **** **** **** 1234
                            <button className={styles.nextbutton}>
                                <img src='./next.svg'></img>
                            </button>
                        </div>
                    </Stack></div>
                <div className={styles.wh}>
                    <Stack>
                        <div>Replacement Items</div>
                        <ButtonGroup bsPrefix={styles.replacement} required>
                            <Button className={styles.replacement_button} type="button"><div className={styles.tip}>Pick for me</div></Button>
                            <Button className={styles.replacement_button} type="button"><div className={styles.tip}>Call me</div></Button>
                            <Button className={styles.replacement_button} type="button"><div className={styles.tip}>Refund me</div></Button>
                        </ButtonGroup>
                    </Stack>
                </div>
                <div className={styles.wh}>
                    <Stack>
                        <div>Tip For Rusher</div>
                        <ButtonGroup>
                            <button className={styles.tipbutton} type="button"><div className={styles.tip}>$1.00</div></button>
                            <button className={styles.tipbutton} type="button"><div className={styles.tip}>$1.50</div></button>
                            <button className={styles.tipbutton} type="button"><div className={styles.tip}>$2.00</div></button>
                            <button className={styles.tipbutton} type="button"><div className={styles.tip}>Custom</div></button>
                        </ButtonGroup>
                    </Stack>
                </div>
            </Stack>
            <div style={{"text-align":"center"}}>
                <button className={styles.placeorderbutton} type="submit" onClick={()=>{navigate("/order/complete")}}>
                    <div className={styles.placeorder}>X Items</div>
                    <div className={styles.placeorder}>Place Order</div>
                    <div className={styles.placeorder}>$X.XX</div>
                </button>
            </div>
        </Form>
    </div>
  )
}

export default Review_Cart