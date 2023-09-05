const Looger2 = (req,res,next) => {
  console.log("Looger2 is running");
  next()
};
module.exports = Looger2;
