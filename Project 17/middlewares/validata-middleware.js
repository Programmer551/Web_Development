const validate = (schema) => async (req, res, next) => {
  try {
    const parsebody = await schema.parseAsync(req.body);
    req.body = parsebody;
    next();
  } catch (error) {
    res.json({ success: false, message: error.errors[0].message }).status(404);
  }
};
module.exports = { validate };
