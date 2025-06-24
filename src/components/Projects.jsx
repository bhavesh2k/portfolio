import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Sentiment Analyzer",
    description:
      "A web app for real-time sentiment analysis using a fine-tuned RoBERTa model to classify user input as positive, neutral, or negative. Visualized model confidence scores with progress bars and deployed the app on Streamlit Cloud for public access.",
    techs: ["Transformers", "PyTorch"],
    link: "https://sentiment-analyzer-bhavesh2k.streamlit.app/",
  },
  {
    title: "Stock Market Analyzer",
    description: "An interactive web app to analyze stock market trends by visualizing price movements and moving averages. Integrated real-time sentiment analysis from financial news and Reddit.",
    techs: ["Plotly", "BeautifulSoup", "VaderSentiment", "Praw"],
    link: "https://stock-analyzer-bhavesh2k.streamlit.app/",
  },
  {
    title: "MindMate",
    description: "A web app for mood tracking, journaling, and personalized AI advice using Firebase authentication and storage. Integrated sentiment-aware reflections and tag-based mental wellness suggestions tailored to user input.",
    techs: ["Firebase", "Pandas", "Textblob", "Altair"],
    link: "https://mindmate-bhavesh2k.streamlit.app/",
  },
  {
    title: "Reddit Sentiment Analyzer",
    description: "A Reddit Sentiment Analysis Dashboard that fetches live Reddit posts, classifies sentiment, and visualizes trends with bar charts and word clouds. Enabled real-time analysis of subreddit discussions or keyword-based posts with interactive UI and NLP-based insights.",
    techs: ["Matplotlib", "Pandas", "Praw", "Wordcloud" , "Textblob", "VaderSentiment"],
    link: "https://reddit-sentiment-analyzer-bhavesh2k.streamlit.app/",
  },
  {
    title: "EDA Tool",
    description: "A Exploratory Data Analysis (EDA) tool to upload CSV/Excel files and auto-generate insights including missing values, correlations, value counts, and outlier detection. Integrated interactive visualizations and added user controls for column selection, summary stats, and boxplots for numeric outliers.",
    techs: ["Seaborn", "Pandas", "Openpyxl", "Matplotlib", "Plotly"],
    link: "https://eda-tool-bhavesh2k.streamlit.app/",
  },
];

const Projects = () => (
  <Container id="projects" maxWidth="xl" sx={{ mt: 8, pl: 40 }}>
    <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        color="#45097c"
        gutterBottom
        sx={{ mb: 4 }}
        >
        My Projects
        </Typography>
    <Box
      display="flex"
      flexWrap="wrap"
      gap={4}
      justifyContent="center"
      mt={8}
      
    >
      {projects.map((proj, idx) => (
        <Box key={idx} sx={{ width: 400 }}>
          <ProjectCard {...proj} />
        </Box>
      ))}
    </Box>
  </Container>
);

export default Projects;
