const taskModel = require("../models/taskModel");

const getTasks = async (req, resp, next) => {
  try {
    const tasks = await taskModel.getAllTasks();
    resp.status(200).json({ tasks: tasks });
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, resp, next) => {
  try {
    const taskId = req.taskId;
    const task = await taskModel.getTaskById(taskId);
    resp.status(200).json({ task: task });
  } catch (error) {
    next(error);
  }
};

const addTask = async (req, resp, next) => {
  try {
    let { taskName } = req.body;
    const newTask = await taskModel.createTask(taskName);

    resp.status(201).json({
      message: "Task Added Successfully!",
      task: newTask,
    });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, resp, next) => {
  try {
    const taskId = req.taskId;
    const { taskName, isCompleted } = req.body;
    const updatedTask = await taskModel.updateTask(taskId, {
      taskName,
      isCompleted,
    });
    resp.status(200).json({
      message: "Task Updated Successfully!",
      task: updatedTask,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, resp, next) => {
  try {
    const taskId = req.taskId;
    const task = await taskModel.deleteTask(taskId);
    resp
      .status(200)
      .json({ message: "Task Deleted Successfully!", task: task });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTasks, addTask, updateTask, deleteTask, getTaskById };
