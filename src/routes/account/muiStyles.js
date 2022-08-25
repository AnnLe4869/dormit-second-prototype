import { createTheme, Box } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: 34,
      fontWeight: 500,
    },
    h2: {
      fontSize: 24,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 700,
    },
    body1: {
      fontSize: 18,
      fontWeight: 400,
    },
    body2: {
      fontSize: 16,
      fontWeight: 400,
    },
    caption: {
      fontSize: 13,
      fontWeight: 400,
    },
  },
});

export const AccountBox = {
  padding: "30px 60px",
  margin: "70px 96px",
  border: "2px solid",
  borderColor: "#7141fa",
  borderRadius: "8px",
};
