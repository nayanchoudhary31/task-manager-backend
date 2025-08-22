const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const bodyParser = require("body-parser");
const requestLogger = require("./middlewares/requestLogger");
const errorHanlder = require("./middlewares/errorHandler");
const app = express();

app.use(bodyParser.json());
app.use(requestLogger);

app.use("/api/", taskRoutes);

app.use(errorHanlder);

module.exports = app;
