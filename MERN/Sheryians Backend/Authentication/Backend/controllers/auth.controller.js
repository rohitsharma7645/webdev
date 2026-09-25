import userModel from "../model/user.model.js";
import jwt from 'jsonwebtoken';

const registerUser = async(req,res)=>{
    const {username,email,password} = req.body;

    const isUserExists = await userModel.findOne({email});

    if(isUserExists){
        return res.status(409).json({
            message:"User already exists"
        })
    }

    const user = await userModel.create({
        username, email, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie('token',token)

    res.status(201).json({
        message: 'User registered successfully',
        user,
        // token
    })
}



export default {registerUser}