const jwt = require("jsonwebtoken");
const User = require("../model/Schema");
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Token is required" });
  }

  try {
    const jwtToken = token.replace("Bearer", "").trim();
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);
    // console.log(isVerified);
    const UserData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    req.token = token;
    req.user = UserData;
    req.UserId = UserData._id;
    next();
  } catch (error) {
    res.json({ success: false, error: error }).status(500);
  }
};
module.exports = { authMiddleware };
