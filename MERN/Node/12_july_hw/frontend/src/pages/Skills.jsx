import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/skills");
        const result = await response.json();

        setSkills(result);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Skills</h1>

      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
};

export default Skills;