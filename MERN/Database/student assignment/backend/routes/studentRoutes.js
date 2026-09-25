import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// GET all students
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM students"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching students:", error);

    res.status(500).json({
      message: "Internal server error"
    });
  }
});


// POST - Create a student
router.post("/", async (req, res) => {
  try {
    const { name, email, course, age } = req.body; // CHANGED

    if (!name || !email || !course || age === undefined) {
      return res.status(400).json({
        message: "name, email, course and age are required"
      });
    }

    const result = await pool.query(
      `INSERT INTO students (name, email, course, age)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, email, course, age]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating student:", error);

    if (error.code === "23505") {
      return res.status(409).json({
        message: "Email already exists"
      });
    }

    res.status(500).json({
      message: "Internal server error"
    });
  }
});


// GET one student
router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "Invalid student ID"
      });
    }

    const result = await pool.query(
      "SELECT * FROM students WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching student:", error);

    res.status(500).json({
      message: "Internal server error"
    });
  }
});


// PUT - Update a student
router.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const { name, email, course, age } = req.body || {}; // CHANGED

    console.log("PUT request body:", req.body); // CHANGED

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "Invalid student ID"
      });
    }

    if (!name || !email || !course || age === undefined) {
      return res.status(400).json({
        message: "name, email, course and age are required"
      });
    }

    const result = await pool.query(
      `UPDATE students
       SET name = $1,
           email = $2,
           course = $3,
           age = $4
       WHERE id = $5
       RETURNING *`,
      [name, email, course, age, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error updating student:", error);

    if (error.code === "23505") {
      return res.status(409).json({
        message: "Email already exists"
      });
    }

    res.status(500).json({
      message: "Internal server error"
    });
  }
});


// DELETE - Delete a student
router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "Invalid student ID"
      });
    }

    const result = await pool.query(
      `DELETE FROM students
       WHERE id = $1
       RETURNING *`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      message: "Student deleted successfully",
      student: result.rows[0]
    });
  } catch (error) {
    console.error("Error deleting student:", error);

    res.status(500).json({
      message: "Internal server error"
    });
  }
});


export default router;