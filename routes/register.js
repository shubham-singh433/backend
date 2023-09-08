const express = require("express");
const router = express.Router();
// const jwt = require("jsonwebtoken");
// const private_key = "privatekey";
require("../config");
const userModel = require("../models/user");

router.post("/", (req, res) => {
  const {
    email: rmail,
    firstname: rfirstname,
    lastname: rlastname,
    password: rpassword,
  } = req.body;
  if (rmail && rfirstname && rlastname && rpassword) {
    let details = new userModel({
      email: rmail,
      firstname: rfirstname,
      lastname: rlastname,
      password: rpassword,
    });
    details
      .save()
      .then(() => {
        res.json({
          status: "success",
          message: "user registered successfully",
          result: [details],
        });
      })
      .catch((err) => {
        console.error(err);
        res.send({
          status: "error",
          message: "Couldn't register",
        });
      });
  }
  // if fields are empty
  else {
    res
      .status(404)
      .json({ status: "error", message: "All the fields are required" });
  }
});

module.exports =router;
