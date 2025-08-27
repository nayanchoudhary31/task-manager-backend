const { NotFoundError, ValidationError } = require("../utils/errors");
const prisma = require("../db/prisma");
class TaskModel {
  validateId(id) {
    const n = Number(id);
    if (!Number.isInteger(n) || n <= 0) {
      throw new ValidationError("Invalid Task Id");
    }
    return n;
  }
  async getAllTasks() {
    const allTasks = await prisma.task.findMany({ orderBy: { id: "asc" } });
    return allTasks;
  }

  async getTaskById(id) {
    const validId = this.validateId(id);
    const task = await prisma.task.findUnique({ where: { id: validId } });
    if (!task) {
      throw new NotFoundError("Task Not Found!");
    }
    return task;
  }

  async createTask(taskName) {
    if (!taskName || taskName.trim().length === 0) {
      throw new ValidationError("Task name is required and cannot be empty");
    }
    const newTask = await prisma.task.create({ data: { taskName: taskName } });
    return newTask;
  }

  async updateTask(id, updateData) {
    // Validate the id
    const validId = this.validateId(id);
    // Find the task first
    await this.getTaskById(validId);

    // Check if hasAnyField
    const hasAnyField =
      updateData &&
      (Object.prototype.hasOwnProperty.call(updateData, "taskName") ||
        Object.prototype.hasOwnProperty.call(updateData, "isCompleted"));

    if (!hasAnyField) {
      throw new ValidationError("No fields provided to update");
    }
    // Validate the input data
    if (updateData.taskName !== undefined) {
      if (updateData.taskName.trim().length === 0) {
        throw new ValidationError("Task name cannot be empty");
      }
      updateData.taskName = updateData.taskName.trim();
    }

    if (updateData.isCompleted !== undefined) {
      if (typeof updateData.isCompleted !== "boolean") {
        throw new ValidationError("isCompleted must be a boolean");
      }
    }

    const updatedTask = await prisma.task.update({
      where: { id: id },
      data: {
        taskName: updateData.taskName,
        isCompleted: updateData.isCompleted,
      },
    });

    return updatedTask;
  }

  async deleteTask(id) {
    const validId = this.validateId(id);
    await this.getTaskById(validId);
    const deletedTask = await prisma.task.delete({ where: { id: validId } });
    return deletedTask;
  }
}

module.exports = new TaskModel();
