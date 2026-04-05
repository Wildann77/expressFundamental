import {Router} from "express"
import * as todoController from "../controllers/todo.controller.js"

const router = Router()

router.get("/", todoController.geAllTodos)
router.post("/", todoController.createTodo)
router.put("/:id", todoController.updateTodo)
router.delete("/:id", todoController.deleteTodo)

export default router