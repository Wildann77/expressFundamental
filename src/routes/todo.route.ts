import { Router } from "express"
import * as todoController from "../controllers/todo.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const router = Router()

router.use(authMiddleware)

router.get("/", todoController.getTodos)
router.post("/", todoController.createTodo)
router.put("/:id", todoController.updateTodo)
router.delete("/:id", todoController.deleteTodo)

export default router