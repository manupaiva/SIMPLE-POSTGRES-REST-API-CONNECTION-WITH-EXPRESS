import { Router } from "express";
const router = Router();
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
  getProjectTasks,
} from "../controllers/projects.controller.js";

router
  .get("/projects", getProjects)
  .post("/projects", createProject)
  .put("/projects/:id", updateProject)
  .delete("/projects/:id", deleteProject)
  .get("/projects/:id", getProject)
  .get("/projects/:id/tasks", getProjectTasks);

export default router;
