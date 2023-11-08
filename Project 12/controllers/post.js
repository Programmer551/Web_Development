const products = require("../model/Schema");
const Users = require("../model/users");
const addItems = async (req, res) => {
  try {
    const { admin, item } = req.body;
    const person = await Users.findOne({
      name: admin.name,
      password: admin.password,
    });
    if (person) {
      await products.create(item);
      res.json({ success: true });
      return;
    }
    res.send("This is not Admin");
  } catch (error) {
    res.json({ "Error with addItems:": error }).status(404);
  }
};
const addItemsInCart = async (req, res) => {
  try {
    const { user, id } = req.body;
    const product = await products.findOne({ _id: id });

    if (product) {
      const { id } = product;
      let id2 = id;

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
    } else {
      res.json({ success: false, info: "Item is not in the Products" });
    }
  } catch (error) {
    res.json({ success: false, error: error }).status(404);
  }
};
const createUser = async (req, res) => {
  try {
    let data = await Users.findOne(req.body);
    console.log(req.body);
    // console.log(data);
    if (data) {
      res.json({
        success: false,
        info: "Username and password is already in use",
      });
      return;
    }
    await Users.create(req.body);

    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, error: error }).status(404);
  }
};
const CheckUser = async (req, res) => {
  try {
    
    const { user } = req.body;
    const person = await Users.findOne({
      name: user.name,
      password: user.password,
    });
    if (person) {
      if (person.name == "Admin" && person.password == "Secret") {
        res.json({ success: true, type: "Admin" });
        return;
      }
      res.json({ success: true, type: "Normal" });
      return;
    }
    res.json({ success: false });
  } catch (error) {
    res.json({ "Error with CheckUser:": error }).status(404);
  }
};
module.exports = { addItems, addItemsInCart, createUser, CheckUser };
