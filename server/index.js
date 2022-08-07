import app from "./app.js"
import "dotenv/config"


// const PORT = 8080

app.listen(process.env.PORT, ()=>{
    console.log(`App is up and running on ${process.env.PORT}`);
})