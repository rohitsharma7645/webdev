import express from "express";
const app = express();

app.use(express.json());

const user = {
  name: "Himanshu",
  bio: "Software Developer",
};

const skills = ["Java", "JavaScript", "React", "Node.js"];

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
  },
  {
    id: 2,
    name: "AI Project",
  },
];

// Get bio
app.get("/bio", (req, res) => {
  res.status(200).json(user);
});

// Get skills
app.get("/skills", (req, res) => {
  res.status(200).json(skills);
});

// Get projects
app.get("/projects", (req, res) => {
  res.status(200).json(projects);
});


// post
app.post('/users', (req,res)=>{
    const newUser = {
        id:users.length+1,
        name:req.body.name
    }
    users.push(newUser)
    res.status(201).json(users)
})

// put

app.put('/users/:id', (req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(u => u.id===id)

    if(!user) return res.status(404).json ({message:"User not found"});
    user.name = req.body.name;
    res.status(200).json(user);
})
app.delete('/users/:ids',(req,res)=>{
    const id = Number(req.params.ids);
    users = users.filter(u=> u.id!==id);
    res.status(200).json(user)
    
})

app.listen(3000, ()=>{
    console.log(`Server is running on port http://localhost:${3000}`)
})