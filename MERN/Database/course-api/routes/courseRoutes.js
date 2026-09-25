import express from "express";
import pool from "../config/db.js";

const router = express.Router();



router.get("/", async (req, res) => {
    try {
        const {
            limit = 10,
            offset = 0,
            sort = "id"
        } = req.query;

        if (limit < 1 || offset < 0) {
            return res.status(400).json({
                message: "Invalid limit or offset"
            });
        }

        const allowedSort = ["id", "name", "duration"];

        if (!allowedSort.includes(sort)) {
            return res.status(400).json({
                message: "Invalid sort field"
            });
        }

        const result = await pool.query(
            `SELECT * FROM courses
             ORDER BY ${sort}
             LIMIT $1 OFFSET $2`,
            [limit, offset]
        );

        res.status(200).json(result.rows);

    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            message: "Database error"
        });
    }
});


// ===============================
// SEARCH COURSE
// GET /courses/search?name=node
// ===============================

router.get("/search", async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).json({
                message: "Search name is required"
            });
        }

        const result = await pool.query(
            `SELECT * FROM courses
             WHERE name ILIKE $1`,
            [`%${name}%`]
        );

        res.status(200).json(result.rows);

    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            message: "Database error"
        });
    }
});


// ===============================
// GET COURSE BY ID
// ===============================

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "SELECT * FROM courses WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.status(200).json(result.rows[0]);

    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            message: "Database error"
        });
    }
});


// ===============================
//         CREATE COURSE
// ===============================

router.post("/", async (req, res) => {
    try {
        const {
            name,
            description,
            instructor,
            duration
        } = req.body;

        if (!name || !instructor || !duration) {
            return res.status(400).json({
                message: "Name, instructor and duration are required"
            });
        }

        const result = await pool.query(
            `INSERT INTO courses
            (name, description, instructor, duration)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
            [
                name,
                description,
                instructor,
                duration
            ]
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            message: "Database error"
        });
    }
});


// ===============================
// UPDATE COURSE
// ===============================

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const {
            name,
            description,
            instructor,
            duration
        } = req.body;

        if (!name || !instructor || !duration) {
            return res.status(400).json({
                message: "Name, instructor and duration are required"
            });
        }

        const result = await pool.query(
            `UPDATE courses
             SET name = $1,
                 description = $2,
                 instructor = $3,
                 duration = $4
             WHERE id = $5
             RETURNING *`,
            [
                name,
                description,
                instructor,
                duration,
                id
            ]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.status(200).json(result.rows[0]);

    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            message: "Database error"
        });
    }
});


// ===============================
// DELETE COURSE
// ===============================

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM courses WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.status(200).json({
            message: "Course deleted successfully",
            course: result.rows[0]
        });

    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            message: "Database error"
        });
    }
});


export default router;