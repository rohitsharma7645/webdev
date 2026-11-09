import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        unique: [true, "Name already exists"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    }
});

const userModel = mongoose.model("users", userSchema);
export default userModel;