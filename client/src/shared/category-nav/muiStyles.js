export const headers = {
  header6: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "16px",
    color: "black",
    lineHeight: "16px",
    "@media screen and (max-width: 1200px)": {
      fontSize: "13px",
      lineHeight: "16px",
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
