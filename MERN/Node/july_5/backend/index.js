import express from "express";
import cors from "cors";

const app = express();
app.use(express.json())   // with this app can convert the data into json
app.use(cors())

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use((req,res,next)=>{
    console.log(`Middleware 1`)
    next()
})

app.use((req,res,next)=>{
    console.log(`Middleware 2`)
    next()
})

function ab1(req,res,next){
    console.log('Middleware for user 1')
    next()
}  

function ab2(req,res,next){
    console.log('Middleware for user 2')
    next()
} 

app.get('/user1',ab1,(req,res)=>{
    console.log('Middleware for user1')
})
app.get('/user2',ab2,(req,res)=>{
    console.log('Middleware for user2')
})

let items = [{id:1,name:'Rohit'}]

app.get('/api/items', (req,res)=>{
    res.json(items)
})

let users = {
    name:  "Rohit",
    bio: "Software Developer"
};

let skills = ['jav','c++','js','python']

let projects = [
    {id:1, name:'Project1'},
    {id:1, name:'Project1'},
    {id:1, name:'Project1'},
]

// get
app.get("/bio", (req,res)=>{
    res.status(200).json(users)
})

app.get('/skills', (req,res)=>{
    res.status(200).json(skills)
})

app.get('/projects', (req,res)=>{
    res.status(200).json(projects)
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