const Contact = require("../model/Contact");
const User = require("../model/Schema");
const bcrypt = require("bcrypt");
const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const exists = await User.findOne({ email });
    if (exists) {
      res.json({ success: false, message: "Email already exists" }).status(400);
      return;
    }

    const user = await User.create({ name, email, password, phone });
    res.json({
      success: true,
      message: "User created successfully",
      user,
      token: await user.generateToken(),
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exists = await User.findOne({ email });

    if (!exists) {
      console.log("Exists");
      res.json({ success: false, message: "Ivalid Data" }).status(400);
      return;
    }

    const compare = await bcrypt.compare(password, exists.password);
    // console.log(compare);
    if (!compare) {
      console.log("Compare");
      res
        .json({
          success: false,
          message: "Ivalid Data",
          // password: exists.password,
        })
        .status(400);
      return;
    }

    res.json({
      success: true,
      message: "Login successful",
      exists,
      token: await exists.generateToken(),
    });
    console.log(compare);
  } catch (error) {
    res.json({ success: false, error: error });
  }
};
const form = async (req, res) => {
  try {
    const formData = await Contact.create(req.body);
    res.json({ success: true, formData });
  } catch (error) {
    res.json({ success: false, error: error });
  }
};
const user = async (req, res) => {
  try {
    const UserData = req.user;
    res.json({ UserData });
  } catch (error) {
    res.json({ success: false, error: error }).status(500);
  }
};
module.exports = { register, login, form, user };
