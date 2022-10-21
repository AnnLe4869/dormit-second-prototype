import React from "react";
import { AccountBox, IconCircleStyles } from "../muiStyles";
import {
  Typography,
  IconButton,
  Stack,
  Divider,
  Box,
  Link,
} from "@mui/material";

import { ReactComponent as TikTokIcon } from "../../../assets/Account/tikTokIcon.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <Box sx={AccountBox}>
      <Typography variant="h4">Contact Us</Typography>
      <Box display="flex" justifyContent="center" gap={3} sx={{ mt: "20px" }}>
        <IconButton color="primary">
          <Box sx={IconCircleStyles}>
            <Link
              href="https://www.instagram.com/dormitstore/"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <InstagramIcon sx={{ fontSize: "35px" }} />
            </Link>
          </Box>
        </IconButton>

        <IconButton color="primary">
          <Box sx={IconCircleStyles}>
            <Link
              href="https://www.dormit.app/"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FacebookIcon sx={{ fontSize: "35px" }} />
            </Link>
          </Box>
        </IconButton>

        <IconButton color="primary">
          <Box sx={IconCircleStyles}>
            <Link
              href="https://www.linkedin.com/company/dormit/"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LinkedInIcon sx={{ fontSize: "35px" }} />
            </Link>
          </Box>
        </IconButton>

        <IconButton color="primary">
          <Box sx={IconCircleStyles}>
            <Link
              href="https://www.linkedin.com/company/dormit/"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <TikTokIcon sx={{ fontSize: "35px" }} />
            </Link>
          </Box>
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
        >
          <Link href="https://www.dormit.app/" underline="none">
            <Typography variant="body1" color="#7141FA">
              dormit.app
            </Typography>
          </Link>
          <Typography variant="body1">team@dormit.app</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
