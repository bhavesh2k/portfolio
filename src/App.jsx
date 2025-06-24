import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import StreamlitEmbed from "./components/StreamlitEmbed";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <CssBaseline />
      <div
        style={{
          backgroundColor: "#f8f4f4",
          minHeight: "100vh",
          paddingBottom: "2rem",
        }}
      >
        <Header />
        <Hero />
        <Projects />
        <StreamlitEmbed />
        <Footer />
      </div>
    </>
  );
};

export default App;
