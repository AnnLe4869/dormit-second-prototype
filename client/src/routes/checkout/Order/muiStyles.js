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
    fontSize: "18px",
    lineHeight: "24px",
  },

  notesRusher: {
    width: "inherit",
    lineHeight: "1.5em",
    height: "4.5em",
    whiteSpace: "pre-line",
    overflow: "hidden",
    display: "-webkit-box",
    webkitLineClamp: 3,
    webkitBoxOrient: "vertical",
  },
};

export const buttonSelector = {
  buttonGroup: {
    display: "flex",
    justifyContent: "space-around",
    borderRadius: "20px",
    backgroundColor: "#EEEEEE",
    width: "100%",
    height: "41px"
  },

  tipButton: {
    borderRadius: "20px",
    border: "none",
    textTransform: "none",
    borderRadius: "20px",
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000000",
    fontSize: "16px",
    width: "88px",
    '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: "black",
        border: "none",
        color: "#FFFFFF",
    }
  }
}