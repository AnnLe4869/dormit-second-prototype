import React from "react";
import styles from "../Order.module.css";
import apple from "../../../mock_data/images/apple.jpg";
import msgIcon from "../../../mock_data/images/msgIcon.png";
import PhoneIcon from "../../../mock_data/images/PhoneIcon.png";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function OrderView({ order }) {
  const totalProducts = order.length;

  return (
    <div className={styles.orderContainer}>
      <div className={styles.imageContainer}>
        {order.products.map((product, index) =>
          index < 3 ? (
            <div key={index}>
              <img src={apple} />
            </div>
          ) : index < 4 ? (
            <span>+{totalProducts - 3} items</span>
          ) : (
            false
          )
        )}
      </div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <div className={styles.orderInfo}>
          {/* Mapping ove items */}
          <Typography variant="h6" fontWeight={"600"}>
            {
              //mapping over products from props
              order.products.map((product, index) => {
                return (
                  <span key={index}>{(index ? ", " : "") + product.name}</span>
                );
              })
            }
          </Typography>

          <p>March 22 at 08:05 pm</p>
          <p>
            $11.55 • {order.length} item{order.length > 1 ? "s" : ""}
          </p>
          <p>Complete</p>
        </div>
      </Box>
      {order.status === "completed" ? (
        <div className={styles.completedAction}>
          {/* Reorder and report */}
          <button className={styles.colorPurple}>Reorder</button>
          <button className={styles.colorRed}>Report</button>
        </div>
      ) : (
        <div className={styles.currentAction}>
          {/* Reorder and report */}
          <Typography variant="body1" lineHeight={"20px"} fontWeight={"normal"}>
            On the way • 4 min <br /> Brandon K.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <button className={styles.currentBtn}>
              <img src={PhoneIcon} />
            </button>
            <button className={styles.currentBtn}>
              <img src={msgIcon} />
            </button>
          </Box>
        </div>
      )}
    </div>
  );
}

export default OrderView;
