import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;