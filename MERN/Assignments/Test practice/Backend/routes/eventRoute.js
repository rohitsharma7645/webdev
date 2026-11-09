import express from 'express'
import pool from '../config/db.js'
import validateEvent from '../middleware/eventValidation.js'

const router = express.Router();

router.get('/', async(req,res)=>{
    try{
        const result = await pool.query(`Select * from events`,);

        res.status(200).json(result.rows)
    } catch(err){
        console.error(err)
    }
})

router.get('/:id', async(req,res)=>{
    try{
        const {id} = req.params;

        const result = await pool.query(`Select * from events where id=$1`,[id])
        
        if(result.rows.length==0){
            return res.status(404).json({
                success: false,
                message: 'Event not found'
            });
        }

        res.status(200).json(result.rows[0])

    } catch(err){
        console.error(err)
    }
})

router.post('/',validateEvent,async(req,res)=>{
    try{
        const {title,description,category,location,event_date,price,total_seats,available_seats} = req.body;

        const result = await pool.query(
            `INSERT INTO events
            (title, description, category, location, event_date,
             price, total_seats, available_seats)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
            RETURNING *`,
            [title,description,category,location,event_date,price,total_seats,available_seats]
        );

        res.status(201).json(result.rows[0])

    } catch(err){
        console.error(err)
    }
})


router.put('/:id',validateEvent, async(req,res)=>{

    try{
        const { id } = req.params;
        const {title,description,category,location,event_date,price,total_seats,available_seats} = req.body;

        const result = await pool.query(
            `UPDATE events
             SET title = $1,
                 description = $2,
                 category = $3,
                 location = $4,
                 event_date = $5,
                 price = $6,
                 total_seats = $7,
                 available_seats = $8
             WHERE id = $9
             RETURNING *`,
            [title,description,category,location,event_date,price,total_seats,available_seats,id]
        );

        res.status(201).json(result.rows[0])

    } catch(err){
        console.error(err)
    }
})

router.delete('/:id', async(req,res)=>{
    try{

        const {id} = req.params;

        await pool.query(
            `Delete from events where id=$1`,[id]
        )
        res.status(200).json({message:"Deleted successfully"})

    } catch(err){
        console.error(err)
    }
})

export default router;