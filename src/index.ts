import express, { type Request, type Response } from "express"

const app = express()
app.use(express.json())

type Todo = {
    id: number,
    text: string,
    done: boolean
}

let todos: Todo[] = []

// GET: Semua todo
app.get("/todos", (req: Request, res: Response) => {
    res.json(todos)
})

// POST: Tambah todo
app.post("/todo", (req: Request, res: Response) => {
    const { text } = req.body

    if (!text) {
        return res.status(400).json({ error: "Property 'text' is required" })
    }

    const newTodo: Todo = {
        id: Date.now(),
        text: text,
        done: false
    }

    todos.push(newTodo)
    res.json(newTodo)
})

// PUT: Update status atau teks
app.put("/todo/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const { text } = req.body

    todos = todos.map(todo => 
        todo.id === id 
            ? { ...todo, text: text || todo.text, done: !todo.done } 
            : todo
    )

    res.json({ message: "Todo updated" })
})

// DELETE: Hapus todo
app.delete("/todo/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    todos = todos.filter(todo => todo.id !== id)
    res.json({ message: "Todo Deleted" })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`)
})