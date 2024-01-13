import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) =>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message: "You are not authenticated"})
    }
    jwt.verify(token,process.env.SECRET_TOKEN, async(err, data) =>{
        if(err){
            res.status(401).json({message: "Token is not valid"})
        }
        req.userID = data._id
        next()
    })
} 