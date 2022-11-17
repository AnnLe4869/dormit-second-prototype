import React, { useEffect, useState } from "react";
import styles from "../Order.module.css";
import { cartItemStyles } from './muiStyles'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box } from "@mui/system";
import { Button, Typography, Divider} from "@mui/material";
import { Image } from "../../../shared/loading-image/Image";

const OrderItem = ({ id, number, name, desc, photo }) => {
  const [item, setitem] = useState(true);

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
                  {`#${number}`} {name}
                </Typography>
                <Typography
                  sx={cartItemStyles.cartItemDescription}
                  className={styles.descriptionBox}
                >
                  {desc}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default OrderItem;
