import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/project");
        const result = await response.json();

        setProjects(result);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="projects-container">
      <h1>Projects</h1>

      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <h2>{project.title}</h2>

          <p>{project.description}</p>

          <div>
            {project.tech.map((technology, index) => (
              <span key={index}>{technology}</span>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
};

export default Projects;