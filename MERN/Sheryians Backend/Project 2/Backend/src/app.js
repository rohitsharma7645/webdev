import express from 'express'
import cookieParser from 'cookie-parser'
import authRoutes from '../routes/auth.routes.js'
import musicRoutes from '../routes/music.route.js'

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/music',musicRoutes)

export default app;