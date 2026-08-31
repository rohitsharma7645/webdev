import express from 'express';
import cors from 'cors';
import users from './Data/user.js';

const app = express();

app.use(express.json());
app.use(cors())

function validUser(req, res, next){
    const { name, branch} = req.body;

    if(!name || !branch){
        return res.status(400).json({
            "message": "please enter valid details"
        })
    }
    next();
}

function common(req, res, next){
  console.log('Middleware for all routes');
  next();
}


app.post('/login',validUser,(req,res)=>{
    const newUser = {
        id: users.length+1,
        name: req.body.name,
        roll : req.body.roll,
        branch: req.body.branch,
        phone: req.body.phone
    }
    users.push(newUser)
    res.status(201).json(newUser)
})

app.get('/users',common,(req,res)=>{
    res.json(users)
})

app.get('/users/:id',common,(req,res)=>{
    const id = Number(req.params.id)

    let user = users.find(user=>user.id===id)
    res.json(user)
})

app.put('/users/:id',common,(req,res)=>{
    const id = Number(req.params.id)

    let user = users.find(user=>user.id===id)
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    user.name = req.body.name
    user.roll = req.body.roll
    user.branch = req.body.branch
    user.phone = req.body.phone

    res.json(user)
})

app.delete('/users/:id',common,(req,res)=>{
    const id = Number(req.params.id)

    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    users.splice(index, 1);
    res.json(users)
})

app.listen(3000,()=>{
    console.log('Server is running at 3000')
})
