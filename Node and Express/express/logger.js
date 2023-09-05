const logger = (req, res, next) => {
  console.log("logger is running");
  next();
};
module.exports = logger;
