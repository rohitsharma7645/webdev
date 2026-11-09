import express from 'express';
import morgan from 'morgan';    // HTTP request logger middleware for node.js. It automatically logs details about incoming HTTP requests to the console or a file.
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(express.json());
app.use(morgan('dev')); // Use morgan middleware for logging HTTP requests in 'dev' format

app.use('/api/auth', authRoutes); 



export default app;