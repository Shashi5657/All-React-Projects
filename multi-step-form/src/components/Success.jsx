import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";

const Success = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Success</Typography>
        </Toolbar>
      </AppBar>
      <h1>Thank you for your submission</h1>
      <p>You will get an email with further instructions</p>
    </ThemeProvider>
  );
};

export default Success;
