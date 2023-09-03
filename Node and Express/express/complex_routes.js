const express = require("express");
const app = express();
app.get("/api/:ID/:Name", (req, res) => {
  console.log(req.params);
  res.send("Hello");
});
app.listen(3000);
