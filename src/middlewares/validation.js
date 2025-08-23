const { ValidationError } = require("../utils/errors");

const validateInputTask = (req, resp, next) => {
  try {
    const { taskName } = req.body;

    // Check if the taskName is passed or not
    if (!taskName) {
      throw new ValidationError("Task name is required!");
    }

    // Check if the typeof taskName is string or not
    if (typeof taskName !== "string") {
      throw new ValidationError("Task name must be string");
    }

    // if name of the task is empty then throw error
    if (taskName.trim().length === 0) {
      throw new ValidationError("Task name cannot be empty");
    }

    next();
  } catch (error) {
    next(error);
  }
};

const validateTaskUpdate = (req, res, next) => {
  try {
    const { taskName, isCompleted } = req.body;

    // Allow partial updates, but validate what's provided
    if (taskName !== undefined) {
      if (typeof taskName !== "string") {
        throw new ValidationError("Task name must be a string!");
      }

      if (taskName.trim().length === 0) {
        throw new ValidationError("Task name cannot be empty!");
      }
    }

    if (isCompleted !== undefined && typeof isCompleted !== "boolean") {
      throw new ValidationError("isCompleted must be boolean");
    }

    next();
  } catch (error) {
    next(error);
  }
};

const validateTaskId = (req, resp, next) => {
  try {
    const taskId = parseInt(req.params.id);

    if (isNaN(taskId)) {
      throw new ValidationError("Task ID must be a valid number!");
    }

    if (taskId <= 0) {
      throw new ValidationError("Task ID must be a positive number!");
    }

    // Add the taskId to the req object
    req.taskId = taskId;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { validateInputTask, validateTaskUpdate, validateTaskId };
