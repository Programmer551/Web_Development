// const express = require("express");
// const router = express.Router();

const minecraft = (req, res) => {
  res.send("Hello minecraft");
};
const RDR = (req, res) => {
  res.send("Hello RDR");
};
const Granny = (req, res) => {
  res.send("Hello Granny!");
};
module.exports = {
  minecraft,
  RDR,
  Granny,
};
