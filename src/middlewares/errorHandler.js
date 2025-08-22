const errorHanlder = (err, req, resp, next) => {
  console.error("Error Occured", {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString(),
  });

  if (err.name === "Validation Error") {
    return resp.status(400).json({
      error: "Validation Error",
      message: err.message,
      details: err.details,
    });
  }

  if (err.name === "NotFoundError") {
    return resp.status(404).json({
      error: "Not Found",
      message: err.message,
    });
  }

  resp.status(500).json({
    error: "Internal Server Error",
    message: "Something went wrong from server!",
  });

  // next();
};

module.exports = errorHanlder;
