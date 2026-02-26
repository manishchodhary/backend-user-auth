import express from "express"
const app = express()

app.use(express.json())

// route 
import route from "./routes/health.route.js"
app.use('/',route)

// error handler 
app.use((err,req,res,next)=>{
    res.status(500).json({
        success:false,
        message:"internal server error"|| err
    })
})

export default app