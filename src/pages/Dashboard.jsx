import { useState } from "react";
import projectsData from "../data/projectData";
import "../styles/Dashboard.css";

function Dashboard() {
  // Track likes for each project
  const [projectLikes, setProjectLikes] = useState(
    projectsData.map((project) => ({ id: project.id, likes: 0 }))
  );

  const [sortOrder, setSortOrder] = useState("desc");
  const [showOnlyLiked, setShowOnlyLiked] = useState(false);

  // Calculate statistics
  const totalProjects = projectsData.length;
  const totalLikes = projectLikes.reduce(
    (sum, project) => sum + project.likes,
    0
  );
  const averageLikes =
    totalProjects > 0 ? (totalLikes / totalProjects).toFixed(1) : 0;

  // Find most liked project
  const mostLikedProject = projectLikes.reduce(
    (max, project) => (project.likes > max.likes ? project : max),
    { id: null, likes: 0 }
  );

  const mostLikedProjectData = projectsData.find(
    (p) => p.id === mostLikedProject.id
  );

  // Increment likes for a project
  const incrementLikes = (projectId) => {
    setProjectLikes((prevLikes) =>
      prevLikes.map((project) =>
        project.id === projectId
          ? { ...project, likes: project.likes + 1 }
          : project
      )
    );
  };

  // Reset all likes
  const resetAllLikes = () => {
    setProjectLikes(
      projectsData.map((project) => ({ id: project.id, likes: 0 }))
    );
  };

  // Get sorted and filtered projects
  const getDisplayProjects = () => {
    let projects = projectsData.map((project) => ({
      ...project,
      likes: projectLikes.find((p) => p.id === project.id)?.likes || 0,
    }));

    // Filter
    if (showOnlyLiked) {
      projects = projects.filter((p) => p.likes > 0);
    }

    // Sort
    projects.sort((a, b) =>
      sortOrder === "desc" ? b.likes - a.likes : a.likes - b.likes
    );

    return projects;
  };

  const displayProjects = getDisplayProjects();

  return (
    <div className="dashboard-page">
      <h1>Project Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <p className="stat-number">{totalProjects}</p>
        </div>

        <div className="stat-card">
          <h3>Total Likes</h3>
          <p className="stat-number">{totalLikes}</p>
        </div>

        <div className="stat-card">
          <h3>Average Likes</h3>
          <p className="stat-number">{averageLikes}</p>
        </div>

        <div className="stat-card highlight">
          <h3>Most Liked</h3>
          <p className="stat-text">
            {mostLikedProject.likes > 0
              ? `Week ${mostLikedProjectData?.week}: ${mostLikedProjectData?.title}`
              : "No likes yet!"}
          </p>
          <p className="stat-number">{mostLikedProject.likes} ❤️</p>
        </div>
      </div>

      <div className="controls">
        <button className="reset-button" onClick={resetAllLikes}>
          Reset All Likes
        </button>

        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={showOnlyLiked}
              onChange={(e) => setShowOnlyLiked(e.target.checked)}
            />
            Show only liked projects
          </label>
        </div>

        <div className="control-group">
          <label htmlFor="sort">Sort by likes:</label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Highest first</option>
            <option value="asc">Lowest first</option>
          </select>
        </div>
      </div>

      <div className="projects-list">
        <h2>Projects ({displayProjects.length})</h2>
        {displayProjects.map((project) => (
          <div key={project.id} className="dashboard-project-card">
            <div className="project-info">
              <h3>
                Week {project.week}: {project.title}
              </h3>
              <p>{project.description}</p>
            </div>
            <div className="project-actions">
              <span className="likes-display">{project.likes} ❤️</span>
              <button onClick={() => incrementLikes(project.id)}>Like</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
