const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const connectDB = require("./db/connect");
const router = require("./routes/router");
const cors = require("cors");

app.use(express.json());
// app.use(cors());
app.use(express.static("./public/dist"));
app.use("/", router);
app.get("*", (req, res) => {
  res.send("Not Found").status(404);
});
app.delete("*", (req, res) => {
  res.send("Not Found").status(404);
});
app.post("*", (req, res) => {
  res.send("Not Found").status(404);
});

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
