import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import { cartItemStyles } from './muiStyles'
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
import TrashIcon from '../../assets/Cart/TrashIcon.svg'

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
        sx={cartItemStyles.cartItemCounter}
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
            color: "#686868",
          }}
          onClick={decrease}
        >
          <KeyboardArrowDownOutlinedIcon sx={{fontSize: "28px"}} />
        </Button>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            color: "black",
            borderLeftWidth: "1"
          }}
        />
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter",
            height: "inherit",
            width: "20%",
            fontStyle: "normal",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 16%"
          }}
        >
          {quan}
        </Typography>
        <Divider 
          orientation="vertical"
          flexItem
          sx={{
            color: "black",
            borderLeftWidth: "1"
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
            color: "#686868",
          }}
          onClick={increase}
        >
          <KeyboardArrowUpOutlinedIcon sx={{fontSize: "28px"}} />
        </Button>
      </Box>
    );
  };

  return (
    <>
      {item ? (
        <Box
          sx={cartItemStyles.cartItemContainer}
        >
          <Box className={styles.itemImage}>
              <Image image={photo} />
          </Box>
          <Box sx={cartItemStyles.cartItemDetailsContainer}>
            <Box
              sx={cartItemStyles.cartItemDetails}
            >
              <Box>
                <Typography
                  sx={cartItemStyles.cartItemHeader}
                >
                  {name}
                </Typography>
              </Box>
              <Typography
                sx={cartItemStyles.cartItemPrice}
              >
                ${((price / 100) * quantity).toFixed(2)}
              </Typography>
            </Box>
            <Box>
                <Typography
                  sx={cartItemStyles.cartItemDescription}
                  className={styles.descriptionBox}
                >
                  {desc}
                </Typography>
            </Box>
            <Box
              sx={cartItemStyles.cartItemActions}
            > 
              <img
                src={TrashIcon}
                onClick={toggleDel}
                className={styles.cartItemDelete}
              />
              <Counter />
            </Box>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartItem;
