const products = require("../model/Schema");
const cart = require("../model/cart");
const getAllItems = async (req, res) => {
  try {
    let data = await products.find();
    res.json(data);
  } catch (error) {
    console.log("Error with getAllItems:" + error);
  }
};
const GetSingleItem = async (req, res) => {
  try {
    const data = await products.find({ _id: req.body.id });
    res.send({ success: true, data: data });
  } catch (error) {
    console.log("Error with deleteSingleItem:" + error);
  }
};
const getAllCartItems = async (req, res) => {
  try {
    let data = await cart.find();
    res.json(data);
  } catch (error) {
    console.log("Error with getAllCartItems:" + error);
  }
};
const getSingleCartItem = async (req, res) => {
  try {
    console.log(req.body);
    let data = await cart.findOne({ _id: req.body.id });
    res.json(data);
  } catch (error) {
    console.log("Error with getAllSingleCart:" + error);
  }
};
module.exports = {
  getAllItems,
  GetSingleItem,
  getAllCartItems,
  getSingleCartItem,
};
