import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Avatar,
} from "@mui/material";

const Hero = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f4f4", py: 15 }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={15}
          alignItems="center"
          justifyContent="flex-start"
        >
          {/* Left: Text */}
          <Grid item xs={12} md={7}>
            <Box sx={{ maxWidth: 600 }}>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                Bhavesh Agarwal
              </Typography>
              <Typography variant="h4" color="#45097c" gutterBottom>
                Data Analyst
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Experienced data analyst with a focus on dashboard development,
                data automation, and interactive Streamlit apps for sentiment
                analysis and EDA. Skilled at turning complex data into actionable
                insights to support decision-making.
              </Typography>
              <Box mt={3}>
                <Button variant="contained" href="#projects">
                  View My Projects
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right: Image */}
          <Grid item xs={12} md={5}>
            <Box display="flex" justifyContent="center">
              <Avatar
                alt="Bhavesh Agarwal"
                src="/assets/profile.jpeg" // Ensure image exists here
                sx={{ width: 250, height: 250 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
