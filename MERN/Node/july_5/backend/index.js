import express from "express";

const app = express();
app.use(express.json())   // with this app can convert the data into json

const users = [
    {id:1, name:"Rohit"},
    {id:2, name:"Chandu"},
    {id:3, name: "Arya"}
];

// get
app.get("/users", (req,res)=>{
    res.status(200).json(users)
})


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

app.put('/user/:id', (req,res)=>{
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
    console.log("Server is running on port 3000")
})