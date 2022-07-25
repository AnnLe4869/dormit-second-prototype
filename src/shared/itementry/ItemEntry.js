import React, { useState } from 'react';
import './ItemEntry.css';

/*
 * Imported Assets
 */
import greenCheck from '../../assets/ItemEntry/green-check.svg';
import purplePlus from '../../assets/ItemEntry/purple-plus.svg';

const ItemEntry = ({ id, name, image, price, dealPrice, stock }) => {

    //useState() constant for Plus/Check icon
    const [inCart, setInCart] = useState(false);

    let added = inCart;

    /*
     * Function which toggles Plus/Check icon flag.
     */
    function toggleCorner(){
        added = !added;
        setInCart(added);
    }

    /*
     * onClick listener which is called when an item is clicked
     */
    function toggleImage(){
        alert("Apple clicked");
    }

    /*
     * Function which returns description of item stock
     */
    function checkStock(stock){

        if (stock === 0){
            console.log("Out of stock");
            return <p>Out of stock</p>
        }
        else if (stock === 1){
            console.log("Only 1 left!");
            return <p className="purpleFont">Only 1 left!</p>
        }
        else if (stock < 4){
            console.log("Low in stock");
            return <p className="purpleFont">Low in stock</p>
        }
        return;
    }

    return (
        <div className="itemContainer">

            {/* Corner button (Plus/Check) */}
            <button className="itemCorner" onClick={toggleCorner}>
                {inCart ? 
                <img src={greenCheck} alt="Added Item"/> : 
                <img src={purplePlus} alt="Add Item" />}
            </button>
            
            {/* Item image */}
            <button className="itemImage" onClick={toggleImage}>
                <img src={image} alt="Item"/>
            </button>

            {/* Item Info (Price, Stock) */}
            <section 
                className="itemInfo"
                style={ stock ? {}: { color:'#686868'}}
            >
                {dealPrice ?
                    <><p className="purpleFont">${dealPrice}</p><p className="strikeThrough">${price}</p></> :
                    <p>${price}</p>
                }

                <div className="stockInfo">
                    {checkStock(stock)}
                </div>
            </section>
        </div>
    )
}

export default ItemEntry