import React from "react";
import { Container, Typography, Link, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const StreamlitEmbed = () => (
  <Container id="contact"
    maxWidth={false}
    sx={{
      width: "100%",
      backgroundColor: "#202025",
      color: "#f0f0f0",
      marginTop: 10,
      paddingTop: 6,
      paddingBottom: 8,
      px: { xs: 3, sm: 6, md: 12 },
    }}
  >
    <Typography
      variant="h4"
      gutterBottom
      sx={{ color: "#00e5ff", fontWeight: 600, textAlign: "center", mb: 6 }}
    >
      Contact Details
    </Typography>

    <Box sx={{ maxWidth: 800, margin: "0 auto" }}>
      <Typography variant="body1" gutterBottom sx={{ fontSize: "1rem" }}>
        📧 Email:{" "}
        <Link href="mailto:bhavesh2k@gmail.com" underline="hover" sx={{ color: "#4fc3f7" }}>
          bhavesh2k@gmail.com
        </Link>
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ fontSize: "1rem", display: "flex", alignItems: "center", gap: 1 }}>
        <LinkedInIcon sx={{ fontSize: 20, color: "#4fc3f7" }} />
        <span>LinkedIn:</span>{" "}
        <Link
          href="https://www.linkedin.com/in/bhaveshagl"
          target="_blank"
          rel="noreferrer"
          underline="hover"
          sx={{ color: "#4fc3f7", ml: "1" }}
        >
          linkedin.com/in/bhaveshagl
        </Link>
      </Typography>


      <Typography variant="body1" gutterBottom sx={{ fontSize: "1rem", display: "flex", alignItems: "center", gap: 1 }}>
        <GitHubIcon sx={{ fontSize: 20, color: "#f0f0f0" }} />
        <span>GitHub:</span>{" "}
        <Link
          href="https://github.com/bhavesh2k"
          target="_blank"
          rel="noreferrer"
          underline="hover"
          sx={{ color: "#4fc3f7", ml: "1" }}
        >
          github.com/bhavesh2k
        </Link>
      </Typography>

    </Box>
  </Container>
);

export default StreamlitEmbed;
