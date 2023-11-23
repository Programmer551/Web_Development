const products = require("../model/Schema");
const Users = require("../model/users");
const bcrypt = require("bcrypt");

require("dotenv").config();
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
    const { password } = user;
    const product = await products.findOne({ _id: id });

    if (product) {
      const { id } = product;
      let id2 = id;

      const person = await Users.findOne({
        name: user.name,
      });

      if (person) {
        const compare = await bcrypt.compare(password, person.password);
        if (compare) {
          let { id } = person;
          const item = await Users.findOneAndUpdate(
            {
              name: user.name,
            },
            {
              id: [...id, id2],
            }
          );
          res.send({ success: true, item: item });
          return;
        }
        res.send({ success: false, info: "Password is incorrect" });
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
const addItemsInPurchase = async (req, res) => {
  try {
    const { user, id } = req.body;
    const { password } = user;
    const product = await products.findOne({ _id: id });

    if (product) {
      const { id } = product;
      let id2 = id;

      const person = await Users.findOne({
        name: user.name,
      });

      if (person) {
        const compare = await bcrypt.compare(password, person.password);
        if (compare) {
          let { Purchase } = person;
          const item = await Users.findOneAndUpdate(
            {
              name: user.name,
            },
            {
              Purchase: [...Purchase, id2],
            }
          );
          res.send({ success: true, item: item });
          return;
        }
        res.send({
          success: false,
          info: "User is not Password is incorrect ",
        });
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
    const { name, password } = req.body;
    const allUsers = await Users.find();
    const user = allUsers.find((user) => user.name == name);

    if (user) {
      res.json({
        success: false,
        info: "Incorrect username or password",
      });
      return;
    }
    const newPassword = await bcrypt.hash(password, 10);

    await Users.create({ name, password: newPassword });

    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, error: error }).status(404);
  }
};
const CheckUser = async (req, res) => {
  try {
    const { user } = req.body;
    const { password } = user;
    const person = await Users.findOne({
      name: user.name,
    });
    if (!person) {
      res.json({ success: false });
      return;
    }

    if (person.name == "Admin" && person.password == "Secret") {
      res.json({ success: true, type: "Admin" });
      return;
    }
    const compare = await bcrypt.compare(password, person.password);
    if (compare) {
      res.json({ success: true, type: "Normal" });
      return;
    }
    res.json({ success: false });

    // res.json({ success: false });
  } catch (error) {
    res.json({ "Error with CheckUser:": error }).status(404);
  }
};
module.exports = {
  addItems,
  addItemsInCart,
  createUser,
  CheckUser,
  addItemsInPurchase,
};
