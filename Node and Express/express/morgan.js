const morgan = require("morgan");
const express = require("express");
const app = express();
const port = 3000;
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Hello World!").status(200).sendStatus(200);
  console.log(res.statusCode);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
