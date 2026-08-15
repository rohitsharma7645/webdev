import express from "express";
import cors from "cors";
import bioData from "./data/bio.js";
import projectsData from "./data/project.js";
import skillsData from "./data/skills.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.get("/", (req,res) => {
  res.send("API is running");
});

app.get('/bio', (req,res) => {
  res.status(200).json(bioData);
});

app.get('/skills', (req,res) => {
  res.status(200).json(skillsData);
});

app.get('/project', (req,res) => {
  res.status(200).json(projectsData);
});

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
})