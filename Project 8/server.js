const express = require("express");
const app = express();
const router = require("./routes/routes");
const port = 3000;
app.use("/", express.static("public"));
app.use(express.json());
app.use("/", router);
app.listen(port);
