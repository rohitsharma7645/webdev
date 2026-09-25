import express from 'express'
import authRoutes from '../routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import po

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/post',po)

export default app;