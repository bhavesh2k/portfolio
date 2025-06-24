import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const generateGitHubLink = (title) => {
  return `https://github.com/bhavesh2k/${title
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
};

const ProjectCard = ({ title, description, techs, link }) => {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #ddd",
        borderRadius: 3,
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.2s ease",
        boxShadow: 3,
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      {/* Top content */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 1, mt: 3 }}
        >
          {description}
        </Typography>
      </Box>

      {/* Spacer to push tags + footer down */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Tags section */}
      <Box display="flex" flexWrap="wrap" gap={1} mb={3}>
        {techs.map((tech, idx) => (
          <Chip
            key={idx}
            label={tech}
            size="small"
            sx={{ backgroundColor: "#f1f0f1" }}
          />
        ))}
      </Box>

      {/* Bottom button section with top border */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        sx={{ borderTop: "1px solid #e0e0e0" }}
      >
        <Button
          variant="contained"
          size="medium"
          startIcon={<GitHubIcon sx={{ color: "black" }} />}
          href={generateGitHubLink(title)}
          target="_blank"
          rel="noopener"
          sx={{
            textTransform: "none",
            color: "black",
            backgroundColor: "#f1f0f1",
            boxShadow: "none",
            "&:hover": {
              borderColor: "#888",
              backgroundColor: "#367e7e",
              color: "#fff",
              boxShadow: "none",
              "& .MuiSvgIcon-root": { color: "#fff" },
            },
          }}
        >
          GitHub
        </Button>

        <Button
          variant="contained"
          size="medium"
          endIcon={<LaunchIcon />}
          href={link}
          target="_blank"
          rel="noopener"
          boxShadow= "none"
          sx={{
            textTransform: "none",
            backgroundColor: "#367e7e",
          }}
        >
          Visit App
        </Button>
      </Box>
    </Card>
  );
};

export default ProjectCard;
