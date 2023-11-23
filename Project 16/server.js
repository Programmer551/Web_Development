const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/route");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use("/", router);

const run = () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
run();
