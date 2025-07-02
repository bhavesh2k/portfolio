import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box 
    sx={{
      textAlign: "center",
      py: 3,
      backgroundColor: "#1a1a1a"
    }}
  >
    <Typography variant="caption" color="#fff" fontSize={12}>
      &copy; {new Date().getFullYear()} Streamlit Folio. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
