import { type Request, type Response, type NextFunction } from "express"
import * as authService from "../services/auth.service.js"
import { registerSchema, loginSchema } from "../validations/auth.validations.js"

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = registerSchema.parse(req.body)
        const user = await authService.register(data.email, data.password)
        res.json(user)
    } catch (err) {
        next(err)
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = loginSchema.parse(req.body)
        const token = await authService.login(data.email, data.password)
        res.json({ token })
    } catch (err) {
        next(err)
    }
}