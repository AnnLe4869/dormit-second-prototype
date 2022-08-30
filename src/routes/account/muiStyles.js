import styles from "./Account.module.css";
import { createTheme, Typography } from "@mui/material";

export const theme = createTheme({
  fontFamily: "Poppins",
  typography: {
    title1: {
      fontSize: 34,
      color: "#4214C3",
      fontWeight: 600,
    },
    title2: {
      fontSize: 24,
      fontWeight: 700,
      color: "#7141fa",
    },
    callout: {
      fontSize: 18,
      color: "#341A7D",
      fontWeight: 700,
    },
    body1: {
      fontSize: 18,
      fontWeight: 400,
      color: "#341A7D",
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

export const AccountBox = {
  p: {
    xs: "20px 15px",
    sm: "40px 60px",
    md: "40px 55px",
  },
  backgroundColor: "#F3EFFF",
  borderRadius: "50px",
  marginBottom: "45px",
};

export const ModalStyles = {
  backgroundColor: "#FEFEFE",
  backdropFilter: "blur(5px)",
  border: "2px solid #ECECEC ",
  borderRadius: "8px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35%",
  p: 4,
};

export const ButtonStyles = {
  textTransform: "none",
  color: "white",
  marginTop: "10px",
  borderRadius: "30px",
  backgroundColor: "#7141FA",
  padding: "8px 26px",
};

export const textFieldStyles = {
  backgroundColor: "white",
  borderRadius: "5px",
  width: "100%",
  fieldset: {
    borderColor: "#ffffff",
  },
  marginTop: "13px",
};
