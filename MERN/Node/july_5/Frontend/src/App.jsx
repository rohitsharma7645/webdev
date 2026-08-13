import { useEffect, useState } from "react";

function App() {
  const [bio, setBio] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bio")
      .then((res) => res.json())
      .then((data) => setBio(data));

    fetch("http://localhost:3000/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));

    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h1>{bio.name}</h1>
      <p>{bio.bio}</p>

      <h2>Skills</h2>
      {skills.map((skill) => (
        <p key={skill}>{skill}</p>
      ))}

      <h2>Projects</h2>
      {projects.map((project) => (
        <p key={project.id}>{project.name}</p>
      ))}
    </div>
  );
}

export default App;