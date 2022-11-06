import { Grid } from "@mui/material";

export const headers = {
  header2: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "36px",
  },

  header3: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
  },

  header4: {
    fontFamily: "Poppins",
    fontSize: "18px",
    lineHeight: "21px",
    fontWeight: 600,
  },

  header5: {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "21px",
    "@media screen and (max-width: 900px)": {
      fontSize: "14px",
      lineHeight: "17px",
    },
  },

  header6: {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    "@media screen and (max-width: 900px)": {
      fontSize: "14px",
      lineHeight: "17px",
    },
  },

  bulletinBox1Header1: {
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "white",
    fontSize: "clamp(26px, 2.9vw, 36px)",
    marginBottom: "10px",
    "@media screen and (max-width: 600px)": {
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "36px",
    },
  },

  bulletinBox1Header2: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "21px",
    color: "white",
  },

  bulletinBox1Header3: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "21px",
    color: "white",
  },

  bulletinBox2Header1: {
    fontFamily: "Poppins",
    fontWeight: 500,
    color: "white",
    fontSize: "clamp(26px, 2.9vw, 36px)",
    marginBottom: "10px",
    "@media screen and (max-width: 600px)": {
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "36px",
    },
  },

  bulletinBoxHeader2: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: "white",
    fontSize: "clamp(24px, 2.6vw, 30px)",
    marginBottom: "20px",
    "@media screen and (max-width: 900px)": {
      fontSize: "20px",
    },
    "@media screen and (max-width: 500px)": {
      fontSize: "17px",
    },
  },

  seeAllFont: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: "16px",
    "@media screen and (max-width: 600px)": {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "36px",
    },
  },
};

export const headerStyles = {
  headerContainer: {
    position: "static",
    width: "100%",
    padding: "0.8% 0",
    height: 60,
    backgroundColor: "#7141FA",
    boxShadow: "none",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    "@media screen and (max-width: 900px)": {
      paddingInline: "40px",
    },
    "@media screen and (max-width: 600px)": {
      p: 0,
      height: 80,
      position: "sticky",
      top: "-16px",
      backgroundColor: "#ffffff",
      "&::before": {
        content: "''",
        display: "block",
        height: "10px",
        position: "sticky",
        top: "54px",
        boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
      },
      "&::after": {
        content: "''",
        display: "block",
        height: "20px",
        position: "sticky",
        background:
          "linear-gradient(white 100%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.4) 70%, transparent)",
        top: 0,
        zIndex: "2",
      },
    },
  },

  headerGrid: {
    height: "64px",
    position: "sticky",
    top: "0px",
    marginTop: "-26px",
    zIndex: "3",
  },

  headerButton: {
    color: "#ffffff",
    textTransform: "none",
    columnGap: "15px",
    "@media screen and (max-width: 600px)": {
      color: "black",
      fontWeight: 600,
      fontSize: "18px",
      whiteSpace: "nowrap",
    },
  },

  headerLeft: {
    "@media screen and (max-width: 900px)": {
      textAlign: "right",
    },
    "@media screen and (max-width: 600px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      height: "100%",
    },
  },

  headerRight: {
    "@media screen and (max-width: 900px)": {
      display: "none",
      width: "fitContent",
    },
  },

  headerCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    "@media screen and (max-width: 900px)": {
      justifyContent: "flex-start",
    },
    "@media screen and (max-width: 600px)": {
      display: "none",
    },
  },

  headerIcon: {
    height: "35px",
    "@media screen and (max-width: 600px)": {
      display: "none",
    },
  },

  headerDelivery: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "21px",
    color: "white",
    "@media screen and (max-width: 600px)": {
      fontFamily: "Inter",
      color: "black",
      fontWeight: 700,
      fontSize: "16px",
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

  categoryButton: {
    width: 147,
    height: 36,
    borderRadius: "8px",
    borderColor: "#c4c4c4",
    textTransform: "none",
    padding: 0,
  },

  leftArrow: {
    cursor: "pointer",
    padding: "2px",
    position: "absolute",
    color: "#7141FA",
    top: "32%",
    left: -52,
    transition: "0.2s color",
    "&:hover": {
      color: "#7141FA",
    },
    "@media screen and (max-width: 900px)": {
      display: "none",
    },
  },

  rightArrow: {
    cursor: "pointer",
    padding: "2px",
    position: "absolute",
    color: "#7141FA",
    top: "32%",
    right: -52,
    transition: "0.2s color",
    "&:hover": {
      color: "#7141FA",
    },
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
    height: "auto",
    maxHeight: 36,
    borderRadius: "20px",
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
    "@media screen and (max-width: 600px)": {
      display: "none",
    },
  },

  seeAllMobile: {
    marginTop: "16px",
    width: "100%",
    height: 51,
    borderRadius: "24px",
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
    },
    "@media screen and (min-width: 600px)": {
      display: "none",
    },
  },
};
