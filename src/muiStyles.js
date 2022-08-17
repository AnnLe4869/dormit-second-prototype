import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#7141fa",
    },
  },

  typography: {
    h2: {
      fontWeight: 500,
      fontSize: "34px",
      lineHeight: "51px",
      "@media screen and (max-width: 960px)": {
        fontSize: "28px",
        lineHeight: "42px",
      },
    },

    h3: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "36px",

      "@media screen and (max-width: 960px)": {
        fontSize: "18px",
        lineHeight: "21px",
      },
    },

    h4: {
      fontSize: "18px",
      lineHeight: "21px",
      fontWeight: 600,
    },

    h5: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "21px",
    },

    fontFamily: "Poppins",
  },
});

export const headerStyles = {
  headerContainer: {
    position: "static",
    width: "100%",
    height: 100,
    backgroundColor: "secondary.main",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    "@media screen and (max-width: 960px)": {
      height: 95,
      display: "block",
      padding: "20px",
    },
  },

  headerButton: {
    color: "#ffffff",
    textTransform: "none",
  },

  headerLeft: {
    "@media screen and (max-width: 960px)": {
      textAlign: "right",
      marginTop: "24px",
    },
  },

  headerRight: {
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
  },

  headerCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width: 960px)": {
      display: "block",
      textAlign: "left",
      marginTop: "20px",
    },
  },

  headerIcon: {
    "@media screen and (max-width: 960px)": {
      display: "none",
    },
  },
};

export const homepageStyles = {
  bulletinBox: {
    width: 310,
    height: 160,
    borderRadius: "16px",
    backgroundColor: "secondary.main",

    "@media screen and (max-width: 960px)": {
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
};

export const bottomNavStyles = {
  bottomNav: {
    width: "100%",
    bottom: 0,
    height: 80,
    borderTop: "2px solid #B8B8B8",
    position: "sticky",
  },

  bottomNavButton: {
    width: "100%",

    "&:hover": {
      color: "#7141fa",
    },
  },

  buttonNavIcon: {
    height: "40px",
    width: "40px",
  },
};

export const viewCartStyles = {
  viewCartContainer: {
    position: "sticky",
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
    "@media screen and (max-width: 960px)": {
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
