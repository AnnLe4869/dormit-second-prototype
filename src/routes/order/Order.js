import React from 'react';
import ReactStars from "react-rating-stars-component";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Order.css';

export default function Order() {
  // example variables
  let orderNumber = 2345;
  let rusherName = 'name';
  let tipImage = 'image';


  let closePage = () => {

  }


  // star rating change event
  let ratingChanged = (newRating) => {
    console.log(newRating);
  }


  // get text from first text area box
  const experienceFieldTextEvent = (e) => {
    let text = e.target.value;
    console.log(text);
  }


  // get text from second text area box
  const feedbackFieldTextEvent = (e) => {
    let text = e.target.value;
  }

  
  // submit form
  const submitForm = () => {

  }


  // // tip selection button attributes
  // const defaultBtn = {background:'white', color:'blueviolet'};
  // const chosenBtn = {background:'blueviolet', color:'white'};
  // const [button1Attr, setbutton1Attr] = React.useState(defaultBtn);
  // const [button2Attr, setbutton2Attr] = React.useState(defaultBtn);
  // const [button3Attr, setbutton3Attr] = React.useState(defaultBtn);
  // const [button4Attr, setbutton4Attr] = React.useState(defaultBtn);
  // // helper function
  // const deselectAllBtns = () => {
  //   setbutton1Attr(defaultBtn);
  //   setbutton2Attr(defaultBtn);
  //   setbutton3Attr(defaultBtn);
  //   setbutton4Attr(defaultBtn);
  // }
  // // tip selection functions
  // const tenPercentTip = () => {
  //   deselectAllBtns();
  //   setbutton1Attr(chosenBtn);

  // }
  // const fifteenPercentTip = () => {
  //   deselectAllBtns();
  //   setbutton2Attr(chosenBtn);

  // }
  // const twentyPercentTip = () => {
  //   deselectAllBtns();
  //   setbutton3Attr(chosenBtn);

  // }
  // const customTip = () => {
  //   deselectAllBtns();
  //   setbutton4Attr(chosenBtn);

  // }


  return (
    <div className='layout'>
      <button className='close' onClick={closePage}>X</button>

      <div className='centering'>
        <div className='orderBox'>
          <h2>Order #<span className='colorPurp'>{orderNumber}</span></h2>
        </div>
      </div>

      <div className='alignFlexStart'>
        <p className='text'>Rate your ordering experience with Dormit</p>

        <ReactStars
          count={4}
          onChange={ratingChanged}
          size={40}
          activeColor="#8a2be2"
        />

        <textarea size="8" className='inputField' placeholder='I believe that...' onChange={experienceFieldTextEvent}></textarea>

        <br/>
        {/* <p className='text'>Tip for Rusher (<span className='colorPurp'>{rusherName}</span>)</p> */}

        {/* tip selection */}
        {/* <div className='tipSelection'>
          <img src={tipImage} id='tipImage'></img>

          <button className='tipBtn' onClick={tenPercentTip} style={button1Attr}>10%</button>
          <button className='tipBtn' onClick={fifteenPercentTip} style={button2Attr}>15%</button>
          <button className='tipBtn' onClick={twentyPercentTip} style={button3Attr}>20%</button>
          <button className='tipBtn' onClick={customTip} style={button4Attr}>Custom</button>
        </div> */}

        <p className='text'>Leave a message for your Rusher (<span className='colorPurp'>{rusherName}</span>) or the Dormit team!</p>

        <textarea size="8" className='inputField' placeholder='I believe that...' onChange={feedbackFieldTextEvent}></textarea>

        <br/>

        {/* submit button */}
        <button id='submitBtn' onClick={submitForm}>Submit</button>
      </div>
    </div>
  )
}
