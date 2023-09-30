const express = require("express");
const router = express.Router();
const { home, get, add, reset } = require("../controllers/controllers");
router.get("/home", home);
router.post("/add", add);
router.post("/get", get);
router.post("/reset", reset);
module.exports = router;
