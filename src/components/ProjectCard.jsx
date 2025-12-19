import { useState } from "react";
import { Link } from "react-router-dom";
import CodeBlock from "./CodeBlock";
import "../styles/ProjectCard.css";

function ProjectCard({
  id,
  week,
  title,
  description,
  reflection,
  gifPath,
  code,
}) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
    <div className="project-card">
      <div className="card-header">
        <h3>
          Week {week}: {title}
        </h3>
        <button
          className={`like-button ${hasLiked ? "liked" : ""}`}
          onClick={handleLike}
        >
          {hasLiked ? "❤️" : "🤍"} {likes}
        </button>
      </div>

      <div className="card-content">
        <div className="visual-section">
          <Link to={`/projects/${id}`}>
            <img src={gifPath} alt={`${title} animation`} />
          </Link>
        </div>

        <div className="text-section">
          <div className="description">
            <h4>Description</h4>
            <p>{description}</p>
          </div>

          <div className="reflection">
            <h4>Reflection</h4>
            <p>{reflection}</p>
          </div>
        </div>
      </div>

      <CodeBlock code={code} />

      <Link to={`/projects/${id}`} className="view-detail-link">
        View Full Details →
      </Link>
    </div>
  );
}

export default ProjectCard;
