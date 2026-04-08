import { Router } from "express";
import { TodoController } from "@/controllers/todo.controller.js";
import { authMiddleware } from "@/middlewares/auth.middleware.js";

const router = Router();

router.use(authMiddleware);

router.get("/", TodoController.getTodos);
router.post("/", TodoController.createTodo);
router.put("/:id", TodoController.updateTodo);
router.delete("/:id", TodoController.deleteTodo);

export default router;