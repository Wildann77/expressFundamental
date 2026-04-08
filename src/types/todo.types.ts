import { z } from "zod";
import { todoSchema } from "@/validations/todo.validations.js";

export type TodoDTO = z.infer<typeof todoSchema>;
export type UpdateTodoDTO = Partial<TodoDTO>;

export interface TodoFilterQuery {
  page?: string;
  limit?: string;
  search?: string;
}

export interface TodoResponse {
  id: number;
  text: string;
  done: boolean;
  userId: number;
}
