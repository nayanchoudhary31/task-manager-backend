const requestLogger = (req, resp, next) => {
  // Get the current timestamp
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${req.method} ${req.path}`);

  // Log the requst body if request are POST/PUT
  if (req.method === "POST" || req.method === "PUT") {
    console.log(`Request Body: ${req.body.taskName}`);
  }

  // Log query parameters if any
  if (Object.keys(req.query).length > 0) {
    console.log(`Query Params:`, req.query);
  }

  // Continue to next middleware
  next();
};

module.exports = requestLogger;
