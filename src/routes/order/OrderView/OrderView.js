import React from "react";
import styles from "../Order.module.css";
import apple from "../../../mock_data/images/apple.jpg";
import msgIcon from "../../../mock_data/images/msgIcon.png";
import PhoneIcon from "../../../mock_data/images/PhoneIcon.png";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

function OrderView({ order }) {
  const totalProducts = order.products.length;
  console.log(order);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gridAutoFlow: "row",
        rowGap: "10px",
        columnGap: "25px",
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#C4C4C4",
          width: "18vh",
          height: "18vh",
          borderRadius: "16px",
          display: "grid",
          gridTemplateColumns: "repeat(2, auto)",
          justifyContent: "center",
          alignItems: "center",
          gridColumn: "span 1",
          gridRow: "span 2",
        }}
      >
        {order.products.map((product, index) => (
          <Box
            key={index}
            sx={{
              margin: "0 5px",
              fontSize: "12px",
              fontWeight: "bold",
              textAlign: "center",
              height: "6vh",
              width: "6vh",
              backgroundColor: index < 3 ? "#ffffff" : "",
              borderRadius: "8px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {index < 3 ? (
              <img className={styles.productImg} src={apple} />
            ) : (
              <Typography variant="caption" fontWeight="600">
                +{totalProducts - 3} items
              </Typography>
            )}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            lineHeight: "20px",
            gridColumn: "span 1",
            gridRow: "span 2",
          }}
        >
          {/* Mapping ove items */}
          <Typography variant="h6" fontWeight={"600"}>
            {
              //mapping over products from props
              order.products.map((product, index) => {
                return (
                  <Typography
                    variant="h6"
                    display={"inline-block"}
                    fontWeight="600"
                    key={index}
                  >
                    {(index ? ", " : "") + product.name}
                  </Typography>
                );
              })
            }
          </Typography>

          <Typography variant="body1">March 22 at 08:05 pm</Typography>
          <Typography variant="body1">
            $11.55 • {order.products.length} item
            {order.products.length > 1 ? "s" : ""}
          </Typography>
          <Typography variant="body1">Complete</Typography>
        </Box>
      </Box>
      {order.status === "completed" ? (
        <Box
          sx={{
            display: "flex",
            position: "relative",
            bottom: "0",
            width: "100%",
            height: "100%",
            gap: "20px",
            justifyContent: "start",
            alignItems: "flex-end",
            gridColumn: "span 2",
          }}
        >
          {/* Reorder and report */}
          <Button
            sx={{
              padding: " 5px 30px",
              width: "100%",
              borderRadius: "8px",
              fontSize: "medium",
              backgroundColor: "#ffffff",
              outline: "none",
              border: "#C4C4C4 1px solid",
              fontWeight: "bold",
              color: "#7141FA",
            }}
          >
            Reorder
          </Button>
          <Button
            sx={{
              padding: " 5px 30px",
              width: "100%",
              borderRadius: "8px",
              fontSize: "medium",
              backgroundColor: "#ffffff",
              outline: "none",
              border: "#C4C4C4 1px solid",
              fontWeight: "bold",
              color: "red",
            }}
          >
            Report
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gridColumn: "span 2",
          }}
        >
          {/* Reorder and report */}
          <Typography variant="body1" lineHeight={"20px"} fontWeight={"normal"}>
            On the way • 4 min <br /> Brandon K.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              sx={{
                width: "40px",
                height: "40px",
                outline: "none",
                border: "none",
                backgroundColor: "none",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <img src={PhoneIcon} />
            </Button>
            <Button
              sx={{
                width: "40px",
                height: "40px",
                outline: "none",
                border: "none",
                backgroundColor: "none",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <img src={msgIcon} />
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default OrderView;
