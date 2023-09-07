
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const private_key = "privatekey";
require("../config");
const userModel = require("../models/user");

router.post("/", verifyTokens, (req, res) => {
  jwt.verify(req.token, private_key, async(err, authData) => {
    if (err) {
      res.status(404).send({
        status: "error",
        message: "Invalid token",
      });
    } else {
            let details=await userModel.findOne({email: authData.email});
            
      res.json({ status: "success", message: "user data", data: [details] });
    }
  });
});

//used for verifivcation of tokens
function verifyTokens(req, res, next) {
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
module.exports =router;
