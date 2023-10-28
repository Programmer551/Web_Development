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

router.post("/add", addItems);
router.post("/addInCart", addItemsInCart);
router.get("/", getAllItems);
router.get("/getAllCart", getAllCartItems);
router.get("/GetSingle", GetSingleItem);
router.delete("/DeleteAll", deleteAllItems);
router.delete("/DeleteSingle", deleteSingleItem);
router.delete("/DeleteSingleCart", deleteSingleCart);
router.delete("/DeleteAllCart", deleteAllCart);
module.exports = router;
