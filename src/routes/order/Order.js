import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './orderCancel.css';

export default function Order() {

  let dormitLogo = "image";

  // example order items
  let orderItems = [
    {'itemName': 'item1', 'amount': 1, 'image': 'link', 'desc': 'dscription ajfasldkfasldkf  ie asdfjekl asldf le ja asdklfjaldfjasdkfj 3i aid fao3ij faojfaof asdfa sdfasfa sdf s', 'cost': 3.12},
    {'itemName': 'item2', 'amount': 2, 'image': 'link', 'desc': 'dscription', 'cost': 3.12},
    {'itemName': 'item3', 'amount': 1, 'image': 'image', 'desc': 'dscription', 'cost': 3.12}
  ]

  // cancel order
  const cancel = () => {

  }

  return (
    <div className='layout'>
      <img src={dormitLogo} id='logo'></img>
      
      <p id='thankMessage'>Thank you for ordering with <span id='word'>Dormit</span>!</p>



      <p id='text1'>You ordered</p>

      {orderItems.map((item, index) => {
        return (
          <div className='item'>
            <img src={item['image']} className='image'></img>

            <div className='desc'>
              <h4>{item['itemName']}</h4>
              <p>{item['desc']}</p>
            </div>

            <p className='price'>{'$' + item['cost']}</p>
          </div>
        );
      })}

      <button id='cancelBtn' onClick={cancel}>Cancel</button>
    </div>
  )
}
