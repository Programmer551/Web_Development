const express = require("express");
const route = express.Router();
const {
  home,
  create_task,
  get_task,
  update_task,
  delete_task,
} = require("../controllers/controllers");
route.get("/", home);
route.post("/", create_task);
route.get("/:id", get_task);
route.patch("/:id", update_task);
route.delete("/:id", delete_task);
module.exports = route;
