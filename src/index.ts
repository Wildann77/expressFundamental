import express, {type Request,type Response} from "express"
import { todo } from "node:test"

const app = express()
app.use(express.json())


type Todo = {
    id : number,
    text : string,
    done: boolean
} 

let todos : Todo[] = []


app.get("/todos",(req:Request,res:Response) => {
    res.json(todos)
})

app.get("/todos",(req:Request,res:Response) => {
    res.json(todos)
})

app.post("/todo",(req:Request,res:Response) => {

    const {text} = req.body

    const newTodo : Todo = {
        id : Date.now(),
        text,
        done: false
    }

    todos.push(newTodo)
    res.json(newTodo)
})

app.put("/todo/:id", (req:Request,res:Response) => {

    const id = Number(req.params.id)
    const {text} = req.body
    todos = todos.map(todo => todo.id === id ? {...todo,text:text,done:!todo.done} : todo)

    res.json({message : "Todo updated"})
})

app.delete("/todo/:id",(req:Request,res:Response) => {
    const id = Number(req.params.id)

    todos = todos.filter(todo => 
        todo.id !== id
    )

    res.json({message : "Todo Deleted"})
})

const PORT = 3000   

