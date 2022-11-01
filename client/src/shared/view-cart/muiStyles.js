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
    borderRadius: "16px 16px 0 0",
    overflow: "hidden"
  }
};

export const cartPageStyles = {
  cartHeading: {
    fontFamily: "Poppins",
    margin: "0 auto",
    fontSize: "28px",
    fontWeight: "500",
    "@media screen and (max-width: 575px)": {
      margin: "0"
    },
  }
}

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
    gap: "15px",
    marginBottom: "10px",
  },

  cartItemDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    maxHeight: "97%"
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
    fontSize: "18px",
    lineHeight: "21px",
    color: "#000000",
    overflow: "hidden",
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    // if the name of the product has a long word, it will push the price/counter off screen: 
    "@media screen and (max-width: 525px)": {
      maxWidth: "150px",
    },
    "@media screen and (max-width: 380px)": {
      maxWidth: "100px"
    }
  },

  cartItemDescription: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#686868",
    marginBottom: "25px",
    overflow: "hidden",
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
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
    height: "35px",
    width: "1000px",
    "@media screen and (max-width: 900px)": {
      height: "30px"
    }
  },

  cartItemCounter: {
      width: "110px",
      height: "34px",
      display: "flex",
      justifyContent: "center",
      flex: "row",
      background: "#eeeeee",
      borderRadius: "5px",
      fontFamily: "Inter",
  },

  cartItemActions: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
  },

  cartItemPrice: {
    fontFamily: "Inter",
    fontSize: "1.25rem",
    lineHeight: "32px",
    "@media screen and (max-width: 575px)": {
      fontSize: "1.1rem",
    }
  }
}