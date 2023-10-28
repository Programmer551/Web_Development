const express = require("express");
const router = express.Router();
// const {
//   addItems,
//   getAllItems,
//   deleteAllItems,
//   deleteSingleItem,
//   GetSingleItem,
// } = require("../controllers/controllers");
const { addItems, addItemsInCart } = require("../controllers/post");
const { getAllItems, GetSingleItem } = require("../controllers/get");
const { deleteAllItems, deleteSingleItem } = require("../controllers/delete");

router.post("/add", addItems);
router.post("/addInCart", addItemsInCart);
router.get("/", getAllItems);
router.get("/GetSingle", GetSingleItem);
router.delete("/DeleteAll", deleteAllItems);
router.delete("/DeleteSingle", deleteSingleItem);
module.exports = router;
