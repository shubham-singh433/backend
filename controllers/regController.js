require("../config");
const userModel = require("../models/user");

module.exports = async (req, res) => {
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

    let saved_Db = details.save();
    console.log(saved_Db);
    if (saved_Db) {
      res.json({
        status: "success",
        message: "user registered successfully",
        result: [details],
      });
    } else {
      console.error(err);
      res.send({
        status: "error",
        message: "Couldn't register",
      });
    }
  }
  // if fields are empty
  else {
    res
      .status(404)
      .json({ status: "error", message: "All the fields are required" });
  }
};
