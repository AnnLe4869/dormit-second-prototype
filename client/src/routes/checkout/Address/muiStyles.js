import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h4: {
      color: "#4214C3",
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
      color: "#7141FA",
    },
    subtitle1: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    subtext: {
      fontSize: 16,
      fontWeight: 600,
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

export const ButtonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "none",
  color: "white",
  borderRadius: "30px",
  backgroundColor: "#7141FA",
  mt: { xs: "10px", sm: 0 },
  p: { md: "3px 60px", xs: "3px 100px" },
  fontWeight: "700",
  "&:disabled": {
    backgroundColor: "#936eff",
  },
};

export const textFieldStyles = {
  backgroundColor: "#EEEEEE",
  borderRadius: "5px",
  fieldset: { borderColor: "#fff" },
  mt: "5px",
};
