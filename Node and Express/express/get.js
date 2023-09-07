const express = require("express");
const app = express();
const port = 3000;
const { people } = require("./data");

app.get("/people", (req, res) => {
  res.status(200).json({ data: people });
});
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
