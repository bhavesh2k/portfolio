import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Avatar,
} from "@mui/material";
import bhaveshImage from "../assets/profile.jpeg";

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
              <Typography variant="body1" sx={{ mt: 3, fontSize: "1.1rem", color:"text.secondary" }}>
                Experienced data analyst with a focus on dashboard development, data automation, and interactive Streamlit apps for sentiment
                analysis and EDA. Skilled at turning complex data into actionable insights to support decision-making.
              </Typography>
              <Box mt={5}>
                <Button 
                  variant="contained" size="medium"
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#45097c",
                    textTransform: "capitalize",
                    px: 4,
                    py: 1,
                    borderRadius: 2,
                    fontSize: "16px",
                    boxShadow: "none"
                  }}
                  onClick={() => {
                    const element = document.getElementById("projects");
                    const offset = 80; // Adjust this based on your header height
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                    });
                }}
                >
                  View My Projects
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right: Image */}
          <Grid item xs={12} md={5}>
            <Box display="flex" justifyContent="center" sx={{ pl: 4 }}>
              <Avatar
                alt="Bhavesh Agarwal"
                src={bhaveshImage}
                sx={{ width: 300, height: 300, boxShadow: 10 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
