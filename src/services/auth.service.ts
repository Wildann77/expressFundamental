import { prisma } from "../lib/prisma.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (email: string, password: string) => {
    const hashed = await bcrypt.hash(password, 10)

    return prisma.user.create({
        data: { email, password: hashed }
    })
}

export const login = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) throw new Error("User not found")

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new Error("Wrong password")

    const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET!,
        { expiresIn: "1d" }
    )

    return token
}