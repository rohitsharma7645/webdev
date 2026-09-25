import express from "express";
import pool from "../config/db.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


// GET ALL PRODUCTS
router.get("/", authMiddleware, async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT *
             FROM products
             ORDER BY id DESC`
        );

        res.json(result.rows);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});


// CREATE PRODUCT
router.post("/",authMiddleware, async (req, res) => {
    try {
        const {
            title,
            price,
            category,
            stock,
            description
        } = req.body;

        if (!title || !price || !category || stock === undefined) {
            return res.status(400).json({
                message: "Required fields are missing"
            });
        }

        const result = await pool.query(
            `INSERT INTO products
             (title, price, category, stock, description)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [title, price, category, stock, description]
        );

        res.status(201).json({
            message: "Product created successfully",
            product: result.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

// GET ONE PRODUCT
router.get("/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            "SELECT * FROM products WHERE id = $1",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});


// UPDATE PRODUCT
router.put("/:id",authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        const {
            title,
            price,
            category,
            stock,
            description
        } = req.body;

        if (!title || !price || !category || stock === undefined) {
            return res.status(400).json({
                message: "Required fields are missing"
            });
        }

        const result = await pool.query(
            `UPDATE products
             SET title = $1,
                 price = $2,
                 category = $3,
                 stock = $4,
                 description = $5
             WHERE id = $6
             RETURNING *`,
            [title, price, category, stock, description, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json({
            message: "Product updated successfully",
            product: result.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});


// DELETE PRODUCT
router.delete("/:id",authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM products WHERE id = $1 RETURNING id",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json({
            message: "Product deleted successfully"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Product deleted successfully"
        });
    }
});


export default router;
