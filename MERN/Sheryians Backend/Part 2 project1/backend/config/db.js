import mongoose from "mongoose";

const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://yt_backend:KCasaupXYhUsVoBp@backend1.55d4eol.mongodb.net/project-1')

    console.log('Connected to db')
}

export default connectDB