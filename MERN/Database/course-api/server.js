import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import courseRoutes from "./routes/courseRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
    res.json({
        message: "Server is working"
    });
});

app.use("/courses", courseRoutes);

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => {
    console.error("Server error:", error);
});

server.on("close", () => {
    console.log("Server closed");
});

pool.query("SELECT NOW()", (error) => {
    if (error) {
        console.error("Database connection failed:", error.message);
    } else {
        console.log("Connected to database");
    }
});