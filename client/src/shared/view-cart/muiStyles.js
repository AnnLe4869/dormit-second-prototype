export const headers = {
  header3: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "22px",
    lineHeight: "33px",
    color: "#FFFFFF",
  },

  header5: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FFFFFF",
  },
};

export const viewCartStyles = {
  viewCartContainer: {
    position: "fixed",
    zIndex: "1",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "100px",
    width: "91.5%",
    height: 60,
    backgroundColor: "#7141FA",
    borderRadius: "20px",
    textTransform: "none",
  },

  viewCartGrid: {
    alignItems: "center",
  },

  cartDrawer: {
    borderRadius: "20px 20px 0 0",
    overflow: "hidden",
  },
};

export const cartPageStyles = {
  cartHeading: {
    fontFamily: "Poppins",
    margin: "0 auto",
    fontSize: "28px",
    fontWeight: "500",
    "@media screen and (max-width: 575px)": {
      margin: "0",
    },
  },
};

export const cartItemStyles = {
  cartItemContainer: {
    fontFamily: "Inter",
    width: "100%",
    height: "100%",
    background: "#ffffff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "40px",
    height: "100%",
  },

  cartItemDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    height: "100%",
  },

  cartItemDetails: {
    width: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },

  cartItemHeader: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "21px",
    color: "#000000",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
    // if the name of the product has a long word, it will push the price/counter off screen:
    "@media screen and (max-width: 525px)": {
      maxWidth: "150px",
    },
    "@media screen and (max-width: 380px)": {
      fontSize: "1rem",
      maxWidth: "100px",
    },
  },

  cartItemDescription: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#686868",
    marginBottom: "25px",
    paddingLeft: "3px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
  },

  cartItemDelete: {
    backgroundColor: "#ffffff",
    border: "none",
    alignSelf: "flex-start",
    color: "#686868",
    marginTop: "10px",
    ":hover": {
      cursor: "pointer",
    },
    height: "35px",
    width: "1000px",
    "@media screen and (max-width: 900px)": {
      fontSize: "30px",
    },
  },

  cartItemCounter: {
    width: "120px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    flex: "row",
    background: "#eeeeee",
    borderRadius: "5px",
    fontFamily: "Poppins",
    "@media screen and (max-width: 900px)": {
      height: "30px",
      width: "100px",
    },
    "@media screen and (max-width: 775px)": {
      width: "80px",
    },
  },

  cartItemPriceBox: {
    flex: "1 20%",
    alignItems: "end",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  cartItemPrice: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: "17px",
    lineHeight: "32px",
    "@media screen and (max-width: 575px)": {
      fontSize: "1.1rem",
    },
  },
};
