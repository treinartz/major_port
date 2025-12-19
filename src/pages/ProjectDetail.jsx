import { useParams, Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import CodeBlock from "../components/CodeBlock";
import projectsData from "../data/projectData";
import "../styles/ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="error-container">
          <h2>Project Not Found</h2>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="back-link">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const goToPrevious = () => {
    if (project.id > 1) {
      navigate(`/projects/${project.id - 1}`);
    }
  };

  const goToNext = () => {
    if (project.id < projectsData.length) {
      navigate(`/projects/${project.id + 1}`);
    }
  };

  return (
    <div className="project-detail-page">
      <Breadcrumbs />
      <Link to="/projects" className="back-link">
        ← Back to All Projects
      </Link>

      <div className="project-header">
        <h1>
          Week {project.week}: {project.title}
        </h1>
      </div>

      <div className="project-content">
        <div className="visual-section">
          <img src={project.gifPath} alt={`${project.title} animation`} />
        </div>

        <div className="details-section">
          <section className="detail-card">
            <h3>📝 Description</h3>
            <p>{project.description}</p>
          </section>

          <section className="detail-card">
            <h3>💭 Reflection</h3>
            <p>{project.reflection}</p>
          </section>
        </div>
      </div>

      <div className="code-section">
        <h3>💻 Code</h3>
        <CodeBlock code={project.code} />
      </div>

      <div className="navigation-buttons">
        <button
          onClick={goToPrevious}
          disabled={project.id === 1}
          className="nav-button"
        >
          ← Previous Project
        </button>
        <span className="project-indicator">
          Project {project.id} of {projectsData.length}
        </span>
        <button
          onClick={goToNext}
          disabled={project.id === projectsData.length}
          className="nav-button"
        >
          Next Project →
        </button>
      </div>
    </div>
  );
}

export default ProjectDetail;
