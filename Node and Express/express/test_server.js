const express = require("express");
const app = express();
const port = 3000;
const route = require("./routes/routes.js");
const route2 = require("./routes/login.js");
app.use(express.static("public"));
app.use("/game", route);
app.use("/login", route2);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
