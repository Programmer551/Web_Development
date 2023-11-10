const products = require("../model/Schema");
const Users = require("../model/users");
const getAllItems = async (req, res) => {
  try {
    let data = await products.find();
    res.json(data);
  } catch (error) {
    res.json({ "Error with getAllItems:": error }).status(404);
  }
};
const GetSingleItem = async (req, res) => {
  try {
    const data = await products.find({ _id: req.body.id });
    res.send({ success: true, data: data });
  } catch (error) {
    res.json({ "Error with GetSingleItem:": error }).status(404);
  }
};
const getAllCartItems = async (req, res) => {
  try {
    const { user } = req.body;
    const person = await Users.findOne({
      name: user.name,
      password: user.password,
    });
    if (person) {
      const { id } = person;
      res.json(id);
    }
  } catch (error) {
    res.json({ "Error with getAllCartItems:": error }).status(404);
  }
};
const getAllPurchaseItems = async (req, res) => {
  try {
    const { user } = req.body;
    const person = await Users.findOne({
      name: user.name,
      password: user.password,
    });
    if (person) {
      const { Purchase } = person;
      res.json(Purchase);
    }
  } catch (error) {
    res.json({ "Error with getAllPurchaseItems:": error }).status(404);
  }
};

module.exports = {
  getAllItems,
  GetSingleItem,
  getAllCartItems,
  getAllPurchaseItems,
};
