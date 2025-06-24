import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

const StreamlitEmbed = () => (
  <Container sx={{ my: 5 }}>
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Live Streamlit Folio
        </Typography>
        <iframe
          src="https://stock-analyzer-bhavesh2k.streamlit.app/"
          title="Streamlit Portfolio"
          width="100%"
          height="700px"
          style={{ border: "none" }}
        />
      </CardContent>
    </Card>
  </Container>
);

export default StreamlitEmbed;
