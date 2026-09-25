const express = require("express");
const multer = require('multer');
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors")

app = express();
app.use(cors());
app.use(express.json());
const upload = multer({ storage:multer.memoryStorage()});

app.post("/create-post",upload.single("image"), async (req,res)=>{   
        console.log(req.body);
        console.log(req.file);

        const result = await uploadFile(req.file.buffer);

        const post = await postModel.create({
            image:result.url,
            caption:req.body.caption
        })
       
        return res.status(200).json({
            message:"Post created successfully",
            data:post
        })
})


app.get("/posts", async (req,res)=>{
    
})

module.exports = app;