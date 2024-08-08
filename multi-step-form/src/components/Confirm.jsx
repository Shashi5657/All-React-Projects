import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Confirm = ({ nextStep, prevStep, values }) => {
  const continued = (e) => {
    e.preventDefault();
    // this is where to process the data & send it to api
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  const { firstName, lastName, email, occupation, city, bio } = values;

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <AppBar position="static">
          <h1>Confirm User Data</h1>
        </AppBar>
        <List>
          <ListItem>
            <strong>First Name: </strong>
            {firstName}
          </ListItem>
          <ListItem>
            <strong>Last Name: </strong>
            {lastName}
          </ListItem>
          <ListItem>
            <strong>Email: </strong>
            {email}
          </ListItem>
          <ListItem>
            <strong>Occupation: </strong>
            {occupation}
          </ListItem>
          <ListItem>
            <strong>City: </strong>
            {city}
          </ListItem>
          <ListItem>
            <strong>Bio: </strong>
            {bio}
          </ListItem>
        </List>
        <br />
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "15px" }}
          onClick={continued}
        >
          Confirm & Continue
        </Button>
        <Button variant="contained" style={{ margin: "15px" }} onClick={back}>
          Back
        </Button>
      </>
    </ThemeProvider>
  );
};

export default Confirm;
