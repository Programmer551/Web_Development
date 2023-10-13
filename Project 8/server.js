const express = require("express");
const app = express();
const router = require("./routes/routes");
const connectDB = require("./db/db");
const port = 5000;
require("dotenv").config();
app.use("/", express.static("public"));
app.use(express.json());
app.use("/", router);
try {
  connectDB(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log("Server is listening");
  });
} catch (error) {
  console.log("Error in the server");
}
