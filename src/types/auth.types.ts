import { z } from "zod";
import { registerSchema, loginSchema } from "@/validations/auth.validations.js";

export type RegisterDTO = z.infer<typeof registerSchema>;
export type LoginDTO = z.infer<typeof loginSchema>;

export interface AuthResponse {
  user: {
    id: number;
    email: string;
  };
  token: string;
}
