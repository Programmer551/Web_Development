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
    const compare = exists.verify(password);
    if (!compare) {
      console.log("Compare");
      res
        .json({
          success: false,
          message: "Ivalid Data",
          password: exists.password,
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
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error });
  }
};
module.exports = { register, login };
