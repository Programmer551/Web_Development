const express = require("express");
const app = express();
const port = 3000;
const route = require("./testing2.js");
const route2 = require("./testing4.js");
app.use(express.static("public"));
app.use("/game", route);
app.use("/login", route2);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
