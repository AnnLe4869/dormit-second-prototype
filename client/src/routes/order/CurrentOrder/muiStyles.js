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
    height: "75px",
    background: "#ffffff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    height: "100%"
  },

  cartItemDetailsContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    height: "75px"
  },

  cartItemDetails: {
    flex: "3 80%",
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  cartItemHeader: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "32px",
    color: "#000000",
    overflow: "hidden",
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
  },

  cartItemDescription: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "26px",
    color: "#686868",
    overflow: "hidden",
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical'
  },
}

export const selectedOrderStyles = {
  selectedOrderSummaryBox: {
    width: "100%",
    height: "30px",
    display: "flex",
    justifyContent: "space-between",
    color: "#686868",
    padding: "0 8px"
  },

  selectedOrderSummary: {
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: "400",
    color:"#686868"
  },

  selectedOrderTotal: {
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: "700",
    color:"#000000"
  },

  orderDetailsSection: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: "#686868",
    marginBottom: "10px",
    padding: "0 8px"
  },

  orderDetailsHeader: {
    color: "#686868",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "22px"
  }
}

export const reportPageStyles = {
  reportPageHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "15px 0px 10px 0px",
    justifyContent: "space-between",
  },

  closeButton: {
    width: "35px",
    height: "35px",
    minWidth: "0",
    minHeight: "0",
    border: "0",
    color: "#000000",
    fontSize: "100px",
  },

  pageMessageBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px"
  },

  radioLabelBox: {
    padding: "0 20px",
    gap: "3px",
    borderRadius: "30px",
    width: "100%",
    height: "36px",
    margin: "0",
    marginBottom: "10px",
  },

  radioLabelSelectedBox: {
    padding: "0 20px",
    gap: "3px",
    borderRadius: "30px",
    width: "100%",
    height: "36px",
    margin: "0",
    marginBottom: "10px",
    backgroundColor: "#7C91F426"
  },

  radioButton: {
    '&.Mui-checked': {
      color: "#000000"
    }
  }
}