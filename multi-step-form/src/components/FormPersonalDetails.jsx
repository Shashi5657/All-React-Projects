import React from "react";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const FormPersonalDetails = ({ nextStep, prevStep, values, handleChange }) => {
  const continued = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Enter Personal Details</Typography>
          </Toolbar>
        </AppBar>
        <form style={{ margin: 20 }}>
          <TextField
            label="Occupation"
            onChange={(e) => handleChange("occupation", e)}
            value={values.occupation}
            fullWidth
            margin="normal"
          />
          <br />
          <TextField
            label="City"
            onChange={(e) => handleChange("city", e)}
            value={values.city}
            fullWidth
            margin="normal"
          />
          <br />
          <TextField
            label="Bio"
            onChange={(e) => handleChange("bio", e)}
            value={values.bio}
            fullWidth
            margin="normal"
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 15, marginRight: 15 }}
            onClick={continued}
          >
            Continue
          </Button>
          <Button variant="contained" style={{ marginTop: 15 }} onClick={back}>
            Back
          </Button>
        </form>
      </>
    </ThemeProvider>
  );
};

export default FormPersonalDetails;
