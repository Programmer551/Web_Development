const products = require("../model/Schema");
const addItems = async (req, res) => {
  await products.create(req.body);
  let data = await products.find(req.body);
  res.json(data);
};
const getAllItems = async (req, res) => {
  let data = await products.find();
  res.json(data);
};
module.exports = { addItems, getAllItems };
