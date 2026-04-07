import express from "express"
import cors from "cors"
import todoRoutes from "./routes/todo.route.js"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/todos", todoRoutes)

app.use((err:any,res:any,req:any,next:any)=> {
    res.status(400).json({
        message: err.message
    })
})

const port = 3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

