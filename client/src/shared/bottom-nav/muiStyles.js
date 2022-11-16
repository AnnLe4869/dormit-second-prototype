export const bottomNavStyles = {
  bottomNav: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    height: "68px",
    borderTop: "1.5px solid #C1C1C1",
    zIndex: "1",
    display: "flex",
    "& .Mui-selected, .Mui-selected > svg > path": {
      fill: "#7141fa",
    },
    "&.MuiButtonBase-root:hover": {
      backgroundColor: " unset",
    },
  },

  bottomNavButton: {
    width: "100%",
    "&:hover": {
      color: "#7141fa",
    },
  },
};
