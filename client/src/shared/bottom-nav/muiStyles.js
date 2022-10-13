export const bottomNavStyles = {
  bottomNav: {
    width: "100%",
    bottom: 0,
    height: "auto",
    padding: "0.1% 0",
    maxHeight: 70,
    borderTop: "2px solid #B8B8B8",
    position: "fixed",
    zIndex: "1",
    display: "flex",
    justifyContent: "space-evenly",
    "& .Mui-selected, .Mui-selected > svg": {
      color: "#7141fa",
    },
  },

  bottomNavButton: {
    width: "100%",

    "&:hover": {
      color: "#7141fa",
    },
  },

  buttonNavIcon: {
    height: "auto",
    width: "22%",
  },
};
