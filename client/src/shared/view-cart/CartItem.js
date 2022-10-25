import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Box } from "@mui/system";
import { Button, Typography, Divider} from "@mui/material";
import {
  useDecrementItemCount,
  useIncrementItemCount,
  useRemoveProductFromCart,
} from "../../context/user/cart-handler";
import { useActivateErrorAlert } from "../../context/alert/alert-handler";
import { Image } from "../loading-image/Image";

const CartItem = ({ id, name, desc, quantity, photo, price }) => {
  const [item, setitem] = useState(true);
  const [quan, setquantity] = useState(quantity);
  const incrementCount = useIncrementItemCount();
  const decrementCount = useDecrementItemCount();
  const removeProductFromCart = useRemoveProductFromCart();
  const activateErrorAlert = useActivateErrorAlert();

  const toggleDel = () => {
    removeProductFromCart(id);
    activateErrorAlert(`${name} removed from cart!`);
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
      activateErrorAlert(`${name} removed from cart!`);
      setitem(false);
    }
  }, [quan]);

  const Counter = () => {
    return (
      <Box
        sx={{
          width: "120px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          flex: "row",
          background: "#eeeeee",
          borderRadius: "5px",
          fontFamily: "poppins"
        }}
      >
        <Button
          sx={{
            minWidth: "0",
            minHeight: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            width: "40%",
            color: "#7141FA",
          }}
          onClick={decrease}
        >
          <KeyboardArrowDownOutlinedIcon sx={{fontSize: "30px"}} />
        </Button>
        <Divider 
          dark
          orientation="vertical"
          flexItem
          sx={{
            color: "black",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            height: "inherit",
            width: "20%",
            fontStyle: "normal",
            fontWeight: "400",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 18%"
          }}
        >
          {quan}
        </Typography>
        <Divider 
          dark
          orientation="vertical"
          flexItem
          sx={{
            color: "black",
          }}
        />
        <Button
          sx={{
            minWidth: "0",
            minHeight: "0",
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            color: "#7141FA",
          }}
          onClick={increase}
        >
          <KeyboardArrowUpOutlinedIcon sx={{fontSize: "30px"}} />
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
            height: "180px",
            background: "#ffffff",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
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
            <Box className={styles.itemImage}>
                <Image image={photo} />
            </Box>
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
              fontSize="27px"
              variant="body1"
            >
              ${((price / 100) * quantity).toFixed(2)}
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
