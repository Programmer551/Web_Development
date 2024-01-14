// const mongoose = require("mongoose");
// const schema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Must Provide the name!"],
//     trim: true,
//   },

//   message: {
//     type: String,
//     required: [true, "Must Provide the Message!"],
//     trim: true,
//   },
// });
// // delete mongoose.connection.models["Testing"];

// module.exports = mongoose.model("Testing", schema);
// const mongoose = require("mongoose");

// if (mongoose.connection.models["Testing"]) {
//   // Model already exists, no need to redefine
//   console.log("exists");

//   module.exports = mongoose.model("Testing");
// } else {
//   // Define the model
//   const contactSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: [true, "Must Provide the name!"],
//       trim: true,
//     },

//     message: {
//       type: String,
//       required: [true, "Must Provide the Message!"],
//       trim: true,
//     },
//   });
//   delete mongoose.connection.models["Testing"];
//   module.exports = mongoose.model("Testing", contactSchema);
// }
const mongoose = require("mongoose");

if (mongoose.connection.models["Testing"]) {
  // Model already exists, no need to redefine
  console.log("Model 'Testing' already exists");
  module.exports = mongoose.model("Testing");
} else {
  // Define the model
  const contactSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "Must Provide the email!"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Must Provide the Message!"],
      trim: true,
    },
  });

  // Try to delete the existing model
  try {
    delete mongoose.connection.models["Testing"];
    console.log("Model 'Testing' deleted from mongoose.models");
  } catch (error) {
    console.error("Error deleting model 'Testing':", error.message);
  }

  // Create and export the model
  const Testing = mongoose.model("Testing", contactSchema);
  console.log("Model 'Testing' defined and exported");
  module.exports = Testing;
}
