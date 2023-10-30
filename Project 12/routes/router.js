const express = require("express");
const router = express.Router();
const { addItems, addItemsInCart } = require("../controllers/post");
const {
  getAllItems,
  GetSingleItem,
  getAllCartItems,
} = require("../controllers/get");
const {
  deleteAllItems,
  deleteSingleItem,
  deleteSingleCart,
  deleteAllCart,
} = require("../controllers/delete");
const { UpdateOneItem } = require("../controllers/patch");

router.post("/add", addItems);
router.post("/add/in/cart", addItemsInCart);
router.get("/", getAllItems);
router.get("/get/all/cart", getAllCartItems);
router.get("/get/single", GetSingleItem);
router.delete("/delete/all", deleteAllItems);
router.delete("/delete/single", deleteSingleItem);
router.delete("/delete/single/cart", deleteSingleCart);
router.delete("/delete/all/cart", deleteAllCart);
router.patch("/update/single/item/:name", UpdateOneItem);
module.exports = router;
