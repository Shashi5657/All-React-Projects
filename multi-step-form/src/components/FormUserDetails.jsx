import React from "react";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const FormUserDetails = ({ nextStep, values, handleChange }) => {
  const continued = (e) => {
    e.preventDefault();
    console.log("Continue button clicked");
    nextStep();
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        {console.log("first page")}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Enter User Details</Typography>
          </Toolbar>
        </AppBar>
        <form style={{ margin: 20 }}>
          <TextField
            label="First Name"
            onChange={(e) => handleChange("firstName", e)}
            value={values.firstName}
            fullWidth
            margin="normal"
          />
          <br />
          <TextField
            label="Last Name"
            onChange={(e) => handleChange("lastName", e)}
            value={values.lastName}
            fullWidth
            margin="normal"
          />
          <br />
          <TextField
            label="Email"
            onChange={(e) => handleChange("email", e)}
            value={values.email}
            fullWidth
            margin="normal"
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 15 }}
            onClick={continued}
          >
            Continue
          </Button>
        </form>
      </>
    </ThemeProvider>
  );
};

export default FormUserDetails;
