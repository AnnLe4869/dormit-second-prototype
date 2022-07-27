import React, { useState } from "react";
import BottomNavCSS from "./BottomNav.module.css";

/*
 * Imported Assets
 */
import home from "../../assets/Taskbar/home-button.svg";
import search from "../../assets/Taskbar/search-button.svg";
import orders from "../../assets/Taskbar/orders-button.svg";
import account from "../../assets/Taskbar/account-button.svg";
import homeActive from "../../assets/Taskbar/home-active.svg";
import searchActive from "../../assets/Taskbar/search-active.svg";
import ordersActive from "../../assets/Taskbar/orders-active.svg";
import accountActive from "../../assets/Taskbar/account-active.svg";

const Taskbar = ({ currentPage }) => {
  //useState() constants
  const [hoverHome, setHoverHome] = useState();
  const [hoverSearch, setHoverSearch] = useState();
  const [hoverOrders, setHoverOrders] = useState();
  const [hoverAccount, setHoverAccount] = useState();

  let homeButton = home;
  let searchButton = search;
  let ordersButton = orders;
  let accountButton = account;

  /*
   * If/else statements to handle hovered icons. Will highlight
   * corresponding icon in the taskbar based on which icon is hovered.
   */
  if (hoverHome) homeButton = homeActive;
  else homeButton = home;

  if (hoverSearch) searchButton = searchActive;
  else searchButton = search;

  if (hoverOrders) ordersButton = ordersActive;
  else ordersButton = orders;

  if (hoverAccount) accountButton = accountActive;
  else accountButton = account;

  /*
   * Switch statement which handles the current page. Will highlight
   * corresponding icon in the taskbar based on what the current page is.
   */
  switch (currentPage) {
    case "home":
      homeButton = homeActive;
      break;

    case "search":
      searchButton = searchActive;
      break;

    case "orders":
      ordersButton = ordersActive;
      break;

    case "account":
      accountButton = accountActive;
      break;

    default:
  }

  return (
    <div className={BottomNavCSS.taskbarContainer}>
      {/* Home button */}
      <button
        className={BottomNavCSS.homeButton}
        onMouseEnter={(e) => {
          setHoverHome(true);
        }}
        onMouseLeave={(e) => {
          setHoverHome(false);
        }}
      >
        <img src={homeButton} alt="" />
      </button>

      {/* Search button */}
      <button
        className={BottomNavCSS.searchButton}
        onMouseEnter={(e) => {
          setHoverSearch(true);
        }}
        onMouseLeave={(e) => {
          setHoverSearch(false);
        }}
      >
        <img src={searchButton} alt="" />
      </button>

      {/* Orders button */}
      <button
        className={BottomNavCSS.ordersButton}
        onMouseEnter={(e) => {
          setHoverOrders(true);
        }}
        onMouseLeave={(e) => {
          setHoverOrders(false);
        }}
      >
        <img src={ordersButton} alt="" />
      </button>

      {/* Account button */}
      <button
        className={BottomNavCSS.accountButton}
        onMouseEnter={(e) => {
          setHoverAccount(true);
        }}
        onMouseLeave={(e) => {
          setHoverAccount(false);
        }}
      >
        <img src={accountButton} alt="" />
      </button>
    </div>
  );
};

export default Taskbar;
