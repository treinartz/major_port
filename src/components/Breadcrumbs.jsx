import { Link, useLocation } from "react-router-dom";
import projectsData from "../data/projectData";
import "../styles/Breadcrumbs.css";

function Breadcrumbs() {
  const location = useLocation();

  // Split path into segments
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Function to get display name for breadcrumb
  const getDisplayName = (name, index) => {
    // Check if this is a project ID (number)
    if (!isNaN(name) && pathnames[index - 1] === "projects") {
      const project = projectsData.find((p) => p.id === parseInt(name));
      return project ? `Week ${project.week}: ${project.title}` : name;
    }

    // Otherwise, format normally (capitalize, replace hyphens)
    return name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " ");
  };

  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const displayName = getDisplayName(name, index);

        return (
          <span key={routeTo}>
            <span className="separator"> / </span>
            {isLast ? (
              <span className="current">{displayName}</span>
            ) : (
              <Link to={routeTo}>{displayName}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
