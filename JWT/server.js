const express = require("express");
const app = express();
const port = 5000;
const jwt = require("jsonwebtoken");
app.use(express.json());
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/", (req, res) => {
  const username = req.body.username;
  const user = {
    name: username,
  };
  const access_Token = jwt.sign(user, process.env.TOKEN);
  res.json({ access_Token: access_Token });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
