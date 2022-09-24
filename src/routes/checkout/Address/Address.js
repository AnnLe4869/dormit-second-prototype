import React, { useState, useRef } from "react";
import {
  useUpdateMessage,
  useUpdateShipping,
} from "../../../context/user/profile-context";
import { useActivateErrorAlert } from "../../../context/alert/alert-handler";

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
  const buildingRef = useRef();
  const apartmentNumberRef = useRef();
  const messageRef = useRef();

  const updateShipping = useUpdateShipping();
  const updateMessage = useUpdateMessage();
  const activateErrorAlert = useActivateErrorAlert();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const { isSuccess, message } = await updateShipping(
      buildingRef.current.value.toString(),
      apartmentNumberRef.current.value.toString()
    );
    if (!isSuccess) {
      activateErrorAlert(message);
      setLoading(false);
      return;
    }
    updateMessage(messageRef.current.value.toString());
    setLoading(false);
  };

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
              options={buildings.map((option) => option.label)}
              //value={building}
              sx={{
                backgroundColor: "#EEEEEE",
                borderRadius: "5px",
                fieldset: { borderColor: "#fff" },
                mt: "5px",
              }}
              //ref={buildingRef}
              ListboxProps={{ sx: { fontSize: 12 } }}
              renderInput={(params) => (
                <TextField {...params} inputRef={buildingRef} />
              )}
            />
          </Grid>
          <Grid item md={5} sm={5} xs={10} minWidth="250px">
            <Typography variant="subtitle1" fontSize={{ sm: "16px" }}>
              Floor / Apartment #
            </Typography>
            <TextField
              fullWidth
              size="small"
              sx={textFieldStyles}
              inputRef={apartmentNumberRef}
            />
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
              inputRef={messageRef}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={ButtonStyles}
          disabled={loading}
          onClick={handleSubmit}
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

const buildings = [
  { label: "Asante Hall - Eleanor Roosevelt" },
  { label: "Copely International Conference Center - Eleanor Roosevelt" },
  { label: "Eleanor Roosevelt College Administration - Eleanor Roosevelt" },
  { label: "Institute of the Americas - Eleanor Roosevelt" },
  { label: "Latin American Studies Building - Eleanor Roosevelt" },
  { label: "Otterson Hall - Eleanor Roosevelt" },
  { label: "Robinson Building Complex - Eleanor Roosevelt" },
  { label: "San Diego Supercomputer Center - Eleanor Roosevelt" },
  { label: "Social Sciences Building - Eleanor Roosevelt" },
  { label: "Wells Fargo Hall - Eleanor Roosevelt" },
  { label: "University Extension Complex - Marshall" },
  { label: "Basic Science Building - Medical School" },
  { label: "Clinical Sciences Building - Medical School" },
  { label: "Center for Molecular Genetics - Medical School" },
  { label: "Center for Molecular Medicine East - Medical School" },
  { label: "Center for Molecular Medicine West - Medical School" },
  { label: "Center for Neural Circuits and Behavior - Medical School" },
  { label: "W.M. Keck Building (fMRI) - Medical School" },
  {
    label:
      "Leichtag Family Foundation Biomedical Research Building - Medical School",
  },
  { label: "Medical Education and Telemedicine - Medical School" },
  { label: "Medical Teaching Facility - Medical School" },
  { label: "Stein Clinical Research Building - Medical School" },
  { label: "Applied Physics & Mathematics Building - Muir" },
  { label: "Biology Building - Muir" },
  { label: "Humanities & Social Sciences Building - Muir" },
  { label: "Patrick J. Ledden Auditorium (formerly HSS 2250) - Muir" },
  { label: "Mandeville Center - Muir" },
  { label: "William J. McGill Hall - Muir" },
  { label: "Mandler Hall (formerly McGill Hall Annex) - Muir" },
  { label: "Recreation Gym - Muir" },
  { label: "To Be Arranged - N/A" },
  { label: "Catalyst - North Torrey Pines Living Learning Neighborhood" },
  {
    label:
      "General Academic NTPLL - North Torrey Pines Living Learning Neighborhood",
  },
  { label: "The Jeannie - North Torrey Pines Living Learning Neighborhood" },
  { label: "Mosaic - North Torrey Pines Living Learning Neighborhood" },
  {
    label:
      "Ridge Walk Academic Complex - North Torrey Pines Living Learning Neighborhood",
  },
  { label: "Bonner Hall - Revelle" },
  {
    label: "Center for Library & Instructional Computing Services - Revelle",
  },
  { label: "Wagner Dance Facility - Revelle" },
  { label: "Mandell Weiss Forum - Revelle" },
  { label: "Galbraith Hall - Revelle" },
  { label: "Mayer Hall - Revelle" },
  { label: "Mandell Weiss Center - Revelle" },
  { label: "Mayer Hall Addition - Revelle" },
  { label: "Natural Sciences Building - Revelle" },
  { label: "Pacific Hall - Revelle" },
  { label: "Potiker Theatre - Revelle" },
  { label: "Revelle Plaza Outdoor Classroom - Revelle" },
  { label: "Revelle Commons - Revelle" },
  { label: "Revelle College Provost Building - Revelle" },
  { label: "Urey Hall - Revelle" },
  { label: "Urey Hall Annex - Revelle" },
  { label: "Herbert F. York Undergraduate Sciences Building - Revelle" },
  { label: "Birch Aquarium - SIO" },
  { label: "Deep Sea Drilling Building - SIO" },
  { label: "SIO Library -  Eckart Building - SIO" },
  { label: "Hubbs Hall - SIO" },
  { label: "Institute of Geophysics & Planetary Physics - SIO" },
  { label: "Nierenberg Hall - SIO" },
  { label: "Nierenberg Hall Annex - SIO" },
  { label: "Ocean & Atmospheric Res Bldg - SIO" },
  { label: "Ritter Hall - SIO" },
  { label: "Scholander Hall - SIO" },
  { label: "Scripps Building - SIO" },
  { label: "Fred N. Spies Hall - SIO" },
  { label: "Sverdrup Hall - SIO" },
  { label: "Vaughan Hall - SIO" },
  { label: "Structural & Materials Science Engineering Building - Sixth" },
  { label: "Visual Arts Facility (formerly VIS) - Sixth" },
  { label: "Chemistry Research Building - Thurgood Marshall" },
  { label: "Cognitive Science Building - Thurgood Marshall" },
  { label: "Economics Building - Thurgood Marshall" },
  { label: "Media Center/Communication Building - Thurgood Marshall" },
  { label: "Peterson Hall - Thurgood Marshall" },
  { label: "Sequoyah Hall - Thurgood Marshall" },
  { label: "Faustina Solis Lecture Hall - Thurgood Marshall" },
  { label: "Thurgood Marshall College 102 - Thurgood Marshall" },
  {
    label:
      "Thurgood Marshall College Administration Building - Thurgood Marshall",
  },
  { label: "Cros - ultural Center - University Center" },
  { label: "Center Hall - University Center" },
  { label: "Conrad Presbys Music Center - University Center" },
  { label: "Geisel Library - University Center" },
  { label: "P416 Outdoor Classroom - University Center" },
  { label: "Pepper Canyon Hall - University Center" },
  { label: "Price Center - University Center" },
  { label: "Science & Engineering Research Facility - University Center" },
  { label: "Student Services Center - University Center" },
  { label: "University Center -  Building 201 - University Center" },
  { label: "Cancer Research Facility - University Center" },
  { label: "University Center -  Building 409 - University Center" },
  { label: "University Center -  Building 413 - University Center" },
  { label: "University Center -  Building 413A - University Center" },
  {
    label:
      "University Center -  Building 515 (formerly R515) - University Center",
  },
  {
    label:
      "University Center -  Building 516 (formerly R516) - University Center",
  },
  {
    label:
      "University Center -  Building 517 (formerly R517) - University Center",
  },
  {
    label:
      "University Center -  Building 518 (formerly R518) - University Center",
  },
  { label: "Center for Magnetic Recording Research - Warren" },
  { label: "Engineering Building Unit 1 - Warren" },
  { label: "Engineering Building Unit 2 - Warren" },
  { label: "Engineering Building Unit 3 - Warren" },
  { label: "Literature Building - Warren" },
  { label: "Powel - ocht Bioengineering Hall - Warren" },
  { label: "Warren Mall Outdoor Classroom - Warren" },
  { label: "Warren Lecture Hall - Warren" },
];
