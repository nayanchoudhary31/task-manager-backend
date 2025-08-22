const app = require("./app.js");
const PORT = process.env.PORT || 3002;
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
