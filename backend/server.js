import express from 'express';

const app = express();
const PORT = 5001;

app.use(express.json());

app.get("/r", (req, res) =>{
    res.send("Server running");
});



app.listen(PORT, ()=>{
    console.log(`Server running on https://localhost:${PORT}`);
});