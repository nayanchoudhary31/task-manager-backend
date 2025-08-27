const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const requestLogger = require("./middlewares/requestLogger");
const errorHanlder = require("./middlewares/errorHandler");
const app = express();

app.use(express.json());
app.use(requestLogger);

app.use("/api/", taskRoutes);

app.use(errorHanlder);

module.exports = app;
