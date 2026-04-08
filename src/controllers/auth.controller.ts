import { type Request, type Response, type NextFunction } from "express";
import { AuthService } from "@/services/auth.service.js";
import { registerSchema, loginSchema } from "@/validations/auth.validations.js";
import { type ApiResponse } from "@/types/index.js";

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const data = registerSchema.parse(req.body);
      const user = await AuthService.register(data);

      const response: ApiResponse<typeof user> = {
        success: true,
        message: "User registered successfully",
        data: user,
      };

      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = loginSchema.parse(req.body);
      const result = await AuthService.login(data);

      const response: ApiResponse<typeof result> = {
        success: true,
        message: "Login successful",
        data: result,
      };

      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
}