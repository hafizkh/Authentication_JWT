import express from "express"

const app = express()


app.get("/",(req, res)=>{
    res.status(201).json("server")
    
})

export default app