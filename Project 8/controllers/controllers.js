const items = require("../models/Task");
const home = ("/", (req, res) => {});
const add =
  ("/add",
  async (req, res) => {
    try {
      console.log(req.body);
      await items.insertMany(req.body);
      res.json({ sucess: true });
      console.log("Post");
    } catch (error) {
      console.log(error);
      res.json({ sucess: false });
    }
  });
const reset =
  ("/reset",
  async (req, res) => {
    try {
      await items.deleteMany({ __v: 0 });
    } catch (error) {
      console.log(error);
    }

    res.json({ sucess: true });
  });
const get =
  ("/get",
  async (req, res) => {
    try {
      let data = await items.find();
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  });
module.exports = { home, get, add, reset };
