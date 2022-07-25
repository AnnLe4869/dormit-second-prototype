import React, {useEffect, useRef, useState} from 'react'
import styles from '../Auth.module.css'
import callIcon from '../../../mock_data/images/callVector.png'


const authCode = new Array(4).fill(0)

function Phoneauth({nextStep}) {
    const [currentInput, setCurrentInput] = useState(0)
    let inputRef = useRef(null)
    let buttonRef = useRef()
    

    const handleOnchange = (index) => {
        authCode.splice(index, 1, inputRef.current.value)

        if(currentInput < 3) {
            inputRef.current?.focus()
            return setCurrentInput(currentInput + 1)
        }

        inputRef.current?.blur();
        buttonRef.current.click();
        return
    }

    useEffect(() => {
        inputRef.current?.focus()
        
    })
    
  return (
    <div className={styles.centering}>
        <img src={callIcon} className={styles.callIcon} />
        <h1>Verification</h1>
        <p>We sent you an <span className={styles.purpleText}>SMS code to (xxx) xxx-xxxx</span> </p>
        <div className={styles.squareInputLayout}>
            {
                authCode.map((val, index) => {
                    return <input key={index} onChange={() => handleOnchange(index)} type='number' ref={index === currentInput ? inputRef : null} className={styles.inputVerify} placeholder={val} ></input>
                })
            }
        </div>
        <button ref={buttonRef} onClick={nextStep} className={styles.confirmButton}>Confirm</button>
    </div>
  )
}

export default Phoneauth