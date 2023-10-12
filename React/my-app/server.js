const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("sucess");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
