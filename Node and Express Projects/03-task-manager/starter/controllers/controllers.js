const Task = require("../models/Task");
const home = (req, res) => {
  res.send("Home Page is here");
};
const create_task = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }

  console.log("Task is created");
};
const get_task = (req, res) => {
  res.json({ id: req.params.id });
};
const update_task = (req, res) => {
  res.send("update Task");
};
const delete_task = (req, res) => {
  res.send("delete Task");
};
module.exports = { home, create_task, get_task, update_task, delete_task };
