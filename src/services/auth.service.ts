import { prisma } from "@/lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "@/config/env.js";
import { AppError } from "@/utils/appError.js";
import { type RegisterDTO, type LoginDTO } from "@/types/auth.types.js";

export class AuthService {
  static async register(data: RegisterDTO) {
    const hashed = await bcrypt.hash(data.password, 10);

    return prisma.user.create({
      data: {
        email: data.email,
        password: hashed,
      },
      select: {
        id: true,
        email: true,
      },
    });
  }

  static async login(data: LoginDTO) {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return {
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    };
  }
}