import { prisma } from "../lib/prisma.js"

export const getTodos = async (userId: number, query: any) => {
    const { page = 1, limit = 10, search = "" } = query

    return prisma.todo.findMany({
        where: {
            userId,
            text: { contains: search }
        },
        skip: (page - 1) * limit,
        take: Number(limit)
    })
}

export const createTodo = async (userId: number, text: string) => {
    return prisma.todo.create({
        data: { text, userId }
    })
}

export const updateTodo = async (id: number, userId: number, text?: string) => {
    const todo = await prisma.todo.findFirst({ where: { id, userId } })
    if (!todo) throw new Error("Not found")

    return prisma.todo.update({
        where: { id },
        data: {
            text: text || todo.text,
            done: !todo.done
        }
    })
}

export const deleteTodo = async (id: number, userId: number) => {
    return prisma.todo.delete({
        where: { id }
    })
}