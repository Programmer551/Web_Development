const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("DB is Connected");
    })
    .catch((Error) => {
      console.log(Error);
    });
};

const data = new mongoose.Schema({
  data: String,
  key: String,
});
module.exports = connectDB;
