import React from 'react';
import ViewCartCSS from './ViewCart.module.css';

const ViewCart = ({numItems, totalAmount}) => {
    return (
        <button className={ViewCartCSS.viewCart}>

            <div className={ViewCartCSS.items}>{numItems} items</div>
            <h4>View Cart</h4>
            <div className={ViewCartCSS.totalAmount}>${totalAmount}</div>

        </button>
    )
}

export default ViewCart
