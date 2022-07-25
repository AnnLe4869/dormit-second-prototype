import React, {useState} from 'react'
import styles from './Auth.module.css'
import PhoneCheck from './PhoneCheck/PhoneCheck'
import PhoneAuth from './PhoneAuth/PhoneAuth'
import Register from './Register/Register'
import LostAccess from './LostAccess/LostAccess'

import { Container } from "react-bootstrap";

export default function Auth() {

  // Checking what step the client is on. That way we can stay in the same popup
  let [step, setStep] = useState(1)
  let [lostAccessStep, setLostAccessStep] = useState(1)
  let [access, setAccess] = useState(true)
  let showStep;
  let lostAccessSteps;

  const lostAccess = () => {
    setAccess(false)
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  if(step === 1) { showStep = <PhoneCheck nextStep={nextStep} lostAccess={lostAccess} /> }
  if(step === 2) { showStep = <PhoneAuth nextStep={nextStep}/> }
  if(step === 3) { showStep = <Register nextStep={nextStep}/> }




  const nextAccessStep = () => {
    setLostAccessStep(lostAccessStep + 1)
  }

  if(lostAccessStep === 1) { lostAccessSteps = <LostAccess nextStep={nextAccessStep}/> }
  if(lostAccessStep === 2) { lostAccessSteps = <PhoneAuth nextStep={nextAccessStep}/> }
  if(lostAccessStep === 3) { lostAccessSteps = <Register nextStep={nextAccessStep}/> }
  


  return (
    <div className={styles.backgroundCheckout}>

      <div className={styles.popup}>

        <Container>

          {access ? showStep : lostAccessSteps}

        </Container>

      </div>

    </div>
    
  )
}
