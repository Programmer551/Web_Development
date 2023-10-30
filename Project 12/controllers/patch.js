const products = require("../model/Schema");
const cart = require("../model/cart");
const UpdateOneItem = async (req, res) => {
  const name = req.params;
  console.log(name.name);
  console.log(req.body.data);
  let data = await products.find({ _id: req.body.id });
  try {
    const data_to_send = {

      [req.params.name]: req.body.data,
    };
    console.log(data_to_send);
    await products.updateOne({ _id: req.body.id }, { data_to_send });
    data = await products.find({ _id: req.body.id });
    res.json({ sucess: true, data });
  } catch (error) {
    console.log("Error is UpdateOneItem" + error);
    res.send("Error is UpdateOneItem" + error);
  }
};
module.exports = { UpdateOneItem };
