const mongoose = require("mongoose");
const uri =
  "uri";
mongoose.connect(uri);
const data2 = {
  name: "Rafay",
  class: "Sixth",
  smart: false,
};
const data = new mongoose.Schema({
  name: String,
  class: String,
  smart: Boolean,
});

const students = new mongoose.model("students", data);
(async () => {
  try {
    // await Studentt.insertOne(data);
    // const hey = await students.insertMany(data2);
    // console.log(hey);
    // await students.findOneAndUpdate(
    //   { name: "Rafay", class: "Sixth" },
    //   { class: "Fourth" }
    // );
    await students.findOneAndDelete({ name: "Rafay", class: "Fourth" });
    // const hey = await students.find({ name: "Rafay" });
    // console.log(hey);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
})();
