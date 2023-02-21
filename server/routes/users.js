const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { signupUser, loginUser } = require("../controllers/usersController");

router.post("/signup", signupUser);
router.post("/login", loginUser);

module.exports = router;
