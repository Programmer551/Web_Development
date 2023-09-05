const express = require("express");
const app = express();
const looger = require("./logger");
// const looger = (req, res, next) => {
//   console.log("logger is running");
//   next();
// };
app.get("/", looger, (req, res) => {
  res.send("Home");
});

app.get("/about", looger, (req, res) => {
  res.send("About");
});
app.listen(3000, () => {
  console.log("App is running");
});
