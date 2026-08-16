import express from 'express'
import cors from 'cors'
import projects from './Data/projects.js'
import profiles from './Data/profiles.js'
import blogs from './Data/blogs.js'
import products from './Data/products.js'

const app = express()
app.use(express.json())
app.use(cors())



// Portfolio
app.get('/api/portfolio',(req,res)=>{
    const portfolio = {
        name: "Rahul",
        bio: "I am a passionate Frontend Developer interested in building modern and responsive web applications.",
        skills: ["JavaScript", "React", "Python", "Java"],
        projects: projects
    };
    res.status(200).json(portfolio)
})

// Products
app.get('/api/products',(req,res)=>{
    res.status(200).json(products)
})

// Products:id
app.get('/api/products/:id',(req,res)=>{
    const id = Number(req.params.id);
    const product = products.find(u => u.id===id)

    if(!product) return res.status(404).json ({message:"Product not found"});
    res.status(200).json(product)
})

// Blogs
app.get('/api/blogs',(req,res)=>{
    res.status(200).json(blogs)
})

// Blogs :id
app.get('/api/blogs/:id',(req,res)=>{
    const id = Number(req.params.id);
    const blog = blogs.find(u => u.id===id)

    if(!blog) return res.status(404).json ({message:"Blog not found"});
    res.status(200).json(blog)
})

app.get('/api/profiles',(req,res)=>{
    res.status(200).json(profiles)
})

app.listen(3000, ()=>{
    console.log(`Server is running on port http://localhost:${3000}`)
})