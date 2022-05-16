import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Account.css';

export default function Account() {
  // images
  let editIconImage = 'image';
  let profilePicUrl = 'imageUrl';
  let locationIcon = 'icon';
  let contactDeetIcon = 'icon';

  let instagramImg = 'img';
  let facebookImg = 'img';
  let tiktokImg = 'img';
  let linkedinImg = 'img';

  let contactIcon = 'img';
  let friendIcon = 'img';
  let pfpIcon = 'img';
  let impactIcon = 'img';
  let profileIcon = 'img';
  let paymentIcon = 'img';

  // variables
  let numStudents = 30;
  let numRushers = 8;
  let gCarbon = 4;
  let referalLink = 'link';

  // example student
  let student = {
    'name': 'Alex',
    'fullname': 'Alex Turner',
    'college': 'Revelle',
    'building' : 'building name',
    'floor': 1,
    'apartment': 12,
    'phone': '8585342230',
    'email': 'aturner0@ucsd.edu',
    'pronouns': 'they/them',
    // text with same length as actual password
    'password': '******'
  }

  // payment method
  let savedPayments = [
    {'icon': 'img', 'name': 'name'},
    {'icon': 'img2', 'name': 'name2'}
  ]

  const toSurvey = () => {

  }

  const addPaymentMethod = () => {

  }

  const changeProfilePic = () => {

  }


  // edit contact info fields
  let [isEditing, setIsEditing] = React.useState(false);
  const editProfile = () => {
    setIsEditing(true);
  }
  const saveProfileEdit = () => {
    setIsEditing(false);

  }
  const cancelProfileEdit = () => {
    setIsEditing(false);

  }


  // copy referral link to clipboard
  const copyReferalLink = () => {

  }

  // handle social media 
  const openInstagram = () => {

  }

  const openFacebook = () => {

  }

  const openTiktok = () => {

  }

  const openLinkedin = () => {

  }

  return (
    <div id='layout'>
      <div className='intro'>
        <img src={pfpIcon} id='pfp'></img>

        <div className='text'>
          <h4>{'Hi, ' + student['name'] + ' (' +student['pronouns']+ ')'}</h4>
          <h5>{'UCSD - ' + student['college'] + ' student'}</h5>
          <a href="logout">Log Out</a>
        </div>
      </div>

      {/* your impact box */}
      <div className='accountPage'>
        <div className='boxes'>
          <div className='head'>
            <h3>Your Impact</h3>
            <br/>
            <img src={impactIcon} className='icon' id='impactIcon'></img>
          </div>
          <hr className='lineDiv' id='impactLine'/>

          <p>{student['name'] + ', you are 1 of ('}<span className='textColorPurp'>{numStudents}</span>{') '
           + student['college'] + ' students who prevented '}<span className='textColorPurp'>{gCarbon}</span>{'g carbon emissions and helped #'}
           <span className='textColorPurp'>{numRushers}</span>{' Rushers(s)!'}</p>
          <p>Have some time to fill a quick optional survey? Share the link with a friend and get a shout out on Instagram!</p>
          <button className='btn' onClick={toSurvey}>Take me to survey</button>
        </div>

        {/* profile box */}
        <div className='boxes'>
          <div className='head'>
            <h3>Profile</h3>
            <button style={{background: editIconImage}} className='editIcon' onClick={editProfile}></button>
            <img src={profileIcon} className='icon' id='profileIcon'></img>
          </div>
          <hr className='lineDiv' id='profileLine'/>
          <br/>

          <div className='rows'>
            <button style={{background: profilePicUrl, width:'60px', height:'60px'}} onClick={changeProfilePic}></button>
            <div className='editItem'>
              <div className='editTop'>
                <p>Full name</p>
              </div>
              <input type="text" size="8" disabled={!isEditing} defaultValue={student['name']}></input>
            </div>
          </div>

          <div className='rows'>
            <img src={locationIcon} className='smallIcon'></img>
            <h5 className='textColorPurp'>Default Location</h5>
          </div>
          <br/>

          <div className='rows'>
            <div className='editItem'>
              <p>UCSD Building</p>
              <select disabled={!isEditing}>
                <option value="actual value 1">Building 1</option>
                <option value="actual value 2">Display Text 2</option>
                <option value="actual value 3">Display Text 3</option>
              </select>
            </div>
            <div className='editItem'>
              <p>Floor #</p>
              <input type="text" size="8" disabled={!isEditing} defaultValue={student['floor']}></input>
            </div>
            <div className='editItem'>
              <p>Apartment #</p>
              <input type="text" size="8" disabled={!isEditing} defaultValue={student['apartment']}></input>
            </div>
          </div>
          <br/>

          <div className='rows'>
            <img src={contactDeetIcon} className='smallIcon'></img>
            <h5 className='textColorPurp'>Contact Details</h5>
          </div>
          <br/>
          <div className='rows'>
            <div className='editItem'>
              <p>Phone number</p>
              <input type="text" size="8" disabled={!isEditing} defaultValue={student['phone']}></input>
            </div>
            <div className='editItem'>
              <p>Email</p>
              <input type="text" size="8" disabled={!isEditing} defaultValue={student['email']}></input>
            </div>
            <div className='editItem'>
              <p>Password</p>
              <input type="password" size="8" disabled={!isEditing} defaultValue={student['password']}></input>
            </div>
          </div>

          {/* show buttons if editing */}
          {isEditing && 
          <div className='rows'>
            <button className='btn' onClick={saveProfileEdit}>Save</button>
            <button className='btnInverseColor' onClick={cancelProfileEdit}>Cancel</button>
          </div>}
        </div>

        {/* payment methods */}
        <div className='boxes'>
          <div className='head'>
            <h3>Payment methods</h3>
            <img src={paymentIcon} className='icon' id='paymentIcon'></img>
          </div>
          <hr className='lineDiv' id='paymentLine'/>
          <br/>
          <h5>Saved payment methods</h5>
            {savedPayments.map((paymentMethod, index) => {
              return (
                <div className='rows'>
                  <img scr={paymentMethod['icon']} className='smallIcon'></img>
                  <p>{paymentMethod['name']}</p>
                </div>
              );
            })}

            {(savedPayments.length === 0) &&
              <p>No saved methods</p>
            }
          <button className='btn' onClick={addPaymentMethod}>Add payment method</button>
        </div>

        {/* referral box */}
        <div className='boxes'>
          <div className='head'>
            <h3>Refer a friend</h3>
            <img src={friendIcon} className='icon' id='friendIcon'></img>
          </div>
          <hr className='lineDiv' id='friendLine'/>

          <p>Get $10 in credits when someone signs up using your referral link. $10 credit will be 
            automatically applied to your account. You will be notified via email.
          </p>
          <p>Share this link</p>
          <div className='rows'>
            <input type='text' value={referalLink} style={{width: '30%'}} readOnly></input>
            <button className='btn' onClick={copyReferalLink}>copy</button>
          </div>
        </div>

        {/* contact box */}
        <div className='boxes'>
          <div className='head'>
            <h3>Contact us</h3>
            <img src={contactIcon} className='icon' id='contactIcon'></img>
          </div>
          <hr className='lineDiv' id='contactLine'/>

          <div className='socialMedia'>
            <button style={{background: instagramImg}} className='mediaIcon' onClick={openInstagram}></button>
            <button style={{background: facebookImg}} className='mediaIcon' onClick={openFacebook}></button>
            <button style={{background: tiktokImg}} className='mediaIcon' onClick={openTiktok}></button>
            <button style={{background: linkedinImg}} className='mediaIcon' onClick={openLinkedin}></button>
          </div>

          <div className='contactInfo'>
            <p><a href='link'>dormit.app</a> | team@dormit.app</p>
          </div>

        </div>
      </div>

    </div>
  )
}
