import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2>Oops! Page Not Found</h2>
        <p className="error-message">
          The page you're looking for seems to have wandered off into the
          digital void. Just like a p5.js sketch that went off-canvas!
        </p>

        <div className="animation-container">
          <div className="bouncing-circle"></div>
        </div>

        <div className="action-buttons">
          <Link to="/" className="home-button">
            Go Home
          </Link>
          <Link to="/projects" className="projects-button">
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
