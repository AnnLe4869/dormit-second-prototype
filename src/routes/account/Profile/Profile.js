import React from "react";
import styles from "../Account.module.css";
import { Box } from "@mui/material";
import { AccountBox } from "../muiStyles";

export default function Profile() {
  const [isEditing, setIsEditing] = React.useState(false);
  const nameRef = React.createRef();
  const buildingRef = React.createRef();
  const floorRef = React.createRef();
  const aptRef = React.createRef();
  const phoneRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const editIconImage = "image";
  const profilePicUrl = "imageUrl";
  const locationIcon = "icon";
  const contactDeetIcon = "icon";
  const profileIcon = "img";
  const buildingValue1 = "1";
  const buildingValue2 = "2";
  const buildingValue3 = "3";

  const student = {};

  const changeProfilePic = () => {};
  const editProfile = () => {
    setIsEditing(true);
  };
  const saveProfileEdit = () => {
    setIsEditing(false);
  };
  const cancelProfileEdit = () => {
    setIsEditing(false);
    // cancel edits on input fields
    // reset to original values
    // nameRef.current.value = student["name"];
    // buildingRef.current.value = student["building"];
    // floorRef.current.value = student["floor"];
    // aptRef.current.value = student["apartment"];
    // phoneRef.current.value = student["phone"];
    // emailRef.current.value = student["email"];
    // passwordRef.current.value = student["password"];
  };
  return (
    <Box sx={AccountBox}>
      <div className={styles.head}>
        <h3 className={styles.boxTitle}>Profile</h3>
        <button
          style={{ background: editIconImage }}
          className={styles.editIcon}
          onClick={editProfile}
        ></button>
        <img
          src={profileIcon}
          className={styles.icon}
          id={styles.profileIcon}
          alt="profile"
        ></img>
      </div>
      <hr className={styles.lineDiv} id={styles.profileLine} />
      <br />

      <div className={styles.rows}>
        <button
          style={{
            background: profilePicUrl,
            width: "60px",
            height: "60px",
          }}
          onClick={changeProfilePic}
        ></button>
        <div className={styles.editItem}>
          <div className={styles.editTop}>
            <p>Full name</p>
          </div>
          <input
            type="text"
            size="8"
            disabled={!isEditing}
            defaultValue={student["name"]}
            ref={nameRef}
          ></input>
        </div>
      </div>

      <div className={styles.rows}>
        <img
          src={locationIcon}
          className={styles.smallIcon}
          alt="location"
        ></img>
        <h5 className={styles.textColorPurp}>Default Location</h5>
      </div>
      <br />

      <div className={styles.rowToColumn}>
        <div className={styles.editItem}>
          <p>UCSD Building</p>
          <select disabled={!isEditing} ref={buildingRef}>
            <option value={buildingValue1}>Building 1</option>
            <option value={buildingValue2}>Display Text 2</option>
            <option value={buildingValue3}>Display Text 3</option>
          </select>
        </div>
        <div className={styles.editItem}>
          <p>Floor #</p>
          <input
            type="text"
            size="8"
            disabled={!isEditing}
            defaultValue={student["floor"]}
            ref={floorRef}
          ></input>
        </div>
        <div className={styles.editItem}>
          <p>Apartment #</p>
          <input
            type="text"
            size="8"
            disabled={!isEditing}
            defaultValue={student["apartment"]}
            ref={aptRef}
          ></input>
        </div>
      </div>
      <br />

      <div className={styles.rows}>
        <img
          src={contactDeetIcon}
          className={styles.smallIcon}
          alt="contact"
        ></img>
        <h5 className={styles.textColorPurp}>Contact Details</h5>
      </div>
      <br />
      <div className={styles.rowToColumn}>
        <div className={styles.editItem}>
          <p>Phone number</p>
          <input
            type="text"
            size="8"
            disabled={!isEditing}
            defaultValue={student["phone"]}
            ref={phoneRef}
          ></input>
        </div>
        <div className={styles.editItem}>
          <p>Email</p>
          <input
            type="text"
            size="8"
            disabled={!isEditing}
            defaultValue={student["email"]}
            ref={emailRef}
          ></input>
        </div>
        <div className={styles.editItem}>
          <p>Password</p>
          <input
            type="password"
            size="8"
            disabled={!isEditing}
            defaultValue={student["password"]}
            ref={passwordRef}
          ></input>
        </div>
      </div>

      {/* show buttons if editing */}
      {isEditing && (
        <div className={styles.rows}>
          <button className="btn" onClick={saveProfileEdit}>
            Save
          </button>
          <button
            className={styles.btnInverseColor}
            onClick={cancelProfileEdit}
          >
            Cancel
          </button>
        </div>
      )}
    </Box>
  );
}
