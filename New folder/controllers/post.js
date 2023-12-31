const products = require("../model/Schema");
const cart = require("../model/cart");
const addItems = async (req, res) => {
  try {
    await products.create(req.body);
    let data = await products.find(req.body);
    res.json(data);
  } catch (error) {
    console.log("Error with addItems:" + error);
  }
};
const addItemsInCart = async (req, res) => {
  try {
    let item = await products.find({ _id: req.body.id });
    item = item[0];
    await cart.create({
      name: item.name,
      price: item.price,
      detail: item.detail,
    });
    res.send({ sucess: true });
  } catch (error) {
    console.log(error);
    console.log("Error in add items in cart");
    res.send({ sucess: false, error: error }).status(404);
  }
};
module.exports = { addItems, addItemsInCart };
