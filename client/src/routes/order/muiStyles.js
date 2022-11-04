export const orderSelectorStyles = {
    selectorContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
    },

    selectorButton: {
        width: "170px",
        height: "39px",
        border: "none",
        textTransform: "none",
        backgroundColor: "#7C91F426",
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