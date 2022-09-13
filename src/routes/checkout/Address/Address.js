import React, { useState } from "react";
import {
  ThemeProvider,
  Container,
  Typography,
  Grid,
  Autocomplete,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { ButtonStyles, responsiveTheme, textFieldStyles } from "./muiStyles";
export default function Address() {
  const [loading, setLoading] = useState(false);

  const buildings = [
    { label: "Revelle" },
    { label: "Muir" },
    { label: "Marshall" },
    { label: "Warren" },
    { label: "Roosevelt" },
    { label: "Sixth " },
    { label: "The Village" },
  ];

  return (
    <ThemeProvider theme={responsiveTheme}>
      <Container
        sx={{
          minWidth: "100%",
          display: "flex",
          justifyContent: "center",
          borderBottom: "3px solid #eee",
          p: "20px 0",
        }}
      >
        <Typography variant="h5" color="#000">
          Delivery Location
        </Typography>
      </Container>
      <Container
        maxWidth="md"
        maxHeight="false"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: { md: "7vh", sm: "5vh", xs: "20px" },
        }}
      >
        <Grid
          container
          justifyContent="center"
          spacing={{ xs: 3 }}
          sx={{ p: "10px 0" }}
        >
          <Grid item md={5} sm={5} xs={10} minWidth="250px">
            <Typography variant="subtitle1" fontSize={{ sm: "16px" }}>
              UCSD Building
            </Typography>
            <Autocomplete
              freeSolo
              size="small"
              id="combo-box-demo"
              options={buildings}
              sx={{
                backgroundColor: "#EEEEEE",
                borderRadius: "5px",
                fieldset: { borderColor: "#fff" },
                mt: "5px",
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item md={5} sm={5} xs={10} minWidth="250px">
            <Typography variant="subtitle1" fontSize={{ sm: "16px" }}>
              Floor / Apartment #
            </Typography>
            <TextField fullWidth size="small" sx={textFieldStyles} />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          spacing={{ xs: 1, sm: 1.5 }}
          sx={{ pt: "13px", pb: "31px" }}
        >
          <Grid item xs={10} minWidth="250px">
            <Typography variant="subtitle1" fontSize={{ sm: "16px" }}>
              Delivery Notes
            </Typography>
            <TextField
              placeholder="Eg. Meet me outside"
              fullWidth
              multiline
              rows={3}
              sx={textFieldStyles}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={ButtonStyles}
          disabled={loading}
          onClick={() => setLoading(true)}
        >
          <Typography
            variant="subtext"
            fontSize={{ xs: "16px", visibility: loading && "hidden" }}
          >
            Save
          </Typography>
          {loading && (
            <CircularProgress
              size={22}
              sx={{
                color: "#e1d6ff",
                position: "absolute",
              }}
            />
          )}
        </Button>
      </Container>
    </ThemeProvider>
  );
}
