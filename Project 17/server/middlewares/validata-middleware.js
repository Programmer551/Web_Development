// const validate = (schema) => async (req, res, next) => {
//   try {
//     const parsebody = await schema.parseAsync(req.body);
//     req.body = parsebody;
//     next();
//   } catch (error) {
//     res.json({ success: false, message: error.errors[0].message }).status(404);
//   }
// };
// module.exports = { validate };
const { z } = require("zod");

const validate = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync(req.body);
    next();
  } catch (error) {
    const err = {
      status: 422,
      message: error.errors[0].message,
    };
    // res.status(400).json({
    //   success: false,
    //   message: error.errors[0]?.message || "Invalid data",
    // });
    next(err);
  }
};

module.exports = { validate };
