import userModel from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export async function register(req, res) {
        const { username, email, password } = req.body;

        const isUserExist = await userModel.findOne({ $or: [{ username }, { email }] });

        if (isUserExist) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            username,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign({ id: newUser._id }, config.JWT_SECRET, { expiresIn: '1d' });

        res.status(201).json({ message: "User registered successfully", token });
}

