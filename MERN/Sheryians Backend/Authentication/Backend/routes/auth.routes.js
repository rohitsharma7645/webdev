import express from 'express'
import authController from '../controllers/auth.controller.js';

const router = express.Router();

// post to access this I have to use api/auth/register bcz in app.js we use api/auth as prefix in app.use middleware
router.post('/register',authController.registerUser)

export default router
