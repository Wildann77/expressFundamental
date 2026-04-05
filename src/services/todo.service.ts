import { prisma } from "../lib/prisma.js"


export const getTodos = async () => {
    return prisma.todo.findMany()
}


export const createTodo = async (text: string) => {
    return prisma.todo.create({
        data: { text }
    })
}

export const updateTodo = async (id: number, text: string) => {
    const todo = await prisma.todo.findUnique({ where: { id } })
    if (!todo) {
        throw new Error("Todo not found")
    }

    return prisma.todo.update({
        where: { id },
        data: {
            text: text || todo.text,
            done: !todo.done
        }
    })

}
export const deleteTodo = async (id: number) => {
    return prisma.todo.delete({
        where: { id }
    })
}