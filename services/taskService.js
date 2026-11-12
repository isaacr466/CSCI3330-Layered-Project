const db = [
  { id: "1", title: "Take a shower", status: "false" },
  { id: "2", title: "Get wingstop for dinner", status: "false" },
  { id: "3", title: "Work on the project for 3330", status: "true" },
];

export const findAllTasks = () => db;

export const addTask = (params) => {
  if (typeof params?.title !== "string" || !params.title.trim()) {
    const error = new Error("A task title is required.");
    error.status = 400;
    throw error;
  }

  const newTask = {
    id: String(Math.max(0, ...db.map((task) => Number(task.id))) + 1),
    title: params.title.trim(),
    status: "false",
  };
  db.push(newTask);
  return newTask;
};
