import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box sx={{ textAlign: "center", py: 2, mt: 4 }}>
    <Typography variant="caption" color="#87879c">
      &copy; {new Date().getFullYear()} Streamlit Folio. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
