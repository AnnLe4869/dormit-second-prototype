import React from 'react'
import { useInitializeProduct } from '../../../context/product-context'

import styles from './CateItem.module.css'

export default function CateItem() {

  const products = await useInitializeProduct();

  return (
    <div>
        <div className={styles.cateOutline}>
          <img className={styles.cateImage} alt='something change' src='/lays.png'></img>
          <button className='catePlus'><img src="/DesktopAdd.svg"></img></button>
          <div className='catePrice'>$Price</div>
          {products.map()}
        </div>
      </div>
  )
}
