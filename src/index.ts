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

