export const headers = {
  header3: {
    fontWeight: 700,
    fontSize: "24px",
    color: "#7141FA",
  },

  header5: {
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "21px",
    color: "#7141FA",
  },
};

export const viewCartStyles = {
  viewCartContainer: {
    position: "fixed",
    zIndex: "1",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "115px",
    width: 384,
    height: 60,
    backgroundColor: "#ffffff",
    border: "1px solid #C4C4C4",
    borderRadius: "20px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
    "@media screen and (max-width: 900px)": {
      display: "none",
    },
  },

  viewCartGrid: {
    direction: "column",
    alignItems: "flex-end",
  },

  viewCartText: {
    textAlign: "center",
  },
};

export const cartItemStyles = {
  cartItemContainer: {
    width: "100%",
    height: "100%",
    background: "#ffffff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
  },

  cartItemDetails: {
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "150px",
    "@media screen and (max-width: 775px)": {
      height: "140px"
    },
    "@media screen and (max-width: 660px)": {
      height: "150px"
    },
    "@media screen and (max-width: 575px)": {
      height: "auto"
    }
  },

  cartItemHeader: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "32px",
    color: "#000000",
    "@media screen and (max-width: 900px)": {
      fontSize: "20px"
    },
    "@media screen and (max-width: 775px)": {
      fontSize: "18px"
    },
    "@media screen and (max-width: 575px)": {
      fontSize: "15px"
    }
  },

  cartItemDescription: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "26px",
    color: "#686868",
    marginTop: "10px",
    marginBottom: "10px",
    "@media screen and (max-width: 900px)": {
      fontSize: "15px"
    },
    "@media screen and (max-width: 775px)": {
      fontSize: "13px"
    }
  },

  cartItemDelete: {
    backgroundColor: "#ffffff",
    border: "none",
    alignSelf: "flex-start",
    color: "#686868",
    ":hover": {
      cursor: "pointer",
    },
    fontSize: "35px",
    "@media screen and (max-width: 900px)": {
      fontSize: "30px"
    },
    "@media screen and (max-width: 775px)": {
      fontSize: "25px"
    }
  },

  cartItemCounter: {
      width: "120px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      flex: "row",
      background: "#eeeeee",
      borderRadius: "5px",
      fontFamily: "poppins",
      "@media screen and (max-width: 900px)": {
        height: "30px",
        width: "100px"
      },
      "@media screen and (max-width: 775px)": {
        height: "25px",
        width: "80px"
      },
  },

  cartItemPriceBox: {
      alignItems: "end",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "150px",
      width: "20%",
      "@media screen and (max-width: 775px)": {
        height: "140px"
      },
      "@media screen and (max-width: 660px)": {
        height: "150px"
      },
      "@media screen and (max-width: 575px)": {
        height: "160px"
      }
  },

  cartItemPrice: {
    fontSize: "22px",
    lineHeight: "32px",
    "@media screen and (max-width: 900px)": {
      fontSize: "20px"
    },
    "@media screen and (max-width: 775px)": {
      fontSize: "18px"
    },
    "@media screen and (max-width: 575px)": {
      fontSize: "15px"
    }
  }
}