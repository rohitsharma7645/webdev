import userModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'


const registerUser = async(req,res)=>{
    const {username,email,password,role} = req.body

    const isUserExists = await userModel.findOne({
        $or:[{username}, {email}]
    })

    const hash = await bcrypt.hash(password,10)

    if(isUserExists){
        return res.status(409).json({
            message: 'User already exists'
        })
    }
    const newUser = await userModel.create({
        username, 
        email, 
        password: hash,
        role
    })

    const token = jwt.sign({
        id: newUser._id,
        role: newUser.role
    }, process.env.JWT_SECRET)

    res.status(201).json({
        message:"user registered successfully",
        newUser: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
        }
    })
}


const loginUser = async(req,res)=>{
    const {username, email, password} = req.body

    const user = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(!user){
        return res.status(401).json({message:'Invalid credentials'})
    }

    const isPasswordValid = await bcrypt.compare(password, newUser.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message: 'Incorrect password'
        })    
    }
    const token = jwt.sign({
        id: user._id,
        role: user.role,
    }, process.env.JWT_SECRET)
    res.cookie('token',token)

    res.status(200).json({
        message: "User logged in successfully",
        user:{
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    })
}

export default {registerUser,loginUser}