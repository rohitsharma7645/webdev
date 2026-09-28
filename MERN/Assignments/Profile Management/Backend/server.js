import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import profileRoute from './routes/profile.route.js'

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000

app.use('/create',profileRoute)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

