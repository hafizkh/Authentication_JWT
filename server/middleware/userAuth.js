import jwt from "jsonwebtoken";
import userModel from "../models/userSchema.js";
import 'dotenv/config'

const secretKey = process.env.SECRET_KEY

const userAuth = async(req, res, next)=>{

    try {
        let tokenFromFrontEnd = req.headers.authorization
        const tokenVerification = jwt.verify(tokenFromFrontEnd,secretKey)
        const curUser = await userModel.findOne({_id:tokenVerification._id })

        if(!curUser){
            throw new Error("User does not find")
        }

        req.curUser = curUser
        req.tokenFromFrontEnd = tokenFromFrontEnd
        req.userId = curUser._id

        next()

    } catch (error) {
        res.status(401).json({status:401, message:"Unauthorized User"})
    }
}

export default userAuth