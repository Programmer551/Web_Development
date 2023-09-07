const express = require("express");
const app = express();
const port = 3000;
const { people } = require("./data");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
// app.get("/people", (req, res) => {
//   res.status(200).json({ data: people });
// });
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
app.post("/login", (req, res) => {
  // res.status(200).send("Form Submitted");
  const details = req.body;
  const { name } = details;
  const { phone } = details;
  const { Email } = details;
  const { text } = details;
  console.log(req.header);
  if (name && phone && Email && text) {
    res.status(200).send("Hello " + name);
  }

  res.status(401).send("Enter the complete form");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
