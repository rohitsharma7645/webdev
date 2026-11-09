
import express from "express";
import "dotenv/config";

import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(helmet());

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Authentication routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Authentication server is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
