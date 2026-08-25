import { useEffect, useState } from "react";
import Projects from "./Components/Projects";
import "./Home.css";

const Home = () => {
    const [portfolio, setPortfolio] = useState(null);

    const fetchData = async () => {
        try {

            const response = await fetch("http://localhost:3000/api/portfolio");

            if (!response.ok) {
                throw new Error("Failed to fetch portfolio data");
            }

            const data = await response.json();

            console.log("Portfolio data:", data);

            setPortfolio(data);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    if (!portfolio) {
        return <h2>No portfolio data found.</h2>;
    }

    return (
        <div className="portfolio">

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

            <Projects projects={portfolio.projects} />

        </div>
    );
};

export default Home;