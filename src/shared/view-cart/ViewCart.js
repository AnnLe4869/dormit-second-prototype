import React from 'react';
import './ViewCart.css';

const ViewCart = ({numItems, totalAmount}) => {
    return (
        <button className="viewCart">

            <div className="items">{numItems} items</div>
            <h4>View Cart</h4>
            <div className="totalAmount">${totalAmount}</div>

        </button>
    )
}

export default ViewCart
