import React from 'react'
import styles from '../Order.module.css'
import apple from '../../../mock_data/images/apple.jpg'

function OrderView({order}) {

    const totalProducts = order.length

  return (
    <div className={styles.orderContainer}>
            <div className={styles.imageContainer}>
                {order.map((product, index) => index < 3 ? <div><img src={apple} /></div> : index < 4 ? <span>+{totalProducts-3} items</span> : false)}
            </div>
            <div className={styles.textContainer}>
                <div className={styles.orderInfo}>
                    {/* Mapping ove items */}
                    <h3>
                    {
                        //mapping over products from props
                        order.map((product, index) => {
                            return <span>{(index ? ', ' : '') + product.name}</span>
                        })
                    }
                    </h3>

                    <p>March 22 at 08:05 pm</p>
                    <p>$11.55 • {order.length} item{order.length > 1 ? "s" : ""}</p>
                    <p>Complete</p>              
                </div>
            
        </div>
        <div className={styles.orderAction}>
                {/* Reorder and report */}
                <button className={styles.colorPurple}>Reorder</button>
                <button className={styles.colorRed}>Report</button>
            </div>
    </div>
  )
}

export default OrderView