export const headers = {
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

export const homepageStyles = {
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
