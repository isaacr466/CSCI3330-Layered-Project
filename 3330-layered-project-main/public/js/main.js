const taskList = document.querySelector("#task-list");
const statusMessage = document.querySelector("#status");
const refreshButton = document.querySelector("#refresh-button");

async function loadTasks() {
  statusMessage.textContent = "Loading tasks...";
  taskList.replaceChildren();

  try {
    const response = await fetch("/api/tasks");
    if (!response.ok) throw new Error(`Request failed (${response.status})`);

    const result = await response.json();
    const tasks = result.data ?? [];

    if (tasks.length === 0) {
      statusMessage.textContent = "No tasks were found.";
      return;
    }

    statusMessage.textContent = `${tasks.length} task(s) loaded successfully.`;
    for (const task of tasks) {
      const item = document.createElement("li");
      const title = document.createElement("span");
      const taskStatus = document.createElement("span");
      title.className = "task-title";
      title.textContent = task.title ?? "Untitled task";
      taskStatus.className = "task-status";
      taskStatus.textContent = `Status: ${task.status ?? (task.completed ? "completed" : "pending")}`;
      item.append(title, taskStatus);
      taskList.append(item);
    }
  } catch (error) {
    statusMessage.textContent = `Could not load tasks: ${error.message}`;
  }
}

refreshButton.addEventListener("click", loadTasks);
loadTasks();
