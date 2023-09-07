const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const profileRoute = require("./routes/profile");
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
app.use(bodyParser.json());
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));


//routes implenetation using middleware
app.use("/login",loginRoute);
app.use("/profile", profileRoute);
app.use("/register",registerRoute);


app.listen(8080, () => {
  console.log("Listening on port 8080");
});
