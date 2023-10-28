const products = require("../model/Schema");
const deleteAllItems = async (req, res) => {
  try {
    await products.deleteMany({ __v: 0 });
    res.send({ sucess: true });
  } catch (error) {
    console.log("Error with deleteAllItems:" + error);
  }
};
const deleteSingleItem = async (req, res) => {
  try {
    await products.deleteOne({ _id: req.body.id });
    res.send({ sucess: true });
  } catch (error) {
    console.log("Error with deleteSingleItem:" + error);
  }
};
module.exports = { deleteAllItems, deleteSingleItem };
