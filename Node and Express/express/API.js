const express = require("express");
const app = express();
const data = [
  {
    Name: "Duraid",
    Class: "Ninth",
  },
  {
    Name: `Shahmeer`,
    Class: "Eight",
  },
];
app.get("/", (req, res) => {
  res.status(200).json(data);
});
app.listen(5000, () => {
  console.log("App is working");
});
