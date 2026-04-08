import { prisma } from "@/lib/prisma.js";
import { AppError } from "@/utils/appError.js";
import { type TodoDTO, type TodoFilterQuery } from "@/types/todo.types.js";

export class TodoService {
  static async getTodos(userId: number, query: TodoFilterQuery) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const search = query.search || "";

    return prisma.todo.findMany({
      where: {
        userId,
        text: { contains: search },
      },
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  static async createTodo(userId: number, data: TodoDTO) {
    return prisma.todo.create({
      data: {
        text: data.text,
        userId,
      },
    });
  }

  static async updateTodo(id: number, userId: number, data: Partial<TodoDTO>) {
    const todo = await prisma.todo.findFirst({
      where: { id, userId },
    });

    if (!todo) {
      throw new AppError("Todo not found", 404);
    }

    return prisma.todo.update({
      where: { id },
      data: {
        text: data.text ?? todo.text,
        done: data.done ?? todo.done,
      },
    });
  }

  static async deleteTodo(id: number, userId: number) {
    const todo = await prisma.todo.findFirst({
      where: { id, userId },
    });

    if (!todo) {
      throw new AppError("Todo not found", 404);
    }

    return prisma.todo.delete({
      where: { id },
    });
  }
}