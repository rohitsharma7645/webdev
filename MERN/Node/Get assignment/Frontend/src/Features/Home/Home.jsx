import { useEffect, useState } from "react";
import ProjectCard from "./Components/ProjectCard";

const Home = () => {
    const [portfolio, setPortfolio] = useState(null);


    const fetchData = async () => {
        try {

            const response = await fetch("http://localhost:3000/api/portfolio");

            if (!response.ok) {
                throw new Error("Failed to fetch portfolio data");
            }

            const data = await response.json();

            setPortfolio(data);
        } catch (error) {
            console.error("Error fetching skills:", error);
        } 
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="portfolio">

            {/* Profile Section */}
            <section className="profile">
                <h1>{portfolio.name}</h1>

                <p>{portfolio.bio}</p>

                <h2>Skills</h2>

                <ul>
                    {portfolio.skills.map((skill) => (
                        <li key={skill}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </section>


            {/* Projects Section */}
            <section className="projects">
                <h2>Projects</h2>

                <div className="project-grid">
                    {portfolio.projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Home;