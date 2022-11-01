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
    }
  },

  viewCartGrid: {
    direction: "column",
    alignItems: "flex-end",
  },

  viewCartText: {
    textAlign: "center",
  },

  cartDrawer: {
    borderRadius: "20px 20px 0 0",
    overflow: "hidden"
  }
};

export const cartPageStyles = {
  cartHeading: {
    fontFamily: "Poppins",
    margin: "0 auto",
    fontSize: "34px",
    fontWeight: "500",
    "@media screen and (max-width: 575px)": {
      margin: "0"
    },
  }
}

export const cartItemStyles = {
  cartItemContainer: {
    fontFamily: "Poppins",
    width: "100%",
    height: "100%",
    background: "#ffffff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "40px",
    height: "100%"
  },

  cartItemDetailsContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    height: "100%"
  },

  cartItemDetails: {
    flex: "3 80%",
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  cartItemHeader: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1.25rem",
    lineHeight: "32px",
    color: "#000000",
    overflow: "hidden",
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    // if the name of the product has a long word, it will push the price/counter off screen: 
    "@media screen and (max-width: 525px)": {
      fontSize: "1.1rem",
      maxWidth: "150px",
    },
    "@media screen and (max-width: 380px)": {
      fontSize: "1rem",
      maxWidth: "100px"
    }
  },

  cartItemDescription: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "26px",
    color: "#686868",
    marginTop: "10px",
    marginBottom: "10px",
    overflow: "hidden",
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical'
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
    fontSize: "35px",
    "@media screen and (max-width: 900px)": {
      fontSize: "30px"
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
      fontFamily: "Poppins",
      "@media screen and (max-width: 900px)": {
        height: "30px",
        width: "100px"
      },
      "@media screen and (max-width: 775px)": {
        width: "80px"
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
    fontFamily: "Poppins",
    fontSize: "1.25rem",
    lineHeight: "32px",
    "@media screen and (max-width: 575px)": {
      fontSize: "1.1rem",
    }
  }
}