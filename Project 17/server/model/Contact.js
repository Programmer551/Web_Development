const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    required: true,
    trim: true,
    type: String,
  },

  email: {
    required: true,
    trim: true,
    type: String,
  },
  message: {
    required: true,
    trim: true,
    type: String,
  },
});

module.exports = mongoose.model("Contact", schema);
