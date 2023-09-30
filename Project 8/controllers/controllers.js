const mongoose = require("mongoose");
const uri =
  "mongodb+srv://Duraid:551Duraid551@mongodb.lq4ipzs.mongodb.net/Todo?retryWrites=true&w=majority";
mongoose.connect(uri);
const data = new mongoose.Schema({
  data: String,
  key: String,
});

const items = new mongoose.model("items", data);
const home = ("/", (req, res) => {});
const add =
  ("/add",
  (req, res) => {
    (async () => {
      try {
        await items.insertMany(req.body);
      } catch (error) {
        console.log(error);
      } finally {
      }
    })();
    console.log(req.body);
    res.json({ sucess: true });
    console.log("Post");
  });
const reset =
  ("/reset",
  (req, res) => {
    (async () => {
      try {
        await items.deleteMany({ __v: 0 });
      } catch (error) {
        console.log(error);
      }
    })();
    res.json({ sucess: true });
  });
const get =
  ("/get",
  (req, res) => {
    (async () => {
      try {
        let data = await items.find();
        res.json(data);
      } catch (error) {
        console.log(error);
      }
    })();
  });
module.exports = { home, get, add, reset };
