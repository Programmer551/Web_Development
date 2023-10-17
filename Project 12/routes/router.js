const express = require("express");
const router = express.Router();
const {
  addItems,
  getAllItems,
  deleteAllItems,
  deleteSingleItem,
} = require("../controllers/controllers");
router.post("/add", addItems);
router.get("/", getAllItems);
router.delete("/DeleteAll", deleteAllItems);
router.delete("/DeleteSingle", deleteSingleItem);
module.exports = router;
