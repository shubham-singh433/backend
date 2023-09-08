const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const private_key = "privatekey";

module.exports = async (req, res) => {
  let key;
  const { email: reqEmail, password: reqPassword } = req.body;
  jwt.sign(
    { email: reqEmail, password: reqPassword },
    private_key,
    { expiresIn: "300s" },
    (err, token) => {
      key = token;
      // console.log(key);
    }
  );
  let value = await userModel.findOne({
    email: reqEmail,
    password: reqPassword,
  });

  // console.log(data.password);
  //if the email is present in the database then and password is correct
  if (!value) {
    res.status(404).json({
      status: "error",
      message: "Wrong email address",
    });
  } else {
    if (value.password == reqPassword) {
      res.status(200).json({
        status: "success",
        message: "Logged in successfully",
        token: key,
        userdetails: value,
      });
    }
    //if password is incorrect then
    else {
      res.status(404).json({
        status: "error",
        message: "Wrong password",
      });
    }
  }
};
