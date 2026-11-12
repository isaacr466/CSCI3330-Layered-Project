import { findAllTasks, addTask } from "../services/taskService.js";

export const getTasks = (req, res, next) => {
  try {
    res.status(200).json({ success: true, data: findAllTasks() });
  } catch (error) {
    next(error);
  }
};

export const createTask = (req, res, next) => {
  try {
    const newTask = addTask(req.body);
    res.status(201).json({ success: true, data: newTask });
  } catch (error) {
    next(error);
  }
};
