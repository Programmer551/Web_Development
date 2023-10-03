const express = require("express");
const app = express();
const port = 5000;
const route = require("./routes/router");
app.use(express.json());
app.use("/api/v1/tasks", route);
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
