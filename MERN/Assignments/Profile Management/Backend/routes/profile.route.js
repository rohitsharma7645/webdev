import pool from "../config/db";
import express from 'express'

const router = express.Router();

router.post('/register',async(req,res)=>{
    const {name,email,phone,address,age} = req.body

    if(!name || !email || !phone || !address || !age){
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    const result = await pool.query(
        `INSERT INTO profile(name,email,phone,address,age)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *`,[name,email,phone,address,age]
    );
})

export default router