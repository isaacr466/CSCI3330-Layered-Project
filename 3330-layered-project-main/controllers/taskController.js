// Controller layer: handles the HTTP request and response.
import { fetchTasks } from "../services/taskService.js";

export function getTasks(req, res, next) {
  try {
    const tasks = fetchTasks();
    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
}
