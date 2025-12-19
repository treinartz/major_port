import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectData";
import "../styles/Projects.css";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeek, setSelectedWeek] = useState("all");

  // Filter projects based on search and week selection
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesWeek =
      selectedWeek === "all" || project.week === parseInt(selectedWeek);

    return matchesSearch && matchesWeek;
  });

  return (
    <div className="projects-page">
      <h1>My P5.js Journey</h1>
      <p className="intro">
        Over 10 weeks, I explored creative coding with p5.js, learning
        fundamental programming concepts through visual, interactive projects.
      </p>

      <div className="filters">
        <div className="search-box">
          <label htmlFor="search">Search Projects:</label>
          <input
            id="search"
            type="text"
            placeholder="Search by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="week-filter">
          <label htmlFor="week-select">Filter by Week:</label>
          <select
            id="week-select"
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
          >
            <option value="all">All Weeks</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((week) => (
              <option key={week} value={week}>
                Week {week}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="results-count">
        Showing {filteredProjects.length} of {projectsData.length} projects
      </p>

      <div className="projects-container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        ) : (
          <p className="no-results">
            No projects match your search. Try different keywords!
          </p>
        )}
      </div>
    </div>
  );
}

export default Projects;
