import { type Request, type Response, type NextFunction } from "express";
import { TodoService } from "@/services/todo.service.js";
import { todoSchema } from "@/validations/todo.validations.js";
import { type ApiResponse } from "@/types/index.js";
import { type UpdateTodoDTO } from "@/types/todo.types.js";

export class TodoController {
  static async getTodos(req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await TodoService.getTodos(req.user!.id, req.query);
      const response: ApiResponse<typeof todos> = {
        success: true,
        data: todos,
      };
      res.json(response);
    } catch (err) {
      next(err);
    }
  }

  static async createTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const data = todoSchema.parse(req.body);
      const todo = await TodoService.createTodo(req.user!.id, data);
      const response: ApiResponse<typeof todo> = {
        success: true,
        message: "Todo created successfully",
        data: todo,
      };
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async updateTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const data = todoSchema.partial().parse(req.body) as UpdateTodoDTO;
      const todo = await TodoService.updateTodo(id, req.user!.id, data);
      const response: ApiResponse<typeof todo> = {
        success: true,
        message: "Todo updated successfully",
        data: todo,
      };
      res.json(response);
    } catch (err) {
      next(err);
    }
  }

  static async deleteTodo(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await TodoService.deleteTodo(id, req.user!.id);
      const response: ApiResponse<null> = {
        success: true,
        message: "Todo deleted successfully",
      };
      res.json(response);
    } catch (err) {
      next(err);
    }
  }
}