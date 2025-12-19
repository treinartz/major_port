import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About This Portfolio</h1>

      <section className="about-section">
        <h2>The Learning Journey</h2>
        <p>
          This portfolio showcases 10 weeks of learning creative coding with
          p5.js, rebuilt as a React application to demonstrate fundamental web
          development concepts.
        </p>
      </section>

      <section className="about-section">
        <h2>P5.js vs React: Two Different Paradigms</h2>

        <div className="comparison">
          <div className="comparison-card">
            <h3>P5.js - Imperative</h3>
            <ul>
              <li>Animation-focused creative coding library</li>
              <li>setup() runs once, draw() loops continuously</li>
              <li>Direct canvas manipulation</li>
              <li>Global variables and functions</li>
              <li>Great for: animations, games, generative art</li>
            </ul>
          </div>

          <div className="comparison-card">
            <h3>React - Declarative</h3>
            <ul>
              <li>UI-focused JavaScript library</li>
              <li>Components render when data changes</li>
              <li>Virtual DOM for efficient updates</li>
              <li>Component-based architecture</li>
              <li>Great for: web apps, dashboards, portfolios</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>What I Learned</h2>
        <p>Through this project, I gained hands-on experience with:</p>
        <ul className="skills-list">
          <li>JSX syntax and React component structure</li>
          <li>Props for passing data between components</li>
          <li>External data management with JavaScript objects</li>
          <li>CSS modules and styling best practices</li>
          <li>Building reusable, modular components</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
