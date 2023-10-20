const products = require("../model/Schema");
const addItems = async (req, res) => {
  try {
    await products.create(req.body);
    let data = await products.find(req.body);
    res.json(data);
  } catch (error) {
    console.log("Error with addItems:" + error);
  }
};
module.exports = { addItems };
