import express from "express";
import cors from "cors";
import { env } from "@/config/env.js";
import { errorMiddleware } from "@/middlewares/error.middleware.js";
import authRoutes from "@/routes/auth.route.js";
import todoRoutes from "@/routes/todo.route.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

// Error Handling
app.use(errorMiddleware);

app.listen(env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${env.PORT} [${env.NODE_ENV}]`);
});

