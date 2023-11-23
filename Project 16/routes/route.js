const router = require("express").Router();
const { allMessages, addMessage } = require("../controllers/controller");

router.get("/all", allMessages);
router.post("/add", addMessage);
module.exports = router;
