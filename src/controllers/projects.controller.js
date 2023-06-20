import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;
  try {
    const newProject = await Project.create({
      name,
      priority,
      description,
    });
    res.json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    const project = await Project.findByPk(id);
    project.name = name;
    project.priority = priority;
    project.description = description;
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await Project.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await Task.findAll({
      where: {
        projectId: id,
      },
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};
