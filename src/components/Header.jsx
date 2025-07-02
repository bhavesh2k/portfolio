import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import WebIcon from "@mui/icons-material/Web";

const Header = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#f8f4f4",
        color: "#000",
        zIndex: 1100,
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left-aligned icon + button */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, pl: 2 }}>
          <Button
            onClick={scrollToTop}
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#000",
              fontWeight: "bold",
              textTransform: "capitalize",
              p: 0,
              minWidth: "auto",
            }}
          >
            <WebIcon sx={{ mr: 1 }} />
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              Project Portfolio
            </Typography>
          </Button>
        </Box>

        {/* Right-aligned links */}
        <Box sx={{ display: "flex", gap: 2, pr: 60}}>
          <Button
            onClick={scrollToTop}
            sx={{
              color: "#87878e",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Home
          </Button>
          <Button
            onClick={scrollToProjects}
            sx={{
              color: "#87878e",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Projects
          </Button>
          <Button
            onClick={scrollToContact}
            sx={{
              color: "#87878e",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Contact
          </Button>
          <Button
            onClick={() =>
              window.open("https://www.linkedin.com/in/bhaveshagl", "_blank")
            }
            sx={{
              color: "#87878e",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            LinkedIn
          </Button>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
