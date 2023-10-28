const products = require("../model/Schema");
const cart = require("../model/cart");
const deleteAllItems = async (req, res) => {
  try {
    await products.deleteMany({ __v: 0 });
    res.send({ success: true });
  } catch (error) {
    console.log("Error with deleteAllItems:" + error);
  }
};
const deleteAllCart = async (req, res) => {
  try {
    await cart.deleteMany({ __v: 0 });
    res.send({ success: true });
  } catch (error) {
    console.log("Error with deleteAllCart:" + error);
  }
};
const deleteSingleItem = async (req, res) => {
  try {
    await products.deleteOne({ _id: req.body.id });
    res.send({ success: true });
  } catch (error) {
    console.log("Error with deleteSingleItem:" + error);
  }
};
const deleteSingleCart = async (req, res) => {
  try {
    await cart.deleteOne({ _id: req.body.id });
    res.send({ success: true });
  } catch (error) {
    console.log("Error with deleteSingleCart:" + error);
  }
};
module.exports = {
  deleteAllItems,
  deleteSingleItem,
  deleteSingleCart,
  deleteAllCart,
};
