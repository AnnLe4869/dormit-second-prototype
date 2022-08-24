export const headers = {
  header2: {
    fontWeight: 900,
    fontSize: "min(2.9vw, 34px)",
    "@media screen and (max-width: 900px)": {
      fontSize: "26px",
      lineHeight: "39px",
    },
  },

  header3: {
    fontWeight: 700,
    fontSize: "min(1.8vw, 24px)",

    "@media screen and (max-width: 900px)": {
      fontSize: "22px",
      lineHeight: "33px",
    },
  },

  header4: {
    fontSize: "18px",
    lineHeight: "21px",
    fontWeight: 600,
  },

  header5: {
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "21px",
    "@media screen and (max-width: 900px)": {
      fontSize: "14px",
      lineHeight: "17px",
    },
  },

  header6: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    "@media screen and (max-width: 900px)": {
      fontSize: "14px",
      lineHeight: "17px",
    },
  },

  seeAllFont: {
    fontWeight: 700,
    fontSize: "clamp(16px, 1.8vw, 24px)",

    "@media screen and (max-width: 700px)": {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
};

export const headerStyles = {
  headerContainer: {
    position: "static",
    width: "100%",
    padding: "0.8% 0",
    height: "auto",
    maxHeight: 90,
    backgroundColor: "#7141FA",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    "@media screen and (max-width: 900px)": {
      height: 80,
      display: "block",
      padding: "20px",
    },
  },

  headerButton: {
    color: "#ffffff",
    textTransform: "none",
  },

  headerLeft: {
    "@media screen and (max-width: 900px)": {
      textAlign: "right",
      marginTop: "14px",
    },
  },

  headerRight: {
    "@media screen and (max-width: 900px)": {
      display: "none",
    },
  },

  headerCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width: 900px)": {
      display: "block",
      textAlign: "left",
      marginTop: "8px",
    },
  },

  headerIcon: {
    maxWidth: 78,
    height: "auto",

    "@media screen and (max-width: 900px)": {
      display: "none",
    },
  },
};

export const homepageStyles = {
  grayBox: {
    width: 85,
    height: 85,
    borderRadius: "15px",
    backgroundColor: "#EEEEEE",
    "@media screen and (max-width: 900px)": {
      width: 67,
      height: 67,
    },
  },

  bulletinBox: {
    width: 507,
    height: 214,
    borderRadius: "16px",
    backgroundColor: "#7141FA",

    "@media screen and (max-width: 900px)": {
      height: 130,
    },
  },

  categoryButton: {
    width: 147,
    height: 36,
    borderRadius: "8px",
    borderColor: "#c4c4c4",
    textTransform: "none",
    padding: 0,
  },

  leftArrow: {
    position: "absolute",
    top: "30%",
    left: -52,
    color: "#7141FA",
    "@media screen and (max-width: 900px)": {
      display: "none",
    },
  },

  rightArrow: {
    position: "absolute",
    top: "30%",
    right: -52,
    color: "#7141FA",
    "@media screen and (max-width: 900px)": {
      display: "none",
    },
  },

  seeAll: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    margin: "auto",
    width: "34%",
    maxWidth: 350,
    height: "auto",
    maxHeight: 51,
    borderRadius: "24px",
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
    "@media screen and (max-width: 900px)": {
      width: 92,
      height: 34,
    },
  },
};
