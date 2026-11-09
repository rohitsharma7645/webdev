import config from "dotenv";
import mongoose from "mongoose";

async function connectDB() {
    await mongoose.connect(config.MONGO_URI)
    console.log("MongoDB connected successfully");
}

export default connectDB;