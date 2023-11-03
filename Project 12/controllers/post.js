const products = require("../model/Schema");
const cart = require("../model/cart");
const Users = require("../model/users");
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
    const { user, id } = req.body;
    const product = await products.findOne({ _id: id });

    if (product) {
      const { id } = product;
      let id2 = id;
      console.log(product);
      const person = await Users.findOne({
        name: user.name,
        password: user.password,
      });

      if (person) {
        let { id } = person;
        const item = await Users.findOneAndUpdate(
          {
            name: user.name,
            password: user.password,
          },
          {
            id: [...id, id2],
          }
        );
        res.send({ success: true, item: item });
      } else {
        res.send({ success: false, info: "User is not available " });
      }
      // console.log(person);
    } else {
      res.send({ success: false, info: "Item is not in the Products" });
    }
  } catch (error) {
    console.log(error);
    console.log("Error in add items in cart");
    res.send({ success: false, error: error }).status(404);
  }
};
const createUser = async (req, res) => {
  try {
    console.log(req.body);
    await Users.create(req.body);

    res.json({ success: true });
  } catch (error) {
    res.send({ success: false, error: error }).status(404);
  }
};
module.exports = { addItems, addItemsInCart, createUser };
