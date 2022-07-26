import React from 'react'
import { Alert } from 'react-bootstrap'
import styles from "../checkout/Cart.module.css"

export const closedStore = () => {
  return (
    <>
    <Alert key='danger' variant='danger' className={styles.closedStoreAlert}>
      Store is closed
    </Alert>
  </>
  )
}
