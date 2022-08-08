import app from "./app.js"
import "dotenv/config"
import mongoose from 'mongoose'


mongoose
    .connect(
        `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.lpq8g.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connection is Successful and App is Running on ${process.env.PORT}`);
        })
    })
    .catch((e) => {
        console.log("Error is ", e);
    })