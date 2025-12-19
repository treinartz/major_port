import { useNavigate } from "react-router-dom";
import projectsData from "../data/projectData";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const goToRandomProject = () => {
    const randomIndex = Math.floor(Math.random() * projectsData.length);
    const randomProject = projectsData[randomIndex];
    navigate(`/projects/${randomProject.id}`);
  };

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to My P5.js Portfolio</h1>
        <p className="tagline">
          A 10-week journey through creative coding and React development
        </p>
        <button className="random-button" onClick={goToRandomProject}>
          🎲 View Random Project
        </button>
      </section>

      <section className="intro">
        <div className="intro-content">
          <h2>From P5.js to React</h2>
          <p>
            This portfolio documents my learning journey through two powerful
            JavaScript technologies: p5.js for creative coding and React for
            building modern web applications.
          </p>
          <p>
            Each week, I tackled new programming concepts—from variables and
            functions to classes and arrays of objects—creating visual,
            interactive projects that brought code to life.
          </p>
        </div>

        <div className="intro-highlights">
          <div className="highlight-card">
            <h3>10 Weeks</h3>
            <p>Of consistent learning and practice</p>
          </div>
          <div className="highlight-card">
            <h3>10 Projects</h3>
            <p>Each exploring a core programming concept</p>
          </div>
          <div className="highlight-card">
            <h3>2 Technologies</h3>
            <p>P5.js for creativity, React for structure</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Explore the Projects</h2>
        <p>Click the Projects link above to see all my work!</p>
      </section>
    </div>
  );
}

export default Home;
