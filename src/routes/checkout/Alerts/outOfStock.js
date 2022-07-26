import React from 'react'
import { Alert } from 'react-bootstrap'
import styles from "../checkout/Cart.module.css"

export const outOfStock = () => {
  return (
    <>
      <Alert key='danger' variant='danger' className={styles.outOfStockAlert}>
              <CloseButton style={{'position':'relative',
              'top':'10%',
              'right':'5%'}} variant='white'/>[ItemName] Out of Stock
            </Alert>
      </>
  )
}
