const Task = require("../models/Task");
const home = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
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
const get_task = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    console.log(task);
    if (!task) {
      return res.status(404).json({ sucess: false });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send(error);
  }
};
const update_task = (req, res) => {
  res.send("update Task");
};
const delete_task = (req, res) => {
  res.send("delete Task");
};
module.exports = { home, create_task, get_task, update_task, delete_task };
