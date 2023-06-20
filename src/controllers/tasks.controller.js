import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;
  try {
    const newTask = await Task.create({
      name,
      done,
      projectId,
    });
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, done, projectId } = req.body;

  try {
    const task = await Task.findByPk(id);
    task.name = name;
    task.done = done;
    task.projectId = projectId;
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
