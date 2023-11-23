const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  message: {
    type: String,
    required: [false],
    trim: true,
  },
});
module.exports = mongoose.model("Chat", schema);
