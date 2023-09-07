require('dotenv').config();

const Mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1:27017";
// const dbname = "users";
 Mongoose.connect(
   `${process.env.DB_CONNECTION_URL}/${process.env.DB_COLLECTION}`
 )
   .then(() => {
     console.log("Connected to Mongoose");
   })
   .catch((err) => {
     console.log("Error connecting to Mongoose" + err);
   });