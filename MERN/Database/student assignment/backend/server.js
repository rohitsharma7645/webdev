import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;


app.use("/students", studentRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Student Management API is running"
  });
});

const startServer = async () => {
  try {
    await pool.query("SELECT 1");

    console.log("Connected to database");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

startServer();