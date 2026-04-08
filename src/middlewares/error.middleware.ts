import { type Request, type Response, type NextFunction } from "express";
import { ZodError } from "zod";
import { AppError } from "@/utils/appError.js";
import { type ErrorResponse } from "@/types/index.js";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Internal Server Error";
  let errors: any = undefined;

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof ZodError) {
    statusCode = 400;
    message = "Validation Error";
    errors = err.flatten().fieldErrors;
  } else if (err instanceof Error) {
    message = err.message;
  }

  const response: ErrorResponse = {
    success: false,
    message,
    ...(errors && { errors }),
  };

  res.status(statusCode).json(response);
};
