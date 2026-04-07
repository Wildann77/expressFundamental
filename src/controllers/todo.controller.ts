import { type Request, type Response, type NextFunction } from "express"
import * as todoService from "../services/todo.service.js"
import { todoSchema } from "../validations/todo.validations.js"

export const getTodos = async (req: any, res: Response, next: NextFunction) => {
    try {
        const todos = await todoService.getTodos(req.user.id, req.query)
        res.json(todos)
    } catch (err) {
        next(err)
    }
}

export const createTodo = async (req: any, res: Response, next: NextFunction) => {
    try {
        const data = todoSchema.parse(req.body)
        const todo = await todoService.createTodo(req.user.id, data.text)
        res.json(todo)
    } catch (err) {
        next(err)
    }
}

export const updateTodo = async (req: any, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id)
        const { text } = req.body
        const todo = await todoService.updateTodo(id, req.user.id, text)
        res.json(todo)
    } catch (err) {
        next(err)
    }
}

export const deleteTodo = async (req: any, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id)
        await todoService.deleteTodo(id, req.user.id)
        res.json({ message: "Deleted" })
    } catch (err) {
        next(err)
    }
}