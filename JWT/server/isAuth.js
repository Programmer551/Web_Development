// require("dotenv").config();
// const { verify } = require("jsonwebtoken");

// const isAuth = (req, res) => {
//   const authorization = req.headers["authorization"];

//   if (!authorization) {
//     console.log(authorization);
//     res.send("Not authorized");
//   }
//   // Based on 'Bearer ksfljrewori384328289398432'
//   const token = authorization.split(" ")[1];

//   const { userId } = verify(token, process.env.ACCESS_TOKEN);
//   console.log(userId);
//   return userId;
// };

// module.exports = {
//   isAuth,
// };
const { verify } = require("jsonwebtoken");
require("dotenv").config();

const isAuth = (req) => {
  const authorization = req.headers["authorization"];
  if (!authorization) throw new Error("You need to login.");

  const token = authorization.split(" ")[1];
  try {
    const { userId } = verify(token, process.env.ACCESS_TOKEN_SECRET);
    return userId;
  } catch (error) {
    throw new Error("Invalid token");
  }
};

module.exports = {
  isAuth,
};
