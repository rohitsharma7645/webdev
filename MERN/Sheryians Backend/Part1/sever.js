import express, { response } from 'express'
import connectDB from './config/db.js'
import noteModel from './models/note.model.js'

const app = express()
connectDB()

app.use(express.json())



app.post('/notes',async(req,res)=>{
    const data = req.body

    await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message:"New note created"
    })
})

app.get('/notes',async (req,res)=>{
    const notes = await noteModel.find();

    // const notes = await noteModel.find({
    //     title: 't1'    // return all data with title t1
    // });

    // const notes = await noteModel.findOne({
    //     title: 't1'   // return single data with title t1. If no data found then it returns null
    // });

    // find() => [{},{}] or []
    // findOne() => {} or null

    res.status(200).json(notes)
})


app.get('/notes/:idx',(req,res)=>{
    const idx = req.params.idx

    delete notes[idx]

    res.status(200).json({
        message:"not deleted"
    })
})

app.patch('/notes/:id',async (req,res)=>{

    const index = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id:id},{description:description})

    res.status(201).json({
        message:"note updated"
    })
})

app.delete('/notes/:id', async(req,res)=>{
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id    
    })
    res.status(200).json({
        message:'Not deleted successfully'
    })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
