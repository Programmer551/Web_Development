const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const schema = new mongoose.Schema({
  name: {
    required: true,
    trim: true,
    type: String,
  },
  password: {
    required: true,
    trim: true,
    type: String,
  },
  email: {
    required: true,
    trim: true,
    type: String,
  },
  phone: {
    required: true,
    trim: true,
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
schema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
  } catch (error) {
    next(error);
  }
});
schema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
  } catch (error) {
    console.log("JWT", error);
  }
};
schema.methods.verify = async function (password) {
  try {
    return bcrypt.compare(this.password, password);
  } catch (error) {
    console.log("Verify", error);
  }
};

module.exports = mongoose.model("Users", schema);
