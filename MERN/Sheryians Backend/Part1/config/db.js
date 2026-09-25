import mongoose, { mongo }  from "mongoose";

const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://sheryiansh_db:Rohit654@cluster0.s63s8ll.mongodb.net/halley')
    console.log('connected to DB')
}

export default connectDB