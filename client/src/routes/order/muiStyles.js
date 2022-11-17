export const orderSelectorStyles = {
    selectorContainer: {
        display: "flex",
        width: "85.2%",
        justifyContent: "space-around",
        borderRadius: "27px",
        backgroundColor: "#7C91F426",
    },

    selectorButton: {
        width: "51%",
        height: "39px",
        border: "none",
        textTransform: "none",
        borderRadius: "27px",
        fontWeight: "600",
        fontFamily: "Poppins",
        color: "#586DD0",
        fontSize: "18px",
        '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: "#7C91F4",
            border: "none",
            color: "#FFFFFF",
        }
    },

    buttonText: {
        fontFamily: "Poppins",
        color: "#586DD0",
        fontSize: "18px",
        fontWeight: "600",
    }
}

export const universalOrderStyles = {
    contactButtons: {
        padding: "0",
        height: "40px",
        width: "40px",
        border: "none",
        borderRadius: "999px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }
}