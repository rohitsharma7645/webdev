import express from "express"

const app = express();

const PORT =3000;

app.get("/",(req,res)=>{
    res.send("Api is working");
})

app.listen(PORT, ()=>{
    console.log("Hii")
    console.log(`Server listening on http://localhost:${PORT} `)
});

app.use(express());

let std = [
    {id:1, name:"Raje"},
    {id:2, name:"Anuj"}
]

app.get('/std', (req,res)=>{
    res.status(200).json(std)
})
