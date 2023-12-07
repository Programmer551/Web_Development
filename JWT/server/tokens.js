const { sign } = require("jsonwebtoken");
const CreateAccessToken = (userId) => {
  return sign({ userId }, process.env.ACCESS_TOKEN, { expiresIn: "15m" });
};
const CreateRefershToken = (userId) => {
  return sign({ userId }, process.env.REFERSH_TOKEN, { expiresIn: "16m" });
};
const sendAccessToken = (res, accessToken) => {
  res.json({
    accessToken,
  });
};
const sendRefershToken = (res, token) => {
  res.cookie("refershToken", token, {
    httpOnly: true,
    path: "/refershToken",
  });
};
module.exports = {
  CreateAccessToken,
  CreateRefershToken,
  sendRefershToken,
  sendAccessToken,
};