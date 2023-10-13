const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./db/connect");
const router = require("./routes/router");
require("dotenv").config();
app.use(express.json());
app.use("/", router);
(function () {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
