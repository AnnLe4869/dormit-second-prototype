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

  const toSurvey = () => {

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
          <h1 className='title'>Your Impact</h1>
          <p>{student['name'] + ', you are 1 of (X) ' + student['college'] + ' students who prevented Xg carbon emissions and helped #X Rushers(s)!'}</p>
          <p>Have some time to fill a quick optional survey? Share the link with a friend and get a shout out on Instagram!</p>
          <button id='surveyBtn' onClick={toSurvey}>Take me to survey</button>
        </div>

        <div className='boxes'>
          <h1 className='title'>Profile</h1>

        </div>

        <div className='boxes'>
          <h1 className='title'>Payment Methods</h1>

        </div>

        <div className='boxes'>
          <h1 className='title'>Refer a friend</h1>

        </div>

        <div className='boxes'>
          <h1 className='title'>Contact Us</h1>

        </div>
      </div>

    </div>
  )
}
