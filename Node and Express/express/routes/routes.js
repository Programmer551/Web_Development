const express = require("express");
const router = express.Router();
const { minecraft, RDR, Granny } = require("../controllers/game");
router.get("/minecraft", minecraft);
router.get("/RDR", RDR);
router.get("/Granny", Granny);
module.exports = router;
