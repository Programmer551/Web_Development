const { sign } = require("jsonwebtoken");
const CreateAccessToken = (userId) => {
  return sign({ userId }, process.env.ACCESS_TOKEN, { expiresIn: "15m" });
};
const CreateRefershToken = (userId) => {
  return sign({ userId }, process.env.REFERSH_TOKEN, { expiresIn: "16m" });
};
module.exports = {
  CreateAccessToken,
  CreateRefershToken,
};
