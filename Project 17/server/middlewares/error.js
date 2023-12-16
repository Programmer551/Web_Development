const error = (error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Backend error";
  const extra = error.extra || "Backend error";
  return res.json({ message, extra }).status(status);
};
module.exports = { error };
