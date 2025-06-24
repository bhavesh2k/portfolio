import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import "@fontsource/poppins";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Create a custom MUI theme with Poppins font
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
