const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000;
const helmet = require("helmet");
const connectDB = require("./db/connect");
const router = require("./routes/router");
const cors = require("cors");
const { error } = require("./middlewares/error");
app.use(helmet());
app.use(express.json());
app.use(cors());

app.use("/", router);
app.use(error);
const run = () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
run();
