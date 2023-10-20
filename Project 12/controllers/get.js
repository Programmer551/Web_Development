const products = require("../model/Schema");
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
    await products.GetOne({ _id: req.body.id });
    res.send({ sucess: true });
  } catch (error) {
    console.log("Error with deleteSingleItem:" + error);
  }
};
module.exports = { getAllItems, GetSingleItem };
