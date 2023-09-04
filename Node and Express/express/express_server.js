const express = require("express");
const app = express();
const path = require("path");

const a = app.use(express.static("./public"));
// console.log(a);

// app.get("/",(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,"./public/index.html"))
//     // res.status(200).send(a)
// })
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});
app.listen(3000, (req, res) => {
  console.log("App is listening on port 3000");
});
