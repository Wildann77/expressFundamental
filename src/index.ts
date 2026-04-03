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
