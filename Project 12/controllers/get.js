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
    const data = await products.find({ _id: req.body.id });
    res.send({ sucess: true, data: data });
  } catch (error) {
    console.log("Error with deleteSingleItem:" + error);
  }
};
module.exports = { getAllItems, GetSingleItem };
