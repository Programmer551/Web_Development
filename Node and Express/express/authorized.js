const author = (req, res, next) => {
  const { user } = req.query;
  if(user==="Duraid"){
    res.send("Welcome Duraid")

}
else{
    // res.status(401).send("Get Out")
}
next()
};
module.exports=author
