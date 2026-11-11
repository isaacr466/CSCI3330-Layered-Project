// Data source layer: sample task records used by the service layer.
const tasks = [
  { id: "1", title: "Take a shower", status: "pending" },
  { id: "2", title: "Get Wingstop for dinner", status: "pending" },
  { id: "3", title: "Work on the CSCI 3330 project", status: "completed" },
];

export function getAllTasks() {
  return tasks;
}
