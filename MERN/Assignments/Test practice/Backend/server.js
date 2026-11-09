import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import eventRoute from './routes/eventRoute.js'
import pool from './config/db.js'

const app = express();

app.use(express.json());
app.use(cors())

app.use('/events', eventRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});