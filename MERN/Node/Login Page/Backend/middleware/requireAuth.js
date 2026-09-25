import jwt from 'jsonwebtoken';

export function requireAuth(req,res,next){
    const authHeader = req.header.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({meassage:'Authorization header missing or invalid'})
    }

    const token = authHeader.split(' ')[1];

    try{
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next()
    } catch(error){
        return res.status(401).json({message:"Invalid or expired token"})
    }
}


// from frontend
