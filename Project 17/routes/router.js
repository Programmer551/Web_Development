const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/post");
const {} = require("../controllers/get");
const {} = require("../controllers/delete");
const { validate } = require("../middlewares/validata-middleware.js");
const { signupSchema } = require("../validators/auth-validator.js");
// router.post("/register", validate(signupSchema), register);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(login);
module.exports = router;
