const jwt = require("jsonwebtoken");
const private_key = "privatekey";
const userModel = require("../models/user");

module.exports =async (req, res) => {
  jwt.verify(req.token, private_key, async (err, authData) => {
    if (err) {
      res.status(404).send({
        status: "error",
        message: "Invalid token",
      });
    } else {
      let details = await userModel.findOne({ email: authData.email });

      res.json({ status: "success", message: "user data", data: [details] });
    }
  });
};
