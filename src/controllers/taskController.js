let tasks = []; // Temporary in-memory storage

// Get All Tasks
export const getTasks = (req, res) => {
  res.json({ tasks });
};

// Create Task
export const createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);

  res.status(201).json({ message: "Task created", task: newTask });
};

// Update Task
export const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const task = tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = title || task.title;
  task.description = description || task.description;

  res.json({ message: "Task updated", task });
};

// Delete Task
export const deleteTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((t) => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);
  res.json({ message: "Task deleted" });
};
