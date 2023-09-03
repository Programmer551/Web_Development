const express = require("express");
const app = express();
const { data } = require(data);
app.get("/", (req, res) => {
  res.status(200).send(`<h1>Web Page</h1><a href="/api">API</a>`);
});
app.get("/api", (req, res) => {
  const data2 = data.map((data) => {
    const { Name, Class, Link } = data;
    return { Name, Class, Link };
  });
  res.json(data2);
});
app.get("/api/:dataClass", (req, res) => {
  // console.log(req.params)

  const { dataClass } = req.params;
  console.log(dataClass);

  var data3 = data.find((data) => data.Class === dataClass);
  if (!data3) {
    return res.status(404).send("Page not Found");
  }
  return res.status(200).json(data3);
});
// app.get("/api/2", (req, res) => {
//   const data3 = data.find((data) => data.Class==="Eight");
//   res.json(data3);
// });
app.get("*", (req, res) => {
  res.status(404).send("Page not Found");
});
app.listen(3000, () => {
  console.log("App is listening");
});
