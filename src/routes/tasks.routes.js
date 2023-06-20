import { Router } from "express";
const router = Router();
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} from "../controllers/tasks.controller.js";

router
  .get("/tasks", getTasks)
  .post("/tasks", createTask)
  .put("/tasks/:id", updateTask)
  .delete("/tasks/:id", deleteTask)
  .get("/tasks/:id", getTask);

export default router;
