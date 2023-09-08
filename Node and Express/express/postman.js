const express = require("express");
const app = express();
const port = 3000;
const data = require("./data");

app.get("/postman", (req, res) => {
  res
    .json({
      Name: "Duraid",
      Class: "Ninth",
    })
    .status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
