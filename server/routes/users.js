const express = require("express");
const router = express.Router();
const User = require("../models/user");
const users = require("../controllers/users");

router
  .route("/register")
  .get(users.renderRegisterForm)
  .post(users.registerUser);

// router
//   .route("/login")
//   .get(users.renderLoginForm)
//   .post(
//     passport.authenticate("local", {
//       failureFlash: true,
//       failureRedirect: "/login",
//     }),
//     users.loginUser
//   );

router.get("/logout", users.logout);

module.exports = router;
