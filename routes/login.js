const express = require("express");
// const dbconnect = require("../mongodb");
require("../config");
const logController=require("../controllers/logAuth")
const router = express.Router();

const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));

// app.use(bodyParser.raw());
router.post("/", logController);
module.exports = router;






















// app.post("/profile", verifyTokens, (req, res) => {
//   jwt.verify(req.token, private_key, (err, authData) => {
//     if (err) {
//       res.status(404).send({
//         status: "error",
//         message: "Invalid token",
       
//       });
//     } else {
//       res.json({ status: "success", message: "user data", data: authData });
//     }
//   });
// });

// //used for verifivcation of tokens
// function verifyTokens(req, res, next) {
//   const bearerHeader = req.headers["authorization"];
//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader.split(" ");
//     const token = bearer[1];
//     req.token = token;
//     next();
//   } else {
//     res.send({
//       status: "error",
//     });
//   }
// }







// dbconnect().then((result) => {
  //   result
  //     .find({ email: reqEmail })
  //     .toArray()
  //     .then((data) => {
  //       console.log(data);
  //       //if the email is present in the database then and password is correct
  //       if (data[0].password == reqPassword) {
  //         res.status(200).json({
  //           status: "success",
  //           token: key,
  //           message: "Logged in successfully",
  //           userdetails: data,
  //         });
  //       }
  //       //if password is incorrect then
  //       else {
  //         res.status(404).json({
  //           status: "error",
  //           message: "Wrong password",
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       res.status(404).json({
  //         status: "error",
  //         message: "Wrong email address",
  //       });
  //     });
  // });