import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Account.css';

export default function Account() {

  // example student
  let student = {
    'name': 'Alex',
    'college': 'Revelle',
    'building' : 'building name',
    'floor': 1,
    'apartment': 12,
    'phone': '8585342230',
    'email': 'aturner0@ucsd.edu',
    'pronouns': 'they/them'
  }

  // payment method
  let savedPayments = true;

  const toSurvey = () => {

  }

  const addPaymentMethod = () => {

  }

  return (
    <div>
      <div className='intro'>
        <img src="imagelink.com/img/13718623" id='pfp'></img>

        <div className='text'>
          <h4>{'Hi, ' + student['name'] + ' (' +student['pronouns']+ ')'}</h4>
          <h5>{'UCSD - ' + student['college'] + ' student'}</h5>
          <a href="logout">Log Out</a>
        </div>
      </div>

      <div className='accountPage'>
        <div className='boxes'>
          <div className='head'>
            <h3>Your Impact</h3>
            <br/>
            <img src='impactIcon' className='icon'></img>
          </div>

          <p>{student['name'] + ', you are 1 of (X) ' + student['college'] + ' students who prevented Xg carbon emissions and helped #X Rushers(s)!'}</p>
          <p>Have some time to fill a quick optional survey? Share the link with a friend and get a shout out on Instagram!</p>
          <button className='btn' onClick={toSurvey}>Take me to survey</button>
        </div>

        <div className='boxes'>
          <div className='head'>
            <h3>Profile</h3>
            <img src='profileIcon' className='icon'></img>
          </div>

        </div>

        <div className='boxes'>
          <div className='head'>
            <h3>Payment methods</h3>
            <img src='paymentIcon' className='icon'></img>
          </div>
          <h5>Saved payment methods</h5>
          {savedPayments &&
            <p>No saved methods</p>
          }
          <button className='btn' onClick={addPaymentMethod}>Add payment method</button>
        </div>

        <div className='boxes'>
          <div className='head'>
            <h3>Refer a friend</h3>
            <img src='friendIcon' className='icon'></img>
          </div>
          <p>Get $10 in credits when someone signs up using your referral link. $10 credit will be 
            automatically applied to your account. You will be notified via email.
          </p>
          <p>Share this link</p>
        </div>

        <div className='boxes'>
          <div className='head'>
            <h3>Contact us</h3>
            <img src='contactIcon' className='icon'></img>
          </div>

          <div className='socialMedia'>
            
          </div>

          <div className='contactInfo'>
            <p><a href='link'>dormit.app</a> | team@dormit.app</p>
          </div>

        </div>
      </div>

    </div>
  )
}
