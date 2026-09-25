import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/db';

const router = express.Router();


router.post('/register', async (req,res,next)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:'Email and password are required'})
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const result = await pool.query(
            'INSERT INTO users (email,password) VALUES ($1,$2) RETURNING id email',
            [email,hashedPassword]
        );
        res.status(201).json({message:'User registered successfully',user:result.rows[0]});
    } catch (error){
        next(error)    // it is express error handler
    }
});



router.post('/login', async(req,res,next)=>{
    try{
        const {email,password} = req.body;
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        )
        const user = result.row[0];

        if(!user){
            return res.status(401).json({message:'Invalide email or password'})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(401).json({message:'Invalide email or password'})
        }
        const token = jwt.sign(
            {userId:user.id,email:user.email},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        )

        res.status(200).json({message:'Login Successful', token})
    } catch(error){
        next(error)
    }
})


export default router;