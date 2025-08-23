const { NotFoundError, ValidationError } = require("../utils/errors");

class TaskModel {
  constructor() {
    this.tasks = [
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
    this.nextId = 3;
  }

  getAllTasks() {
    if (this.tasks.length === 0) {
      throw new NotFoundError("No Task Found!");
    }
    return this.tasks;
  }

  getTaskById(id) {
    const task = this.tasks.find((t) => t.id === parseInt(id));
    if (!task) {
      throw new NotFoundError("Task Not Found!");
    }

    return task;
  }

  createTask(taskName) {
    if (!taskName || taskName.trim().length === 0) {
      throw new ValidationError("Task name is required and cannot be empty");
    }
    const newTask = {
      id: this.nextId++,
      taskName: taskName.trim(),
      isCompleted: false,
    };

    this.tasks.push(newTask);

    return newTask;
  }

  updateTask(id, updateData) {
    // Find the task first
    const task = this.getTaskById(id);
    // Validate the input data
    if (updateData.taskName !== undefined) {
      if (updateData.taskName.trim().length === 0) {
        throw new ValidationError("Task name cannot be empty");
      }
      task.taskName = updateData.taskName.trim();
    }

    if (updateData.isCompleted !== undefined) {
      if (typeof updateData.isCompleted !== "boolean") {
        throw new ValidationError("isCompleted must be a boolean");
      }
      task.isCompleted = updateData.isCompleted;
    }

    return task;
  }

  deleteTask(id) {
    const task = this.getTaskById(id);
    this.tasks = this.tasks.filter((t) => t.id !== parseInt(id));
    return task;
  }
}

module.exports = new TaskModel();
