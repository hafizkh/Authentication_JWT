import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

const secretKey = "Thisisanewsecretkeytoverifyuserr"

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Please Enter a valid Email")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 7

    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
})



// Hashing password for user's data

userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10)
    this.cpassword = await bcrypt.hash(this.cpassword, 10)

    next()
})

// This is token generation function

userSchema.methods.tokenGenerateAuth = async function () {
    try {
        let token = jwt.sign({_id:this._id}, secretKey,{
            expiresIn: "1d"
        })
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token

    } catch (error) {
        res.status(422).json(error)
    }
}

const userModel = new mongoose.model("users", userSchema)

export default userModel