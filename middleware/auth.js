//used for verifivcation of tokens
module.exports= (req, res, next) =>{
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({
      status: "error",
    });
  }
}
