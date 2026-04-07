import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import todoRoutes from "./routes/todo.route.js"

dotenv.config()

const app = express()
app.use(express.json())

app.use("/auth", authRoutes)
app.use("/todos", todoRoutes)

app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
    const message = err instanceof Error ? err.message : "Internal server error"
    res.status(500).json({ message })
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})