import { type Request, type Response, type NextFunction } from "express"
import * as todoService from "../services/todo.service.js"

export const geAllTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const todos = await todoService.getTodos()
        res.json(todos)
    } catch (error) {
        next(error)

    }
}


export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { text } = req.body
        if (!text) {
            return res.json({
                message: "Text is required"
            })
        }
        const todo = await todoService.createTodo(text)
        res.json(todo)
    } catch (error) {
        next(error)
    }
}

export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const id = Number(req.params.id)

        const { text } = req.body

        const todo = await todoService.updateTodo(id, text)
        res.json(todo)

    } catch (error) {
        next(error)
    }
}


export const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id)
        await todoService.deleteTodo(id)
        res.json({ message: "Deleted" })
    } catch (err) {
        next(err)
    }
}