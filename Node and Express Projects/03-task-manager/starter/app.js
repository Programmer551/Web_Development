const express = require("express");
const app = express();
const port = 5000;
const connectDB = require("./db/connect");
const route = require("./routes/router");
require("dotenv").config();
app.use(express.json());
app.use("/api/v1/tasks", route);
const start = () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
