const express = require("express");
const app = express();
const { verify } = require("jsonwebtoken");
const { isAuth } = require("./isAuth.js");
const cookieparser = require("cookie-parser");
const { hash, compare } = require("bcrypt");
const cors = require("cors");
app.use(cors());
app.use(cookieparser());
app.use(express.json());
const {
  CreateAccessToken,
  CreateRefershToken,
  sendRefershToken,
  sendAccessToken,
} = require("./tokens.js");
const { DB } = require("./DB.js");
require("dotenv").config();
app.post("/register", async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = DB.find((user) => user.name == name);
    if (user) {
      res.send("User already registered").status(404);
      return;
    }
    const hashed = password;
    DB.push({
      id: DB.length,
      name,
      password: hashed,
    });
    console.log(DB);
    res.send("User created");
  } catch (error) {
    res.send(error);
  }
});
app.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = DB.find((user) => user.name == name);
    if (!user) {
      res.send("User does not exists").status(404);
      return;
    }
    const valid = password;
    if (!valid) {
      res.send("Username or password is incorrect").status(404);
      return;
    }
    const access = CreateAccessToken(user.id);
    const refersh = CreateRefershToken(user.id);
    user.refershtoken = refersh;
    console.log(DB);
    sendRefershToken(res, access);

    sendAccessToken(res, refersh);
  } catch (error) {
    console.log("ERROR: " + error);
    res.json(error).status(404);
  }
});
app.post("/logut", (req, res) => {
  res.clearCookie("refershToken");
  return res.send("Logged out successfully");
});
app.post("/protected", async (req, res) => {
  try {
    // console.log(req);
    const userId = isAuth(req, res);

    if (userId !== null) {
      res.send({
        data: "This is protected data.",
      });
    }
  } catch (err) {
    res.send({
      error: `${err}`,
    });
  }
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
