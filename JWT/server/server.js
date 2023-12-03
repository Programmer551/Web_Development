require("dotenv").config();
const express = require("express");
const app = express();
const { verify } = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const { hash, compare } = require("bcrypt");
const cors = require("cors");
app.use(cors());
app.use(cookieparser());
app.use(express.json());
const { CreateAccessToken, CreateRefershToken } = require("./tokens.js");
const { DB } = require("./DB.js");
app.post("/register", async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = DB.find((user) => user.name == name);
    if (user) {
      res.send("User already registered").status(404);
      return;
    }
    const hashed = await hash(password, 10);
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
    const valid = compare(password, user.password);
    if (!valid) {
      res.send("Username or password is incorrect").status(404);
      return;
    }
    const access = CreateAccessToken(user.id);
    const refersh = CreateRefershToken(user.id);
    user.refershtoken = refersh;
    console.log(DB);
  } catch (error) {}
});
app.listen(5000, () => {
  console.log("Server is running on http://localhost:3000");
});
