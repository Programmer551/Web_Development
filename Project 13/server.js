const express = require("express");
const app = express();
const port = 8080;
// const cors = require("cors");
app.use(express.json());
// app.use(cors());

app.use(express.static("public"));
app.get("/", (req, res) => {
  console.log("hey");
  res.send("Hello");
});
app.post("/chat", (req, res) => {
  // console.log(req.body.value);
  var data = req.body.value;
  res.json({ value: data });
});
// app.post("/update", (req, res) => {});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
exp