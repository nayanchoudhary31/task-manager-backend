let tasks = [
  {
    id: 1,
    taskName: "Solve 2 Questions",
    isCompleted: false,
  },
  {
    id: 2,
    taskName: "Learn Backend Development",
    isCompleted: false,
  },
];
let nextId = 3;

const getTasks = (req, resp, next) => {
  try {
    if (tasks.length === 0) {
      return resp.status(404).json({ error: "No Task Found!" });
    }

    resp.status(200).json({ tasks: tasks });
  } catch (error) {
    next(error);
  }
};

const getTaskById = (req, resp, next) => {
  try {
    const taskId = req.taskId;
    const task = tasks.find((t) => t.id === parseInt(taskId));

    if (!task) {
      return resp.status(404).json({ error: "Task not found!" });
    }
    resp.status(200).json({ task: task });
  } catch (error) {
    next(error);
  }
};

const addTask = (req, resp, next) => {
  try {
    let { taskName } = req.body;
    const newTask = {
      id: nextId++,
      taskName: taskName.trim(),
      isCompleted: false,
    };
    tasks.push(newTask);

    resp.status(201).json({
      message: "Task Added Successfully!",
      task: newTask,
    });
  } catch (error) {
    next(error);
  }
};

const updateTask = (req, resp, next) => {
  try {
    const taskId = req.taskId;
    const { taskName, isCompleted } = req.body;
    const task = tasks.find((t) => t.id === parseInt(taskId));

    if (!task) {
      return resp.status(404).json({ error: "Task not found!" });
    }

    if (taskName !== undefined) {
      task.taskName = taskName.trim();
    }
    if (isCompleted !== undefined) {
      task.isCompleted = isCompleted;
    }

    resp.status(200).json({
      message: "Task Updated Successfully!",
      task: task,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = (req, resp, next) => {
  try {
    const taskId = req.taskId;
    const task = tasks.find((t) => t.id === parseInt(taskId));

    if (!task) {
      return resp.status(404).json({ error: "Task not found!" });
    }

    tasks = tasks.filter((t) => t.id !== parseInt(taskId));
    resp.status(200).json({ message: "Task Deleted Successfully!" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTasks, addTask, updateTask, deleteTask, getTaskById };
