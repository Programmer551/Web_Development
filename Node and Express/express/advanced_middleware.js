const express = require("express");
const app = express();
const looger = require("./logger");
const looger2 = require("./looger2");
const author=require("./authorized")
app.use("/home", looger);
app.use("/about", looger2);
app.use(author)
app.get("/home", (req, res) => {
  res.send("Home page");
});
app.get("/home", (req, res) => {
  res.send("Super home  page");
});
app.get("/home/api", (req, res) => {
  res.send("Super api  page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(3000, () => {
  console.log("App is running");
});
