const express = require("express");
const {
  addTask,
  updateTask,
  deleteTask,
  getTasks,
  getTaskById,
} = require("../controllers/taskController");
const bodyParser = require("body-parser");
const {
  validateTaskId,
  validateInputTask,
  validateTaskUpdate,
} = require("../middlewares/validation");
const router = express.Router();

router.use(bodyParser.json());

router.get("/tasks", getTasks);

router.get("/tasks/:id", validateTaskId, getTaskById);

router.post("/tasks", validateInputTask, addTask);

router.put("/tasks/:id", validateTaskId, validateTaskUpdate, updateTask);

router.delete("/tasks/:id", validateTaskId, deleteTask);

module.exports = router;
