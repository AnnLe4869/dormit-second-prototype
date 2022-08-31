import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h4: {
      color: "#4214C3",
      fontWeight: 600,
    },
    h6: {
      fontWeight: 700,
      color: "#7141FA",
    },
    subtitle1: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 400,
    },
    subtext: {
      fontSize: 16,
      fontWeight: 400,
    },
    caption: {
      fontSize: 13,
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#7141fa",
    },
    secondary: {
      main: "#341A7D",
    },
  },
});

export const responsiveTheme = responsiveFontSizes(theme);

export const AccountBox = {
  boxSize: "border-box",
  backgroundColor: "rgba(124, 145, 244, 0.15)",
  maxWidth: "700px",
  minWidth: "350px",
  width: {
    xs: "90vw",
    sm: "75vw",
    md: "70vw",
    lg: "55vw",
    xl: "50vw",
  },
  p: {
    xs: "22px",
    sm: "25px",
    md: "30px",
    lg: "35px",
    xl: "40px",
  },
  pt: {
    xs: "16px",
    sm: "18px",
    md: "20px",
    lg: "25px",
  },
  borderRadius: {
    xs: "25px",
    sm: "30px",
    lg: "35px",
    xl: "40px",
  },

  marginBottom: {
    xs: "25px",
    sm: "25px",
    md: "30px",
    lg: "35px",
    xl: "35px",
  },
};

export const ModalStyles = {
  boxSize: "border-box",
  backdropFilter: "blur(2px)",
  backgroundColor: "#c8cce0",
  maxWidth: "700px",
  minWidth: "340px",
  width: {
    xs: "90vw",
    sm: "75vw",
    md: "70vw",
    lg: "55vw",
    xl: "50vw",
  },
  p: {
    xs: "22px",
    sm: "25px",
    md: "30px",
    lg: "35px",
    xl: "40px",
  },
  pt: {
    xs: "16px",
    sm: "18px",
    md: "20px",
    lg: "25px",
  },
  borderRadius: {
    xs: "25px",
    sm: "30px",
    lg: "35px",
    xl: "40px",
  },
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const ButtonStyles = {
  textTransform: "none",
  color: "white",
  borderRadius: "30px",
  backgroundColor: "#7141FA",
  p: "8px 26px",
  fontWeight: "700",
};

export const textFieldStyles = {
  backgroundColor: "white",
  borderRadius: "5px",
  fieldset: { borderColor: "#fff" },
};

export const IconCircleStyles = {
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "55px",
  aspectRatio: "1/1",
  backgroundColor: "white",
  border: "3px solid #7141FA",
  borderRadius: "50px",
};
