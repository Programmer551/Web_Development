const express = require("express");
const router = express.Router();
const { addItems, getAllItems } = require("../controllers/controllers");
router.post("/add", addItems);
router.get("/", getAllItems);
module.exports = router;
