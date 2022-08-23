import express from "express"
import User from "../models/userSchema"
import bcrypt from 'bcryptjs'

// To register new user
const registerNew = async (req, res) => {
    const { fname, lname, email, password, cpassword } = req.body

    if (!fname || !lname || !email || !password || !cpassword) {
        res.status(422).json({ error: "Please fill all fields" })
    }
    try {
        const newUser = await User.findOne({ email: email })

        if (newUser) {
            res.status(422).json({ error: "Email already exists in database" })
        }
        else if (password !== cpassword) {
            res.status(422).json({ error: "Password does not match" })
        }
        else {
            const finalUser = new User({
                fname, lname, email, password, cpassword
            })

            const saveData = await finalUser.save()
            res.status(201).json({ status: 201, saveData })

            // console.log("This is data" ,saveData);
        }
    } catch (error) {
        res.status(422).json(error)
        console.log("Catch Block Error");


    }
}

// To get user
const singleUser = async(req, res)=>{
    // console.log("User Authenticate completed")
    try {
        const checkUserValidity = await User.findOne({_id:req.userId})
        res.status(201).json({checkUserValidity})
    } catch (error) {
        res.status(401).json({message: error})        
    }

}
// To login user
const loginUser = async (req, res) => {
    // console.log("Request.body", req.body);
    const { email, password } = req.body

    if (!email || !password) {
        res.status(422).json({ error: "Please fill all fields" })
    }
    try {
        const userVarify = await User.findOne({ email: email })
        if (userVarify) {
            const isMatch = await bcrypt.compare(password, userVarify.password)
            if (!isMatch) {
                res.status(422).json({ error: "Invalid Credentials" })
            } else {
                // This function is for token generation which would be defined in userSchema
                const token = await userVarify.tokenGenerateAuth()
                // console.log(token)
                // Generating the cookie
                res.cookie("usercookie",token,{
                    expires: new Date(Date.now()+900000),
                    httpOnly:true
                    
                })
                const result = {
                    userVarify,
                    token
                }
                res.status(201).json({status:201, result})
            }
        }
    } catch (error) {
        res.status(401).json({message: error})
    }
}

export default {
    loginUser,
    registerNew,
    singleUser
}