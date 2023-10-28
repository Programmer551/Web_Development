const products = require("../model/Schema");
const cart = require("../model/cart");
const UpdateOneItem = async (req, res) => {
  try {
    await products.findOneAndUpdate({ _id: req.body.id }, {});
  } catch (error) {}
};
module.exports = { UpdateOneItem };
