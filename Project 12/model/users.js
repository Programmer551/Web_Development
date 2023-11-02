const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must Provide the name!"],
    trim: true,
  },
  password: {
    type: [Number, String],
    required: [true, "Must Provide the Password!"],
    trim: true,
  },
});
module.exports = mongoose.model("Users", schema);
