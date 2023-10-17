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
const getAllItems = async (req, res) => {
  try {
    let data = await products.find();
    res.json(data);
  } catch (error) {
    console.log("Error with getAllItems:" + error);
  }
};
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
    await products.deleteOne({_id:req.body.id});
    res.send({ sucess: true });
  } catch (error) {
    console.log("Error with deleteSingleItem:" + error);
  }
};
const GetSingleItem = async (req, res) => {
  try {
    await products.deleteOne({_id:req.body.id});
    res.send({ sucess: true });
  } catch (error) {
    console.log("Error with deleteSingleItem:" + error);
  }
};
module.exports = { addItems, getAllItems, deleteAllItems,deleteSingleItem,GetSingleItem};
