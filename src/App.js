import './App.css';

const projects = [
  {
    title: "Sentiment Analyzer",
    url: "https://sentiment-analyzer-bhavesh2k.streamlit.app/",
  },
  {
    title: "Stock Market Analyzer",
    url: "https://stock-analyzer-bhavesh2k.streamlit.app/p",
  },
  {
    title: "Reddit Sentiment Analyzer",
    url: "https://reddit-sentiment-analyzer-bhavesh2k.streamlit.app/",
  },
  {
    title: "MindMate - Mental Wellness",
    url: "https://mindmate-bhavesh2k.streamlit.app/",
  },
  {
    title: "EDA Tool",
    url: "https://eda-tool-bhavesh2k.streamlit.app/",
  },
];

function App() {
  return (
    <div className="container">
      <h1>Bhavesh's Streamlit Projects</h1>
      <div className="grid">
        {projects.map((project, idx) => (
          <div className="card" key={idx}>
            <h2>{project.title}</h2>
            <a href={project.url} target="_blank" rel="noreferrer">
              View App →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
