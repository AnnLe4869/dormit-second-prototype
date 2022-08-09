// we initialize products when we start the app
// and update all products after certain amount of time OR when we do checkout
// although firebase has live update but we shouldn't rely too much as it
// as overly update can trigger unnecessary re-render
export const INITIALIZE_PRODUCTS = "INITIALIZE PRODUCTS";
export const UPDATE_ALL_PRODUCTS = "UPDATE ALL PRODUCTS";
export const ADD_TO_CART = "ADD TO CART";

// trigger alert to active
export const ACTIVATE_ALERT = "ACTIVATE ALERT";
export const DEACTIVATE_ALERT = "DEACTIVATE ALERT";

// change authentication status
export const SIGN_IN_USER = "SIGN IN";
export const SIGN_UP_USER = "SIGN UP";
export const SIGN_OUT_USER = "SIGN OUT";
export const INITIALIZE_USER_DETAILS = "INITIALIZE USER DETAILS";

// change cart's items amount
export const INCREMENT_QUANTITY = "INCREMENT QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT QUANTITY";
export const REMOVE_ITEM_FROM_CART = "REMOVE ITEM FROM CART";

// checkout
export const SET_CHECKOUT_ADDRESS = "SET CHECKOUT ADDRESS";
export const SET_CHECKOUT_PAYMENT = "SET CHECKOUT PAYMENT";
export const PLACE_ORDER = "PLACE ORDER";

// cancel order
export const CANCEL_ORDER = "CANCEL ORDER";
// update handling process
export const UPDATE_HANDLING_PROCESS = "UPDATE HANDLING PROCESS";

// set up user profile - no change to context state thus can be taken care later
export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";

