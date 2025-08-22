const validateInputTask = (req, resp, next) => {
  const { taskName } = req.body;

  // Check if the taskName is passed or not
  if (!taskName) {
    return resp.status(400).json({
      error: "Validation Error",
      message: "task name is required!",
    });
  }

  // Check if the typeof taskName is string or not
  if (typeof taskName !== "string") {
    return resp.status(400).json({
      error: "Validation Error",
      message: "taskName must be string",
    });
  }

  // if name of the task is empty then throw error
  if (taskName.trim().length === 0) {
    return resp.status(400).json({
      error: "Validation Error",
      message: "taskName can not be empty",
    });
  }

  next();
};

const validateTaskUpdate = (req, res, next) => {
  const { taskName, isCompleted } = req.body;

  // Allow partial updates, but validate what's provided
  if (taskName !== undefined) {
    if (typeof taskName !== "string") {
      return res.status(400).json({
        error: "Validation Error",
        message: "taskName must be a string",
      });
    }

    if (taskName.trim().length === 0) {
      return res.status(400).json({
        error: "Validation Error",
        message: "taskName cannot be empty",
      });
    }
  }

  if (isCompleted !== undefined && typeof isCompleted !== "boolean") {
    return res.status(400).json({
      error: "Validation Error",
      message: "isCompleted must be a boolean",
    });
  }

  next();
};

const validateTaskId = (req, resp, next) => {
  const taskId = parseInt(req.params.id);

  if (isNaN(taskId)) {
    return resp.status(400).json({
      error: "Validation Error",
      message: "Task Id must be a valid number",
    });
  }

  if (taskId <= 0) {
    return resp.status(400).json({
      error: "Validation Error",
      message: "TaskId must be positive number",
    });
  }

  // Add the taskId to the req object
  req.taskId = taskId;

  next();
};

module.exports = { validateInputTask, validateTaskUpdate, validateTaskId };
