import React from "react";
import {
  Typography,
  IconButton,
  Stack,
  Divider,
  Box,
  Link,
} from "@mui/material";
import { AccountBox } from "../muiStyles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <Box sx={AccountBox}>
      <Typography variant="title1">Contact Us</Typography>
      <Box display="flex" justifyContent="center" gap={3}>
        <IconButton color="primary">
          <Link href="https://www.instagram.com/dormitstore/">
            <InstagramIcon sx={{ fontSize: "50px" }} />
          </Link>
        </IconButton>
        <IconButton color="primary">
          <Link href="https://www.dormit.app/">
            <FacebookIcon sx={{ fontSize: "50px" }} />
          </Link>
        </IconButton>
        <IconButton color="primary">
          <Link href="https://www.linkedin.com/company/dormit/">
            <LinkedInIcon sx={{ fontSize: "50px" }} />
          </Link>
        </IconButton>
        <IconButton color="primary">
          <Link href="https://www.dormit.app/">
            <GitHubIcon sx={{ fontSize: "50px" }} />
          </Link>
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="center" m="20px 0">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Link href="https://www.dormit.app/">dormit.app</Link>
          <Typography>team@dormit.app</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
