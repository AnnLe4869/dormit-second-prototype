import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import {
  useDecrementItemCount,
  useIncrementItemCount,
  useRemoveProductFromCart,
} from "../../context/user/cart-handler";

const CartItem = ({ id, name, desc, quantity, photo, price }) => {
  const [item, setitem] = useState(true);
  const [quan, setquantity] = useState(quantity);
  const incrementCount = useIncrementItemCount();
  const decrementCount = useDecrementItemCount();
  const removeProductFromCart = useRemoveProductFromCart();

  const toggleDel = () => {
    removeProductFromCart(id);
    setitem(false);
  };
  const increase = () => {
    setquantity(quan + 1);
    incrementCount(id);
  };
  const decrease = () => {
    setquantity(quan - 1);
    decrementCount(id);
  };

  useEffect(() => {
    if (quan <= 0) {
      setquantity(0);
      setTimeout(() => {
        setitem(false);
      }, 600);
    }
  }, [quan]);

  const Counter = () => {
    return (
      <Box
        sx={{
          maxWidth: "120px",
          width: "100%",
          height: "44px",
          display: "flex",
          justifyContent: "center",
          flex: "row",
          background: "#eeeeee",
        }}
      >
        <Button
          sx={{
            minWidth: "0",
            minHeight: "0",
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
          onClick={increase}
        >
          <ArrowDropUpIcon />
        </Button>
        <Typography
          variant="body1"
          sx={{
            height: "inherit",
            width: "10%",
            fontFamily: "BlinkMacSystemFont",
            fontStyle: "normal",
            fontWeight: "400",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {quan}
        </Typography>
        <Button
          sx={{
            minWidth: "0",
            minHeight: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            width: "40%",
          }}
          onClick={decrease}
        >
          <ArrowDropDownIcon />
        </Button>
      </Box>
    );
  };

  return (
    <>
      {item ? (
        <Box
          sx={{
            width: "100%",
            height: "170px",
            background: "#ffffff",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
            paddingY: "10px",
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <img src={photo} className={styles.image} />
            <Box
              sx={{
                alignItems: "start",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "BlinkMacSystemFont",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "27px",
                    lineHeight: "32px",
                    color: "#000000",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "BlinkMacSystemFont",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "22px",
                    lineHeight: "26px",
                    color: "#686868",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  {desc}
                </Typography>
              </Box>
              <DeleteOutlineIcon
                onClick={toggleDel}
                sx={{
                  backgroundColor: "#ffffff",
                  border: "none",
                  alignSelf: "flex-start",
                  marginTop: "20px",
                  color: "#686868",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
                fontSize="large"
              />
            </Box>
          </Box>
          <Box
            sx={{
              alignItems: "end",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              width: "20%",
            }}
          >
            <Typography
              fontFamily="BlinkMacSystemFont"
              fontSize="27px"
              variant="body1"
            >
              ${price * quantity}
            </Typography>
            <Counter />
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartItem;
