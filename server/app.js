import express from "express"

const app = express()


app.get("/",(req, res)=>{
    res.status(201).json("Connection is Successfull")
    
})

export default app