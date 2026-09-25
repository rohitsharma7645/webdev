import express from 'express'
import cors from 'cors'
import { requireAuth } from './middleware/requireAuth'

import authRoutes from './routes/authRoutes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth',authRoutes)

app.get('/api/protected', requireAuth,(req,res)=>{
    res.status(200).json({message:'You have accessed a protected route', user:req.user});
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({message:'Internal Server Error'})
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})