const express = require("express");
const router = express.Router();

require("../config");

const auth=require("../middleware/auth");
const profileController=require("../controllers/profileController");

router.post("/", auth, profileController);


module.exports =router;
