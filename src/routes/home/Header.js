import React from "react";
import HeaderCSS from "./Header.module.css";

import dormitIcon from "../../assets/Home/dormit-icon.svg";

function Header() {
  /*
   * Mock values
   */
  const mockDeliveryLocation = "Enter delivery location";
  let mockDeliveryTime = 10;

  return (
    <div className={HeaderCSS.headerContainer}>
      <section className={HeaderCSS.headerTop}>
        {/* Center of header */}
        <div className={HeaderCSS.headerCenter}>
          <img src={dormitIcon} alt="DormIt Icon" />
          <h1 className={HeaderCSS.dormitHeader}>DormIt</h1>
        </div>

        {/* Right of header */}
        <div className={HeaderCSS.headerRight}>Earn Cash</div>
      </section>

      {/* Left of header */}
      <section className={HeaderCSS.headerLeft}>
        <div className={HeaderCSS.headerLeftGrid}>
          {/* Drop-pin Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
            className="pin"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>

          <div className={HeaderCSS.deliveryInfo}>
            <p>Rushing to</p>
            <p className={HeaderCSS.headerText}>{mockDeliveryLocation}</p>
            <p>In under {mockDeliveryTime} minutes</p>
          </div>

          {/* Down-arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}

export default Header;
