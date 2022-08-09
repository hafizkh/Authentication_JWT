import express from "express"
import userRoute from "./routes/userRouter.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get("/",(req, res)=>{
    res.status(201).json("Connection is Successful")
    
})
app.use(userRoute)

export default app