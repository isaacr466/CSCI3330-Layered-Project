// Service layer: contains the application's task-related business logic.
import { getAllTasks } from "../source.js";

export function fetchTasks() {
  return getAllTasks();
}
