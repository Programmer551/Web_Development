const chat = require("../model/Schema");

const allMessages = async (req, res) => {
  const messages = await chat.find();
  res.json(messages);
};
const addMessage = async (req, res) => {
  console.log(req.body);
  const newMessage = await chat.create({ message: req.body.message });
  res.json({ success: true, message: newMessage });
};
module.exports = { allMessages, addMessage };
